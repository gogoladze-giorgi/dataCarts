import React, {useState} from 'react';
import BarChart from "./BarChart";
import {IoAppsSharp} from "react-icons/io5";
import {BiLineChart} from "react-icons/bi";
import DataTable from './HeadChart/DataTable'
import classes from './Mainbar.module.css'
import {useSelector} from 'react-redux';
import ChangeDate from '../Components/mainChart/changeData'

const MainBar = () => {
    const dataList = useSelector( state => state )

    const [page, setPage] = useState(true);
    const [data, setData] = useState(dataList);

    const ChangeChartHandler = (event) => {
        event.preventDefault();
        setPage(false)

    }
    const Table = () => {
        setPage(true)
    }
  const color = data.length === 0?   {color: 'red'} : {color:'green'};
    return <div className={classes.container}>
        <input onChange={(event) => {
            let filteredDataList = dataList.filter(d => d.severity.toString().includes(event.target.value));
            console.log(filteredDataList.length)
            setData(filteredDataList);
         }
        } type="text" placeholder="Search by keyword..."
               name="search" className={classes.search}/>
        <div style={color}> {data.length} Results found</div>
        <BarChart filteredBarChartbyData = {data} />
        <div className={classes.chart}>
            <IoAppsSharp className={classes.page_one} onClick={Table}/>
            <BiLineChart className={classes.page_two} onClick={ChangeChartHandler}/>
        </div>
        {page && <ChangeDate />}
        {!page && <DataTable className={classes.svg} rows={data}/>}
    </div>
}
export default MainBar;
