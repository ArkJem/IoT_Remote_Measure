package com.example.Temperature_Measurement.exceptions;


import org.springframework.http.HttpStatus;

import java.time.ZonedDateTime;

public class RegisterException {
    private final String mess;
    private final ZonedDateTime time;
    private final HttpStatus status;


    public RegisterException(String mess, ZonedDateTime time, HttpStatus status) {
        this.mess = mess;
        this.time = time;
        this.status = status;
    }
}
