package com.example.Temperature_Measurement.TempAvg.Year;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tempavgyear")
public class TempAvgYearController {

    private final TempAvgYearService tempAvgYearService;

    @Autowired
    public TempAvgYearController(TempAvgYearService tempAvgYearService) {
        this.tempAvgYearService = tempAvgYearService;
    }

    @GetMapping
    public List<TempAvgYear> getTempAvgYear() {
        //tempAvgYearService.saveTempAvgFromReadingsForYear();
        return tempAvgYearService.getTempAvgYear();
    }
}