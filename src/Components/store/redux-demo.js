import {createStore} from 'redux';
import {Fragment} from "react";
import './Redux.module.css';
import classes from './Redux.module.css'
const Data = [{
    id: '0',
    timeStamp:'2020-11-04 06:25:01',
    count:'44000',
    Severity:'height',

},
    {
        id: '1',
        timeStamp:'2020-11-03 06:25:01',
        count:'24000',
        Severity:'medium',

    },
    {
        id: '2',
        timeStamp:'2020-11-02 06:25:01',
        count:'34000',
        Severity:'low',

    },
    {
        id: '3',
        timeStamp:'2020-11-01 06:25:01',
        count:'14000',
        Severity:'height',

    },
    {
        id: '4',
        timeStamp:'2020-10-04 06:25:01',
        count:'5000',
        Severity:'low',

    },
    {
        id: '5',
        timeStamp:'2020-10-05 06:25:01',
        count:'4000',
        Severity:'medium',

    },
    {
        id: '6',
        timeStamp:'2020-10-04 06:25:01',
        count:'14000',
        Severity:'low',

    },
    {
        id: '7',
        timeStamp:'2020-10-04 06:25:01',
        count:'2000',
        Severity:'height',

    },
    {
        id: '8',
        timeStamp:'2020-10-04 06:25:01',
        count:'3000',
        Severity:'height',

    },
    {
        id: '9',
        timeStamp:'2020-10-04 06:25:01',
        count:'4000',
        Severity:'height',

    },
]

const ManagedReducer =(state=Data, action)=>{
    switch (action.type) {
        case 'SortCount':
            return <Fragment>
                {state.map((value)=>(
                    <ul key={value.id} className={classes.container}>
                        <li className={classes.timeStamp}>{value.timeStamp}</li>
                        <li className={classes.count}>{value.count}</li>
                        <li className={classes[value.Severity]}>{value.Severity} </li>

                    </ul>

                ))}
            </Fragment>;
        case 'sortTimeStamp':
            return <Fragment>
                {state.map((value)=>(
                    <ul key={value.id} className={classes.container}>
                        <li className={classes.timeStamp}>{value.timeStamp}</li>
                        <li className={classes.count}>{value.count}</li>
                        <li className={classes[value.Severity]}>{value.Severity} </li>

                    </ul>

                ))}
            </Fragment>;

        default:
    return <Fragment>
        {state.map((value)=>(
            <ul key={value.id} className={classes.container}>
                <li className={classes.timeStamp}>{value.timeStamp}</li>
                <li className={classes.count}>{value.count}</li>
                <li className={classes[value.Severity]}>{value.Severity} </li>

            </ul>

        ))}
    </Fragment>
    }
}

const store = createStore(ManagedReducer)

export default store;
