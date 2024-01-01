package com.example.Temperature_Measurement.TempAvg;

import com.example.Temperature_Measurement.readings.Readings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TempAvgRepository extends JpaRepository<TempAvg,Long> {
    List<TempAvg> findByDateBetween(long startEpochSeconds, long endEpochSeconds);

}
