import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNodes } from "../actions";
import {Chart as CharJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

CharJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend )

const PieChart = () => {

    const dispatch = useDispatch();
    const nodes = useSelector((state) => state.nodes)

    const [chartData, setChartData] = useState ({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        dispatch(getNodes())
        setChartData({
            labels: [],
            datasets: [
                {
                    label: 'Nodos desde donde se hicieron las consultas día 01-01-2022',
                    data: nodes,
                    borderColor: 'rgba(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)',
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
                    text: 'Nodos desde donde se hicieron las consultas día 01-01-2022'
                },
            },
        });
    }, [nodes[0]])

    return (
        <div>
            <Bar options={chartOptions} data={chartData}/>
        </div>
    )
}

export default PieChart