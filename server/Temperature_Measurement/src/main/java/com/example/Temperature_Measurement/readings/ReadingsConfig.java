package com.example.Temperature_Measurement.readings;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class ReadingsConfig {
    @Bean
    CommandLineRunner commandLineRunner(ReadingsRepository repository){
        return args -> {
           Readings one = new Readings(
                    1L,
                    12F,
                    12F,
                    12F
            );
            Readings two = new Readings(
                    2L,
                    13F,
                    13F,
                    13F
            );
            repository.saveAll(
                    List.of(one,two)
            );
        };
    }
}
