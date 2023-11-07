import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const RealTimeChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [{ data: [] }] });

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        x: new Date().toLocaleTimeString(),
        y: Math.floor(Math.random() * 100)
      };

      setData((prevData) => {
        const newLabels = [...prevData.labels, newData.x].slice(-10);
        const newDataset = [{ data: [...prevData.datasets[0].data, newData.y].slice(-10) }];
        return { labels: newLabels, datasets: newDataset };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const chartOptions = {
    scales: {
      x: { type: 'time' },
      y: { beginAtZero: true, min: 0, max: 100 }
    }
  };

  return (
    <div>
      <h1>Real-Time Chart</h1>
      <Line data={data} options={chartOptions} />
    </div>
  );
};

export default RealTimeChart;
