import { useState, useEffect } from 'react';
import { getApiData, showElement, hideElement } from '../js/util.js';
import FilterForm from './FilterForm.jsx';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

async function updateChart(daysBack, setChartData) {
    showElement('day-chart-cover');

    const response = await getApiData(daysBack);
    
    
    const parsedData = response
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

    setChartData(parsedData);
    hideElement('day-chart-cover');
}

function DayChart () {
    const [daysBack, setDaysBack] = useState(0);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                await updateChart(daysBack, setChartData);
            }

            catch(err) {
                throw new Error(err);
            }
        })();
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
            <div id="day-chart-cover" className="cover">Loading...</div>
            <h2>Intensity Over 24 Hours</h2>
            <FilterForm daysBack={daysBack} setDaysBack={setDaysBack}/>
            <Bar options={options} data={data} />
        </section>
    );
}

export default DayChart;