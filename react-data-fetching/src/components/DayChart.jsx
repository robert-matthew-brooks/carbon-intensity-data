import { useState, useEffect } from 'react';
import { showElement, hideElement, getFromToDate } from '../js/util.js';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,

    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Legend
);

function getApiData(daysBack, setChartData, setIsLoading) {
    showElement('day-chart-cover');

    const d = getFromToDate(daysBack);

    const dateFrom = `${d.from.year}-${d.from.month}-${d.from.day}T00:00Z`;
    const dateTo = `${d.to.year}-${d.to.month}-${d.to.day}T00:00Z`;

    fetch(`https://api.carbonintensity.org.uk/intensity/${dateFrom}/${dateTo}`)
    .then(response => {
        return response.json();
    })
    .then(({ data }) => {
        const apiData = data
        .filter(el => {
            return el.from.slice(-3, -1) === '00';
        })
        .map(el => {
            return {
                time: el.from.slice(-6, -1),
                actual: el.intensity.actual,
                forecast: el.intensity.forecast
            }
        });

        setChartData(apiData);
        hideElement('day-chart-cover');
    });
}

function DayChart ({ daysBack }) {
    const [isLoading, setIsLoading] = useState(true);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        getApiData(daysBack, setChartData, setIsLoading);
    }, [daysBack]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            }
        },
    };
    
    const data = {
        labels: chartData.map(el => el.time),
        datasets: [
            {
                label: 'Actual',
                data: chartData.map(el => el.actual),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Forecast',
                data: chartData.map(el => el.forecast),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <section id="day-chart">
            <div id="day-chart-cover">Loading...</div>
            <h2>GB Carbon Intensity Over 24 Hours</h2>
            <Bar options={options} data={data} />
        </section>
    );
}

export default DayChart;