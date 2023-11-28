package com.example.Temperature_Measurement.exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import java.time.ZonedDateTime;
@ControllerAdvice
public class RegExceptionHandler {
    @ExceptionHandler(value = {RegRequestException.class})
    public ResponseEntity<Object> handleRegisterException(RegRequestException exception)
    {
        RegisterException registerException = new RegisterException(
                exception.getMessage(),
                ZonedDateTime.now(),
                exception.getStatus());
        return new ResponseEntity<>(registerException, exception.getStatus());

    }

}
