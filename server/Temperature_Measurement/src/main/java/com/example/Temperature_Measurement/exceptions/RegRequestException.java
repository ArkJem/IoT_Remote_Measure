package com.example.Temperature_Measurement.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;
@Getter
public class RegRequestException extends RuntimeException {
    public HttpStatus status;
    public RegRequestException(String mess) {
        super(mess);
    }

    public RegRequestException(String mess, HttpStatus status) {
        super(mess);
        this.status = status;
    }
}
