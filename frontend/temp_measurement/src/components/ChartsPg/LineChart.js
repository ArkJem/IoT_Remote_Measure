import React, {useEffect, useState} from "react";
import {Chart as ChartJS, LineElement,PointElement,CategoryScale,LinearScale} from "chart.js";
import {Line} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const LineChart = () => {

    const [chart, setChart] = useState([])

    var baseUrl = ''
    var proxyUrl = ''
    var apiKey = ''

    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${proxyUrl}${baseUrl}`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${apiKey}`,
                    "Access-Control-Allow-Origin":'*'
                }
            }).then((response) => {
                response.json().then((json) => {
                    console.log(json)
                    setChart(json.data)
                })
            }).catch(error => { console.log(error)})
        }
        fetchCoins()
    }, [baseUrl,proxyUrl,apiKey]);

    var data = {
        labels:chart?.coins?.map(x => x.name),
        datasets:[{
            label:"styl",
            data:chart?.coins?.map(x => x.price),
            backdropColor:[
                'rgb(250,0,52)',
                'rgb(4,255,124)',
                'rgb(255,179,0)',
                'rgb(5,26,21)',
                'rgb(255,0,0)',
                'rgb(199,0,255)'
            ],
            borderColor:[
                'rgb(0,255,153)',
                'rgb(214,255,0)',
                'rgb(0,5,255)',
                'rgb(198,0,255)',
                'rgba(255,99,132)',
                'rgba(255,99,132)'

            ],
            borderWidth: 1
        }]
    }
    var options = {
        maintainAspectRatio:false,
        scales:{
            y:{
                beginAtZero: true
            }
        },
        legend:{
            labels: {
                fontSize:26
            }
        }
    }
    return(
        <div>
            <Line  height={500} data={data} options={options}/>
        </div>
    )
}
export default LineChart