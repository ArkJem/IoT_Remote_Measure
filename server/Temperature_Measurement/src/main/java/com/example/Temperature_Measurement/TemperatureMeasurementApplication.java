package com.example.Temperature_Measurement;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

@SpringBootApplication
@EnableScheduling
public class TemperatureMeasurementApplication {

	public static void main(String[] args) {
		SpringApplication.run(TemperatureMeasurementApplication.class, args);
		String jdbcUrl = "jdbc:postgresql://database:5432/temp_measurement";
		String username = "postgres";
		String password = "admin";

		String sqlFile = "./app/sql-scripts/baza.sql";

		try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password);
			 Statement statement = connection.createStatement();
			 BufferedReader reader = new BufferedReader(new FileReader(sqlFile))) {

			String line;
			while ((line = reader.readLine()) != null) {
				statement.executeUpdate(line);
			}

			System.out.println("SQL queries executed successfully.");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	}


