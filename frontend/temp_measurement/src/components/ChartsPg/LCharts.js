import React, {useRef, useCallback} from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";


const data={
  labels: [2019, 2020, 2021, 2022, 2023],
  datasets: [ 
    {
      label: "Dane w cieniu",
      data: [300,50,100,40,120],
      backgroundColor: ["#0000FF"],
      borderColor: "Black",
      borderWidth: 2,
      hoverOffset: 4,
    },
  ],
};

ChartJS.register(CategoryScale)

function LCharts() {
  let ref =useRef(null);
  
  const downloadImage = useCallback(() => {
  const link = document.createElement("a");
  link.download = "chart.pdf";
  link.href = ref.current.toBase64Image();
  link.click();
}, []);

return (
  <div className="Line">
    <button type ="button" onClick={downloadImage}>Pobierz</button>
      <div style={{height: "800px", Weight: "800px", margin: "auto"}}>
        <Line ref={ref} data={data}></Line>
      </div>
  </div>
  );
}
export default LCharts;

