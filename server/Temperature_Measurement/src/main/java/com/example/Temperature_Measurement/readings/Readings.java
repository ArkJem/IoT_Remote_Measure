package com.example.Temperature_Measurement.readings;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "readings")
public class Readings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long idSeconds;
    private Float sens_read_sun;
    private Float sens_read_shadow;
    private Float sens_read_avg;

    public Readings() {
    }

    public Readings(Long idSeconds, Float sens_read_sun, Float sens_read_shadow, Float sens_read_avg) {
        this.idSeconds = idSeconds;
        this.sens_read_sun = sens_read_sun;
        this.sens_read_shadow = sens_read_shadow;
        this.sens_read_avg = sens_read_avg;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setIdSeconds(Long idSeconds) {
        this.idSeconds = idSeconds;
    }

    public void setSens_read_sun(Float sens_read_sun) {
        this.sens_read_sun = sens_read_sun;
    }

    public void setSens_read_shadow(Float sens_read_shadow) {
        this.sens_read_shadow = sens_read_shadow;
    }

    public void setSens_read_avg(Float sens_read_avg) {
        this.sens_read_avg = sens_read_avg;
    }

    @Override
    public String toString() {
        return "Readings{" +
                "id=" + id +
                ", idSeconds=" + idSeconds +
                ", sens_read_sun=" + sens_read_sun +
                ", sens_read_shadow=" + sens_read_shadow +
                ", sens_read_avg=" + sens_read_avg +
                '}';
    }
}
