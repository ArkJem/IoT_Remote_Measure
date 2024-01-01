package com.example.Temperature_Measurement.TempAvg.Month;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class TempAvgMonth {
    @Id
    private Long date;
    private Float avg_read_sun_month;
    private Float avg_read_shadow_month;
    private Float avg_sun_shadow_month;

    public TempAvgMonth(Long date, Float avg_read_sun_month, Float avg_read_shadow_month, Float avg_sun_shadow_month) {
        this.date = date;
        this.avg_read_sun_month = avg_read_sun_month;
        this.avg_read_shadow_month = avg_read_shadow_month;
        this.avg_sun_shadow_month = avg_sun_shadow_month;
    }

    public TempAvgMonth() {

    }

    public Long getDate() {
        return date;
    }

    public void setDate(Long date) {
        this.date = date;
    }

    public Float getAvg_read_sun_month() {
        return avg_read_sun_month;
    }

    public void setAvg_read_sun_month(Float avg_read_sun_month) {
        this.avg_read_sun_month = avg_read_sun_month;
    }

    public Float getAvg_read_shadow_month() {
        return avg_read_shadow_month;
    }

    public void setAvg_read_shadow_month(Float avg_read_shadow_month) {
        this.avg_read_shadow_month = avg_read_shadow_month;
    }

    public Float getAvg_sun_shadow_month() {
        return avg_sun_shadow_month;
    }

    public void setAvg_sun_shadow_month(Float avg_sun_shadow_month) {
        this.avg_sun_shadow_month = avg_sun_shadow_month;
    }
    @Override
    public String toString() {
        return "TempAvgMonth{" +
                ", date=" + date +
                ", avg_read_sun_month=" + avg_read_sun_month +
                ", avg_read_shadow_month=" + avg_read_shadow_month +
                ", avg_sun_shadow_month=" + avg_sun_shadow_month +
                '}';
    }
}
