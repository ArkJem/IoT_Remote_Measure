package com.example.Temperature_Measurement.TempAvg.Month;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tempavgmonth")
public class TempAvgMonthController {

    private final TempAvgMonthService tempAvgMonthService;

    @Autowired
    public TempAvgMonthController(TempAvgMonthService tempAvgMonthService) {
        this.tempAvgMonthService = tempAvgMonthService;
    }

    @GetMapping
    public List<TempAvgMonth> getTempAvgMonth() {
        //tempAvgMonthService.saveTempAvgFromReadingsForMonth();
        return tempAvgMonthService.getTempAvgMonth();
    }
}