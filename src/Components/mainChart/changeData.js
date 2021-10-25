import DataChart from './DataCharts'
import React,{useState} from 'react'
import classes from './ChangeData.module.css'
import {useSelector} from "react-redux";

const ChangeDate =()=>{

    const dataList = useSelector( state => state )
    const [xData,setXData]=useState(dataList)


    let xChangeHandler =(event)=>{
        let x = dataList.filter(d => d.severity.toString().includes(event.target.value))
        setXData(x)
        console.log(xData)
    }





    return <div className={classes.container}>
    <DataChart  xdata={xData}/>
        <form className={classes.change}>
            <label htmlFor="X" >X serries  </label>
            <select name="X" id="data" onChange={xChangeHandler}>
                <option value="none">none</option>
                <option value="timeStamp">timestamp</option>
                <option value="count">count</option>
            </select>
            <label htmlFor="X">  y  serries</label>
            <select name="X" id="data">
                <option value="count">count</option>
                <option value="timeStamp">timestamp</option>
            </select>
            <div>
            <label htmlFor="vehicle2"> I have a car</label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
            </div>

        </form>
    </div>
}
export default ChangeDate;
