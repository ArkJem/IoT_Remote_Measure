import React, {useEffect, useState} from "react";
import {Chart as ChartJS, LineElement,PointElement,CategoryScale,LinearScale} from "chart.js";
import {Line} from "react-chartjs-2";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Box from "@mui/material/Box";
import AlertPage from "../Alerts/AlertPage";
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

    const handleChange = (event) =>{
        setLimit(event.target.value);
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
        labels: fetchedData.map(entry => entry.date),
        datasets: [{
            label: "Temperatura w słońcu",
            data: fetchedData.map(entry => entry.avg_read_sun),
            backgroundColor: ['rgb(255,0,54)'],
            borderColor: ['rgb(0,0,0)'],
            borderWidth: 1
        }]
    };

    function chartToPDF() {
        //TODO: trzeba to kiedyś zrobić
        console.log("Hubert zrób coś.")
    }


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
                <Line data={data} />
            </div>
            <Button onClick={() => chartToPDF()}>Zapisz do PDF</Button>

        </div>
    )
}
export default LineChart