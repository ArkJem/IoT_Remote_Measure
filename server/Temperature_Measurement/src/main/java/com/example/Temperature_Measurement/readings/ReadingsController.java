package com.example.Temperature_Measurement.readings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
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
        ZoneId zoneId = ZoneId.of("Europe/Warsaw");
        return readingsService.getReadingsBetweenIdSeconds(LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC) - 86400,LocalDateTime.now(zoneId).toEpochSecond(ZoneOffset.UTC));
    }
    @PostMapping
    public void saveRead(@RequestBody Readings read){
        readingsService.addRead(read);
    }


}
