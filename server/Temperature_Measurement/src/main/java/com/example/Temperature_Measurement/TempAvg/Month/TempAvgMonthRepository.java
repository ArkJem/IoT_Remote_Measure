package com.example.Temperature_Measurement.TempAvg.Month;

import com.example.Temperature_Measurement.TempAvg.TempAvg;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TempAvgMonthRepository extends JpaRepository<TempAvgMonth,Long> {
    List<TempAvgMonth> findByDateBetween(long startEpochSeconds, long endEpochSeconds);

}
