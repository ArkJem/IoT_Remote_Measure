package com.example.Temperature_Measurement.TempAvg;

import com.example.Temperature_Measurement.TempAvg.TempAvgRepository;
import com.example.Temperature_Measurement.readings.Readings;
import com.example.Temperature_Measurement.readings.ReadingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.time.ZoneOffset;


@Service
public class TempAvgService {

    private final TempAvgRepository tempAvgRepository;
    private final ReadingsRepository readingsRepository;

    @Autowired
    public TempAvgService(TempAvgRepository tempAvgRepository, ReadingsRepository readingsRepository) {
        this.tempAvgRepository = tempAvgRepository;
        this.readingsRepository = readingsRepository;
    }

    public List<TempAvg> getTempAvgBetweenDates(long startDate, long endDate) {
        return tempAvgRepository.findByDateBetween(startDate, endDate);
    }

    @Scheduled(cron = "0 13 19 * * *", zone = "Europe/Warsaw")
    public void saveTempAvgFromReadingsForDay() {
        System.out.println("TEST!");
        System.out.println(LocalDateTime.now());
        ZoneId zoneId = ZoneId.of("Europe/Warsaw");
        List<Readings> listTest = readingsRepository.findByIdSecondsBetween(LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC) - 86400, LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC));
        Float sumSensReadShadow = 0.0F;
        Float sumSensReadSun = 0.0F;
        Float sumSunShadow = 0.0F;

        for (Readings reading : listTest) {
            sumSensReadShadow += reading.getSens_read_shadow();
            sumSensReadSun += reading.getSens_read_sun();
            sumSunShadow += reading.getSens_read_avg();
        }

        TempAvg tempAvg = new TempAvg();
        tempAvg.setDate_sec(LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC));
        tempAvg.setAvg_read_shadow(sumSensReadShadow / listTest.size());
        tempAvg.setAvg_read_sun(sumSensReadSun / listTest.size());
        tempAvg.setAvg_sun_shadow(sumSunShadow / listTest.size());
        tempAvgRepository.save(tempAvg);

    }

    public List<TempAvg> getTempAvg(int limit) {
        ZoneId zoneId = ZoneId.of("Europe/Warsaw");
        switch (limit) {
            case 3:
                return tempAvgRepository.findByDateBetween(
                        LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC) - (3 * 86400),
                        LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC)
                );
            case 7:
                return tempAvgRepository.findByDateBetween(
                        LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC) - (7 * 86400),
                        LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC)
                );
            case 14:
                return tempAvgRepository.findByDateBetween(
                        LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC) - (14 * 86400),
                        LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC)
                );
            default:
                return tempAvgRepository.findByDateBetween(
                        LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC) - 86400,
                        LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC)
                );
        }
    }
}