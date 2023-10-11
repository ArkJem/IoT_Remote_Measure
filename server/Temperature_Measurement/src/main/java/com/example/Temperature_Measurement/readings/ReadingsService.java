package com.example.Temperature_Measurement.readings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReadingsService {

    private final ReadingsRepository readingsRepository;
    @Autowired
    public ReadingsService(ReadingsRepository readingsRepository){
        this.readingsRepository = readingsRepository;
    }
    public List<Readings> getReadings() {
        return readingsRepository.findAll();
    }

    public Readings addRead(Readings read) {
        return readingsRepository.save(read);

    }
}
