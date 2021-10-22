import React,{useState} from 'react';
import BarChart from "./BarChart";
import { IoAppsSharp } from "react-icons/io5";
import {BiLineChart} from "react-icons/bi";
import DataTable from './DataOfChart/DataTable'
import DataChart from './DataOfChart/DataCharts';
import classes from './Mainbar.module.css'
const MainBar=()=> {
    const [page,setPage] =useState(true)

 const ChangeChartHandler=(event)=>{
        event.preventDefault();
       setPage(false)

}
const Table=()=>{
        setPage(true)
}
    return <div className={classes.container}>
            <input  type="text" placeholder="Search by keyword..." name="search" className={classes.search}/>
        <BarChart />
        <div className={classes.chart}>
            <IoAppsSharp className={classes.page_one} onClick={Table}/>
            <BiLineChart className={classes.page_two} onClick={ChangeChartHandler}/>
        </div>
        {!page && <DataChart/>}
        {page &&<DataTable className={classes.svg}/>}
    </div>
}
export default MainBar;
