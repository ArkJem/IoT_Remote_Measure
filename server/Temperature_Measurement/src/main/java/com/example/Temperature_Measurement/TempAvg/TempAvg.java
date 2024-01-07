package com.example.Temperature_Measurement.TempAvg;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table
public class TempAvg {

    @Id
    @SequenceGenerator(
            initialValue = 371,
            name = "temp_avg_sequence",
            sequenceName = "temp_avg_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "temp_avg_sequence"
    )
    @Column(columnDefinition = "serial")
    private Long id;
    private Long date;
    private Float avg_read_sun;
    private Float avg_read_shadow;
    private Float avg_sun_shadow;

    public TempAvg(Long date, Float avg_read_sun, Float avg_read_shadow, Float avg_sun_shadow) {
        this.date = date;
        this.avg_read_sun = avg_read_sun;
        this.avg_read_shadow = avg_read_shadow;
        this.avg_sun_shadow = avg_sun_shadow;
    }

    public TempAvg() {}

    public void setId(Long id) {this.id = id;}

    public void setDate(Long date) { this.date = date;}

    public void setDate_sec(Long date) {
        this.date = date;
    }

    public void setAvg_read_sun(Float avg_read_sun) {
        this.avg_read_sun = avg_read_sun;
    }

    public void setAvg_read_shadow(Float avg_read_shadow) {
        this.avg_read_shadow = avg_read_shadow;
    }

    public void setAvg_sun_shadow(Float avg_sun_shadow) {
        this.avg_sun_shadow = avg_sun_shadow;
    }

    @Override
    public String toString() {
        return "TempAvg{" +
                "id=" + id +
                ", date=" + date +
                ", avg_read_sun=" + avg_read_sun +
                ", avg_read_shadow=" + avg_read_shadow +
                ", avg_sun_shadow=" + avg_sun_shadow +
                '}';
    }
}