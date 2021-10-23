import React,{Fragment} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import classes from './DataTable.module.css'
import { AiOutlineArrowDown } from "react-icons/ai"

const DataTable =()=> {
    const dispatch = useDispatch();

    const managedState = useSelector(state=>state)


   const object = managedState.map((value)=>
       <ul key={value.id} className={classes.container}>
           <li className={classes.timeStamp}>{value.timeStamp}</li>
           <li className={classes.count}>{value.count}</li>
           <li className={classes[value.severity]}>{value.severity} </li>
       </ul>
   )
    const SortByCounterHandler=()=>{
        dispatch({type:'sortByCount'})
        console.log('sort is valid')
    }

    // console.log(object)
    return <Fragment>
        <div className={classes.flex}>
            <div >TimeStamp <AiOutlineArrowDown /></div>
            <div>Count <AiOutlineArrowDown  style={{cursor:'pointer'}}/></div>
            <div>Severity </div>
            <button onClick={SortByCounterHandler}>click there</button>
        </div >
        <li>{object}</li>
    </Fragment>

}
export default DataTable;

