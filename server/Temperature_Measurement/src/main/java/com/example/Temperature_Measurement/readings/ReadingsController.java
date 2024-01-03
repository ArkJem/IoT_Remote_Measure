package com.example.Temperature_Measurement.readings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/readings")
public class ReadingsController {
    private final ReadingsService readingsService;

    @Autowired
    public ReadingsController(ReadingsService readingsService) {
        this.readingsService = readingsService;
    }

    @GetMapping
    public List<Readings> getReadings(){
        return readingsService.getReadings();
    }
    @PostMapping
    public void saveRead(@RequestBody Readings read){
        readingsService.addRead(read);
    }


}
