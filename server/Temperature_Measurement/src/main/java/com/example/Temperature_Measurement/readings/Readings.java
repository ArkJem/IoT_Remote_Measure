package com.example.Temperature_Measurement.readings;

import jakarta.persistence.*;

@Entity
@Table(name = "readings")
public class Readings {

    @Id
    @SequenceGenerator(
            initialValue = 366,
            name = "readings_sequence",
            sequenceName = "readings_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "readings_sequence"
    )
    @Column(columnDefinition = "serial")
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdSeconds() {
        return idSeconds;
    }

    public void setIdSeconds(Long idSeconds) {
        this.idSeconds = idSeconds;
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
                "id=" + id +
                ", idSeconds=" + idSeconds +
                ", sens_read_sun=" + sens_read_sun +
                ", sens_read_shadow=" + sens_read_shadow +
                ", sens_read_avg=" + sens_read_avg +
                '}';
    }
}
