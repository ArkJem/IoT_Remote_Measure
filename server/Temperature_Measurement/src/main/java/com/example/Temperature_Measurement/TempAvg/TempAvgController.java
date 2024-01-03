package com.example.Temperature_Measurement.TempAvg;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tempavg")
public class TempAvgController {

    private final TempAvgService tempAvgService;

    @Autowired
    public TempAvgController(TempAvgService tempAvgService) {
        this.tempAvgService = tempAvgService;
    }

    @GetMapping
    public List<TempAvg> getTempAvg(@RequestParam(name="limit",defaultValue = "10") int limit) {
        //tempAvgService.saveTempAvgFromReadingsForDay();
        return tempAvgService.getTempAvg(limit);
    }
}