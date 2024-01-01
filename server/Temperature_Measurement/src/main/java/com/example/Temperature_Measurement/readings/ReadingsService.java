package com.example.Temperature_Measurement.readings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.List;
@Service
public class ReadingsService {

    private final ReadingsRepository readingsRepository;
    @Autowired
    public ReadingsService(ReadingsRepository readingsRepository){
        this.readingsRepository = readingsRepository;
    }

    public List<Readings> getReadingsBetweenIdSeconds(long startIdSeconds, long endIdSeconds) {
        return readingsRepository.findByIdSecondsBetween(startIdSeconds, endIdSeconds);
    }
    public List<Readings> getReadings(int limit) {
        ZoneId zoneId = ZoneId.of("Europe/Warsaw");
        switch(limit) {
            case 3:
                List <Readings> listThreeLastDays = readingsRepository.findByIdSecondsBetween(LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC)-(3*86400),LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC));
                return  listThreeLastDays;
            case 7:
                List <Readings> listSevenLastDays = readingsRepository.findByIdSecondsBetween(LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC)-(7*86400),LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC));
                return  listSevenLastDays;
            case 14:
                List <Readings> listFourteenLastDays = readingsRepository.findByIdSecondsBetween(LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC)-(30*86400),LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC));
                return  listFourteenLastDays;
            default:
                List <Readings> listYesterday = readingsRepository.findByIdSecondsBetween(LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC)-(86400),LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC));
                return  listYesterday;

        }

    }

    public void addRead(Readings readings) {
        readingsRepository.save(readings);

    }
}
