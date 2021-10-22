import React, {Fragment} from "react";
import SideBar from "../SideBar";
import MainBar from "../MainBar";
import classes from './container.module.css'
const Container=(props)=>{
    return <Fragment >
        <div className={classes.flexContainer}>
            <SideBar/>
            <MainBar/>
        </div>
    </Fragment>
}
export default Container;
