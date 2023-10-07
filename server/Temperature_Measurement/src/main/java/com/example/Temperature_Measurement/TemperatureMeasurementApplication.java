package com.example.Temperature_Measurement;

import com.example.Temperature_Measurement.readings.Readings;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
public class TemperatureMeasurementApplication {

	public static void main(String[] args) {
		SpringApplication.run(TemperatureMeasurementApplication.class, args);
	}
	@GetMapping
	public List<Readings> Test(){
		return List.of(new Readings(
				1L,
                123.0F,
				122.0F,
                (float) 123.0F

        ));
	}
}

