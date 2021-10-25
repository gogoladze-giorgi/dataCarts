import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const DataChart=(props)=> {
    const data = props.xdata;



    return (
        <ResponsiveContainer width="70%" height={250}>
            <LineChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                </defs>
                <CartesianGrid horizontal={true} vertical={true} />
                <XAxis dataKey="name" dataFormatter={timeStamp=> timeStamp.d}/>
                <YAxis/>
                <Tooltip />
                <Line type="monotone" dataKey="severity" stackId="1" stroke="red" fill="black" />
                <Line type="monotone" dataKey="count" stackId="1" stroke="red" fill="black" />
            </LineChart>
        </ResponsiveContainer>
    );

}
export default DataChart;


