package com.example.Temperature_Measurement.TempAvg.Year;

import jakarta.persistence.*;
import lombok.Getter;


@Getter
@Entity
@Table
public class TempAvgYear {
    @Id
    private Long date;
    private Float avg_read_sun_year;
    private Float avg_read_shadow_year;
    private Float avg_sun_shadow_year;

    public TempAvgYear(Long date, Float avg_read_sun_year, Float avg_read_shadow_year, Float avg_sun_shadow_year) {
        this.date = date;
        this.avg_read_sun_year = avg_read_sun_year;
        this.avg_read_shadow_year = avg_read_shadow_year;
        this.avg_sun_shadow_year = avg_sun_shadow_year;
    }

    public TempAvgYear() {

    }

    public void setDate(Long date) {
        this.date = date;
    }

    public void setAvg_read_sun_year(Float avg_read_sun_year) {
        this.avg_read_sun_year = avg_read_sun_year;
    }

    public void setAvg_read_shadow_year(Float avg_read_shadow_year) {
        this.avg_read_shadow_year = avg_read_shadow_year;
    }

    public void setAvg_sun_shadow_year(Float avg_sun_shadow_year) {
        this.avg_sun_shadow_year = avg_sun_shadow_year;
    }
    @Override
    public String toString() {
        return "TempAvgYear{" +
                ", date=" + date +
                ", avg_read_sun_year=" + avg_read_sun_year +
                ", avg_read_shadow_year=" + avg_read_shadow_year +
                ", avg_sun_shadow_year=" + avg_sun_shadow_year +
                '}';
    }
}
