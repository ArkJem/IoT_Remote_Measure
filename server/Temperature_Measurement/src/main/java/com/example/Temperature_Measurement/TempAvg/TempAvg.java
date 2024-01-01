package com.example.Temperature_Measurement.TempAvg;

import jakarta.persistence.*;

@Entity
@Table
public class TempAvg {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public Long getDate() {
        return date;
    }

    public Float getAvg_read_sun() {
        return avg_read_sun;
    }

    public Float getAvg_read_shadow() {
        return avg_read_shadow;
    }

    public Float getAvg_sun_shadow() {
        return avg_sun_shadow;
    }

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
                ", date=" + date +
                ", avg_read_sun=" + avg_read_sun +
                ", avg_read_shadow=" + avg_read_shadow +
                ", avg_sun_shadow=" + avg_sun_shadow +
                '}';
    }
}