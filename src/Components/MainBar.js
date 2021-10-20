import classes from './Mainbar.module.css'
import BarChart from "./BarChart";
import { IoAppsSharp } from "react-icons/io5";
import {BiLineChart} from "react-icons/bi";
import DataTable from './DataOfChart/DataTable'
const MainBar=()=> {
    return <div className={classes.container}>
        <div className={classes.search}>Search by Keyword. . .</div>
        <BarChart />
        <div className={classes.chart}>
            <IoAppsSharp className={classes.page_one}/>
            <BiLineChart className={classes.page_two}/>
        </div>
        <DataTable className={classes.svg}/>
    </div>
}
export default MainBar;
