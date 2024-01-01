package com.example.Temperature_Measurement.readings;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;


@Repository
public interface ReadingsRepository
        extends JpaRepository<Readings,Long> {
    List<Readings> findByIdSecondsBetween(long startIdSeconds, long endIdSeconds);

    @Query("SELECT MAX(r.id) FROM Readings r")
    Long findMaxId();
}
