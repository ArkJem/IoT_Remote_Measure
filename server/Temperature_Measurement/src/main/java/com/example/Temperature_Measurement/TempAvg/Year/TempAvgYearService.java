package com.example.Temperature_Measurement.TempAvg.Year;

import com.example.Temperature_Measurement.TempAvg.Month.TempAvgMonth;
import com.example.Temperature_Measurement.TempAvg.Month.TempAvgMonthRepository;
import com.example.Temperature_Measurement.TempAvg.TempAvg;
import com.example.Temperature_Measurement.TempAvg.TempAvgRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.temporal.TemporalAdjusters;
import java.util.List;
@Service
public class TempAvgYearService {
    private final TempAvgMonthRepository tempAvgMonthRepository;
    private final TempAvgYearRepository tempAvgYearRepository;

    public TempAvgYearService(TempAvgMonthRepository tempAvgMonthRepository, TempAvgYearRepository tempAvgYearRepository) {
        this.tempAvgMonthRepository = tempAvgMonthRepository;
        this.tempAvgYearRepository = tempAvgYearRepository;
    }

    @Scheduled(cron = "0 55 23 31 12 ?", zone = "Europe/Warsaw")
    public void saveTempAvgFromReadingsForYear() {
        ZoneId zoneId = ZoneId.of("Europe/Warsaw");
        LocalDateTime firstDayOfFirstMonth = LocalDateTime.now(zoneId).with(TemporalAdjusters.firstDayOfYear());
        LocalDateTime lastDayOfLastMonth = LocalDateTime.now(zoneId).with(TemporalAdjusters.lastDayOfYear());



        List<TempAvgMonth> listTest = tempAvgMonthRepository.findByDateBetween(firstDayOfFirstMonth.toEpochSecond(ZoneOffset.UTC),lastDayOfLastMonth.toEpochSecond(ZoneOffset.UTC));
        Float sumSensReadShadowYear = 0.0F;
        Float sumSensReadSunYear = 0.0F;
        Float sumSunShadowYear = 0.0F;

        for (TempAvgMonth tempavgmonth : listTest) {
            sumSensReadShadowYear += tempavgmonth.getAvg_read_shadow_month();
            sumSensReadSunYear += tempavgmonth.getAvg_read_sun_month();
            sumSunShadowYear += tempavgmonth.getAvg_sun_shadow_month();
        }

        TempAvgYear tempAvgYear = new TempAvgYear();
        tempAvgYear.setDate(LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC));
        tempAvgYear.setAvg_read_shadow_year(sumSensReadShadowYear / listTest.size());
        tempAvgYear.setAvg_read_sun_year(sumSensReadSunYear / listTest.size());
        tempAvgYear.setAvg_sun_shadow_year(sumSunShadowYear / listTest.size());
        tempAvgYearRepository.save(tempAvgYear);
    }

    public List<TempAvgYear> getTempAvgYear() {
        return tempAvgYearRepository.findAll();
    }

}