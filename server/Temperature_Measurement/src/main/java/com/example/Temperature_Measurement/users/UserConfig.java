package com.example.Temperature_Measurement.users;

import com.example.Temperature_Measurement.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {
    private final UserRepository userRepository;

    @Autowired
    public UserConfig(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    CommandLineRunner topUsers() {
        return args -> {
            User user1 = User.builder()
                    .username("adminTemp")
                    .pass("$2a$10$edflrXfIHygUzlj6Ev3Lo.CDg06.nuw1mXs4wwN2kOorzdof00VHO")
                    .email("adminTemp@adminTemp.com")
                    .name("adminTemp")
                    .surname("adminTemp")
                    .role(Role.ADMINISTRATOR)
                    .build();

            User user2 = User.builder()
                    .username("admin")
                    .pass("$2a$10$Kjwm4SK2V066lean7ty7JOllfXssHvHwbRWLLBPHWXl659vgBOeNS")
                    .email("admin@admin.com")
                    .name("admin")
                    .surname("admin")
                    .role(Role.ADMINISTRATOR)
                    .build();

            userRepository.saveAll(List.of(user1, user2));
        };
    }
}
