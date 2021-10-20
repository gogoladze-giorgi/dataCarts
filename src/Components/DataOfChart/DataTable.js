import React from 'react';
import classes from './DataTable.module.css'
const DataTable =()=> {
    return <div className={classes.container}>
        <div className={classes.timeStamp}>TimeStamp</div>
        <div className={classes.count}>data</div>
        <div className={classes.severity}>Severity</div>
    </div>
}
export default DataTable;
