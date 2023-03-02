// src/App.js
import React from "react";
import ReactEcharts from "echarts-for-react";
import data from '../dataset/data.json'

function Echarts(props) {

    let entry = new Map();

    // entry.set('one', 'ONE');
    // entry.set('two', 'TWO');
    // entry.set('three', 'THREE');

    // console.log(props.data);
    // console.log(data);

    // console.log('-------------------------------');

    // console.log(data.map(item => item.HEART_PULSE))

    // console.log(entry);

    const names = new Set();

    data.forEach(item => {
        if (entry.has(item.INDIVIDUAL_NAME)) {
            let heartPulse = entry.get(item.INDIVIDUAL_NAME);

            if (heartPulse < item.HEART_PULSE) {
                entry.set(item.INDIVIDUAL_NAME, item.HEART_PULSE);
            }
        } else {
            entry.set(item.INDIVIDUAL_NAME, item.HEART_PULSE);
        }
    })

    console.log(Array.from(entry.values()));

    const option = {
        legend: {
            show: true,
            data: ['a', 'b', 'c']
        },
        xAxis: {
            type: 'category',
            data: Array.from(entry.keys())
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        title:{
            id: 'id', 
            show: true, 
            text: 'Hello',
            textStyle: {
                // color: 'red',
                fontStyle: 'italic', 
                fontFamily: 'sans-serif',
                textBorderColor: 'red'
            },
            top: 'bottom',
            right: 'center',
            subtext: {
                align:'center'
            }
        },
        dataset: {
            source: [
                ['Haider', 120, 200, 150, 80, 70, 110, 130],
                ['Mofiz', 120, 200, 150, 80, 70, 110, 130],
                ['Mojib', 120, 200, 150, 80, 70, 110, 130],
                ['Anando', 120, 200, 150, 80, 70, 110, 130],
            ]
        },
        series: [
            {
                // data: [120, 200, 150, 80, 70, 110, 130],
                // data: Array.from(entry.values()),
                type: 'bar',
                showBackground: true,
                // backgroundStyle: {
                //     color: 'rgb(235, 64, 52)'
                // },
                roundCap: true
            }, 
            {
                // data: [120, 200, 150, 80, 70, 110, 130],
                // data: Array.from(entry.values()),
                type: 'bar',
                showBackground: true,
                // backgroundStyle: {
                //     color: 'rgb(235, 64, 52)'
                // },=
                color: 'black'
            }, 
            {
                // data: [120, 200, 150, 80, 70, 110, 130],
                data: Array.from(entry.values()),
                type: 'bar',
                showBackground: true,
                // backgroundStyle: {
                //     color: 'rgb(235, 64, 52)'
                // },
                roundCap: true
            }
        ],
    };

    // const option = {
    //     legend: {},
    //     tooltip: {},
    //     dataset: {
    //         source: [
    //             ['product', '2012', '2013', '2014', '2015'],
    //             ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
    //             ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
    //             ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    //         ]
    //     },
    //     xAxis: [
    //         { type: 'category', gridIndex: 0 },
    //         { type: 'category', gridIndex: 1 }
    //     ],
    //     yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
    //     grid: [{ bottom: '55%' }, { top: '55%' }],
    //     series: [
    //         // These series are in the first grid.
    //         { type: 'bar', seriesLayoutBy: 'row' },
    //         { type: 'bar', seriesLayoutBy: 'row' },
    //         { type: 'bar', seriesLayoutBy: 'row' },
    //         // These series are in the second grid.
    //         { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    //         { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    //         { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    //         { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
    //     ]
    // };

    return <ReactEcharts option={option} />;
}
export default Echarts;