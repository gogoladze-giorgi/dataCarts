import React from 'react';
import {Line} from 'react-chartjs-2';
import {ResponsiveContainer} from 'recharts'
const BarChart =()=> {
    return <ResponsiveContainer width="100%" height={300} >
    <Line
        data={{
            labels:['January','February','March','April','May','June','July','August', 'September','October','November','December' ],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3,20,30,12,12,23,43],
                dataSets:[{
                    label:'# of votes',
                    data: [12, 19, 3, 5, 2, 3,20,30,12,12,23,43]
                }],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',


            ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],}],
        }}

        options={{
            responsive:true,
            maintainAspectRatios:false
        }}
        // height={1200}
        // width={7000}

        />
    </ResponsiveContainer>
}
export default BarChart;
