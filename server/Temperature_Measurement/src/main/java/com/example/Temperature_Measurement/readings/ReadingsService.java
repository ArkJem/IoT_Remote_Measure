package com.example.Temperature_Measurement.readings;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReadingsService {
    public List<Readings> getReadings(){
        return List.of(new Readings(
                1L,
                123.0F,
                122.0F,
                (float) 123.0F

        ));
}
}
