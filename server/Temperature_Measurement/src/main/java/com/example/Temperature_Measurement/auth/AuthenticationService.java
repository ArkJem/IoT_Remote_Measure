package com.example.Temperature_Measurement.auth;

import com.example.Temperature_Measurement.config.JwtService;
import com.example.Temperature_Measurement.exceptions.RegRequestException;
import com.example.Temperature_Measurement.users.Role;
import com.example.Temperature_Measurement.users.User;
import com.example.Temperature_Measurement.users.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .name(request.getFirstname())
                .surname(request.getLastname())
                .email(request.getEmail())
                .pass(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        if(repository.existsByEmail(request.getEmail()))
        {
            throw new RegRequestException("Email already exists!", HttpStatus.BAD_REQUEST);
        }
        repository.save(user);
        var jwtToken =jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken =jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
}
