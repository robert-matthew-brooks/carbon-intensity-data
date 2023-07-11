import { useState, useEffect } from 'react';
import { getDateDetails, getApiData, showElement, hideElement } from '../js/util.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function updateChart(setChartData) {
    showElement('week-chart-cover');

    const dataRequests = [];

    for (let i=0; i<7; i++) {
        dataRequests.push(getApiData(i));
    }

    Promise.all(dataRequests)
    .then(responses => {
        const parsedData = [];
        
        for (const i in responses) {
            const filteredResponse = responses[i].filter(el => el.intensity.actual !== null);

            const totalIntensity = filteredResponse.reduce((acc, el) => {
                return acc + el.intensity.actual;
            }, 0);
            const avgIntensity = Math.round(totalIntensity / filteredResponse.length);

            parsedData.push({
                date: getDateDetails(i).shortDate,
                avgIntensity
            });
        }

        setChartData(parsedData);
        hideElement('week-chart-cover');
    });
}

function WeekChart() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        updateChart(setChartData);
    }, []);

    const data = {
        labels: chartData.map(el => el.date),
        datasets: [
          {
            label: 'Average Intensity',
            data: chartData.map(el => el.avgIntensity),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(70, 159, 37, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(70, 159, 37, 1)'
            ],
            borderWidth: 2,
          },
        ],
      };

    return (
        <section id="week-chart">
            <div id="week-chart-cover" className="cover">Loading...</div>
            <h2>Intensity Over 7 Days</h2>
            <div className="chart-size">
                <Pie data={data} />
            </div>
        </section>
    );
}

export default WeekChart;