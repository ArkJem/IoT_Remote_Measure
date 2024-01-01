package com.example.Temperature_Measurement.TempAvg.Month;

import com.example.Temperature_Measurement.TempAvg.TempAvg;
import com.example.Temperature_Measurement.TempAvg.TempAvgRepository;
import com.example.Temperature_Measurement.TempAvg.TempAvgService;
import com.example.Temperature_Measurement.readings.Readings;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.temporal.TemporalAdjusters;
import java.util.List;
@Service
public class TempAvgMonthService {
    private final TempAvgRepository tempAvgRepository;

    private final TempAvgMonthRepository tempAvgMonthRepository;
    public TempAvgMonthService(TempAvgRepository tempAvgRepository, TempAvgMonthRepository tempAvgMonthRepository) {
        this.tempAvgRepository = tempAvgRepository;
        this.tempAvgMonthRepository = tempAvgMonthRepository;
    }

    public List<TempAvg> getReadingsBetweenDates(long startIdSeconds, long endIdSeconds) {
        return tempAvgRepository.findByDateBetween(startIdSeconds, endIdSeconds);
    }
    @Scheduled(cron = "0 59 23 L * ?")
    public void saveTempAvgFromReadingsForMonth() {
        ZoneId zoneId = ZoneId.of("Europe/Warsaw");

        LocalDateTime firstDayOfMonth = LocalDateTime.now(zoneId).with(TemporalAdjusters.firstDayOfMonth());
        LocalDateTime lastDayOfMonth = LocalDateTime.now(zoneId).with(TemporalAdjusters.lastDayOfMonth());


        List<TempAvg> listTest = tempAvgRepository.findByDateBetween( firstDayOfMonth.toEpochSecond(ZoneOffset.UTC),lastDayOfMonth.toEpochSecond(ZoneOffset.UTC));
        Float sumSensReadShadowMonth = 0.0F;
        Float sumSensReadSunMonth = 0.0F;
        Float sumSunShadowMonth = 0.0F;

        for (TempAvg tempavg : listTest) {
            sumSensReadShadowMonth += tempavg.getAvg_read_shadow();
            sumSensReadSunMonth += tempavg.getAvg_read_sun();
            sumSunShadowMonth += tempavg.getAvg_sun_shadow();
        }

        TempAvgMonth tempAvgMonth = new TempAvgMonth();
        tempAvgMonth.setDate(LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC));
        tempAvgMonth.setAvg_read_shadow_month(sumSensReadShadowMonth / listTest.size());
        tempAvgMonth.setAvg_read_sun_month(sumSensReadSunMonth / listTest.size());
        tempAvgMonth.setAvg_sun_shadow_month(sumSunShadowMonth / listTest.size());
        tempAvgMonthRepository.save(tempAvgMonth);
    }

    public List<TempAvgMonth> getTempAvgMonth() {
        return tempAvgMonthRepository.findAll();
    }

}