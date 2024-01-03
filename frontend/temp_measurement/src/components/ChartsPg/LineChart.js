import React, {useCallback, useEffect, useRef, useState} from "react";
import {CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement} from "chart.js";
import {Line} from "react-chartjs-2";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const LineChart = () => {

    const [limit, setLimit] = useState(3)
    const [fetchedData, setFetchedData] = useState();
    var url = `http://localhost:8080/api/v1/tempavg?limit=${limit}`
    var token = localStorage.getItem('token')
    let ref =useRef(null);

    const downloadImage = useCallback(() => {
        const link = document.createElement("a");
        link.download = "chart.png";
        link.href = ref.current.toBase64Image();
        link.click();
    }, [ref]);

    const handleChange = (event) =>{
        setLimit(event.target.value);
    };

    const convertUnixToDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    };
    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });

            if (response.status === 403) {
                throw new Error("Data not fetched!");
            }

            const data = await response.json();
            setFetchedData(data);
        } catch (error) {
            if (error.message === "Data not fetched!") {
                console.log("ups")
            } else {
                console.error("An error occurred:", error);
            }
        }
    };
    useEffect(() => {
        fetchData();
    }, [limit]);

    if (!fetchedData) {
        return null;
    }

    const data = {
        labels: fetchedData.map(entry => convertUnixToDate(entry.date)),
        datasets: [{
            label: "Średnia temperatura każdego dnia dla czunjika w słońcu",
            data: fetchedData.map(entry => entry.avg_read_sun),
            backgroundColor: ['rgb(255,0,54)'],
            borderColor: ['rgb(0,0,0)'],
            borderWidth: 1
        }]
    };



return(
        <div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
            <FormControl fullWidth>
                <InputLabel id="selectLabel">Kiedy</InputLabel>
                <Select
                    labelId="selectLabel"
                    id="simpleSelect"
                    value={limit}
                    label="Kiedy"
                    onChange={handleChange}
                >
                    <MenuItem value={3}>Ostatnie 3 dni</MenuItem>
                    <MenuItem value={7}>Ostatnie 7 dni</MenuItem>
                    <MenuItem value={14}>Ostatnie 14 dni</MenuItem>
                </Select>
            </FormControl>
            <div id={'chart'}>
                <Line ref={ref} data={data} />
            </div>
            <Button onClick={() => downloadImage()}>Zapisz do PNG</Button>

        </div>
    )
}
export default LineChart