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
    public List<Readings> getReadings() {
        return readingsRepository.findAll();

    }

    public void addRead(Readings readings) {
        readingsRepository.save(readings);

    }
}
