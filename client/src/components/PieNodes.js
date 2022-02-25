import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNode } from "../actions";
import {Chart as CharJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './styles/PieNodes.css'

CharJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement )

const PieChart2 = () => {

    const dispatch = useDispatch();
    const node = useSelector((state) => state.node)

    const [chartData, setChartData] = useState ({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        dispatch(getNode())
        setChartData({
            labels: ['C0-5B-00-10-7C-12', 'F8-D9-B8-0D-85-C0', 'F8-D9-B8-0D-89-00', 'F8-D9-B8-00-93-E0', 'F8-D9-B8-0D-87-20', 'F8-D9-B8-0D-8B-80', 'F8-D9-B8-0D-8C-00', 'F8-D9-B8-0D-8A-A0', 'F8-D9-B8-0D-88-40', 'F8-D9-B8-0D-87-80'],
            datasets: [
                {
                    label: 'Nodos desde donde se hicieron las consultas día 01-01-2022',
                    data: node,
                    borderColor: [
                        '#FDEFF4',
                        //'#000000',
                        
                    ],
                    backgroundColor: ['#F0134D','#FEED30','#FA4EAB','#6ed24b','#8B4C8C','#FFC77F','#FF6F5E','#FFBDD4','#36B5B0', '#051367']
                },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom"
                },
                title: {
                    display: true,
                    text: 'Nodos desde donde se hicieron las consultas día 01-01-2022'
                },
            },
        });
    }, [node[0]])

    return (
        <div className='all'>
            <div className='container'>
                <Pie options={chartOptions} data={chartData}/>
            </div>
        </div>
    )
}

export default PieChart2