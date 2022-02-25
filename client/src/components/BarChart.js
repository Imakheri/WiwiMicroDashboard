import React, {useState, useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { getHours } from "../actions";
import {Chart as CharJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './styles/BarChart.css'


CharJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend )

const BarChart = () => {

    const dispatch = useDispatch();
    const hours = useSelector((state) => state.hours)
    
    const results = Object.keys(hours)
    
    const values = Object.values(hours)
    

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        dispatch(getHours())
        setChartData({
            labels: results,
            datasets: [
                {
                    label: 'Conexiones por hora',
                    data: values,
                    borderColor: 'rgba(53, 162, 235)',
                    backgroundColor: '#6ed24b',
                },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text:'Tráfico por hora (01-01-2022)',
                },
            },
        });
    }, [results[0]])

    return(
        <div className='contenedor'>
            <div className='table'>
                <Bar options={chartOptions} data={chartData}/>
            </div>
        </div>
    )
}

export default BarChart