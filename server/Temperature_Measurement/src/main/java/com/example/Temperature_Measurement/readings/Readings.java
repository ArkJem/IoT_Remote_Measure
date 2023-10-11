package com.example.Temperature_Measurement.readings;

import jakarta.persistence.*;

@Entity
@Table
public class Readings {
    @Id
    @SequenceGenerator(
            name = "readings_sequence",
            sequenceName = "readings_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "readings_sequence"
    )
    private Long id_sec;
    private Float sens_read_sun;
    private Float sens_read_shadow;
    private Float sens_read_avg;

    public Readings() {
    }

    public Readings(Long id_sec, Float sens_read_sun, Float sens_read_shadow, Float sens_read_avg) {
        this.id_sec = id_sec;
        this.sens_read_sun = sens_read_sun;
        this.sens_read_shadow = sens_read_shadow;
        this.sens_read_avg = sens_read_avg;
    }

    public Long getId_sec() {
        return id_sec;
    }

    public void setId_sec(Long id_sec) {
        this.id_sec = id_sec;
    }

    public Float getSens_read_sun() {
        return sens_read_sun;
    }

    public void setSens_read_sun(Float sens_read_sun) {
        this.sens_read_sun = sens_read_sun;
    }

    public Float getSens_read_shadow() {
        return sens_read_shadow;
    }

    public void setSens_read_shadow(Float sens_read_shadow) {
        this.sens_read_shadow = sens_read_shadow;
    }

    public Float getSens_read_avg() {
        return sens_read_avg;
    }

    public void setSens_read_avg(Float sens_read_avg) {
        this.sens_read_avg = sens_read_avg;
    }

    @Override
    public String toString() {
        return "Readings{" +
                "id_sec=" + id_sec +
                ", sens_read_sun=" + sens_read_sun +
                ", sens_read_shadow=" + sens_read_shadow +
                ", sens_read_avg=" + sens_read_avg +
                '}';
    }
}
