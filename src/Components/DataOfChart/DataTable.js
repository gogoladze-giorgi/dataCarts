import React,{Fragment} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import classes from './DataTable.module.css'
import { AiOutlineArrowDown } from "react-icons/ai"

const DataTable =()=> {
    const managedState = useSelector(state=>state)
    // console.log(managedState)

    return <Fragment>
        <div className={classes.flex}>
            <div >TimeStamp <AiOutlineArrowDown/></div>
            <div>Count <AiOutlineArrowDown /></div>
            <div>Severity </div>
        </div>
        <div>{managedState}<hr/></div>
    </Fragment>

}
export default DataTable;
