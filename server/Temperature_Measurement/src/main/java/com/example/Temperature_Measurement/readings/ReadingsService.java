package com.example.Temperature_Measurement.readings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReadingsService {

    private final ReadingsRepository readingsRepository;
    @Autowired
    public ReadingsService(ReadingsRepository readingsRepository){
        this.readingsRepository = readingsRepository;
    }
    public List<Readings> getReadings(int limit) {
        Pageable pageable = PageRequest.of(0,limit);
        return readingsRepository.findAll(pageable).getContent();
    }

    public Readings addRead(Readings read) {
        return readingsRepository.save(read);

    }
}
