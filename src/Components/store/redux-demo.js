import {createStore} from 'redux';
import './Redux.module.css';
// import classes from './Redux.module.css'
const Data = [{
    "id": '0',
    timeStamp:'2020-11-04 06:25:11',
    count:'44000',
    severity:'height',

},
    {
        id: '1',
        timeStamp:'2020-11-04 06:25:10',
        count:'24000',
        severity:'medium',

    },
    {
        id: '2',
        timeStamp:'2020-11-04 06:25:09',
        count:'34000',
        severity:'low',

    },
    {
        id: '3',
        timeStamp:'2020-11-04 06:25:08',
        count:'14000',
        severity:'height',

    },
    {
        id: '4',
        timeStamp:'2020-10-04 06:25:07',
        count:'5000',
        severity:'low',

    },
    {
        id: '5',
        timeStamp:'2020-10-04 06:25:06',
        count:'4000',
        severity:'medium',

    },
    {
        id: '6',
        timeStamp:'2020-10-04 06:25:05',
        count:'14000',
        severity:'low',

    },
    {
        id: '7',
        timeStamp:'2020-10-04 06:25:04',
        count:'2000',
        severity:'height',

    },
    {
        id: '8',
        timeStamp:'2020-10-04 06:25:03',
        count:'3000',
        severity:'height',

    },
    {
        id: '9',
        timeStamp:'2020-10-04 06:25:02',
        count:'4000',
        severity:'height',

    },
]

const ManagedReducer =(state=Data, action)=>{
    // state.sort((a,b)=>b.count-a.count)
    // state.sort((a,b)=>a.timeStamp.localeCompare(b.timeStamp))

    if (action.type=== 'sortByCount'){
        return {

       state: state.sort((a,b)=>a.count.localeCompare(b.count))
        }
    }else{
        return state;
    }

    // return state;



}
        const store = createStore(ManagedReducer)

export default store;

//     switch (action.type) {
//         case 'SortCount':
//             return <Fragment>
//                 {state.sort((a, b) => b.count - a.count).map((value)=>(
//                     <ul key={value.id} className={classes.container}>
//                         <li className={classes.timeStamp}>{value.timeStamp}</li>
//                         <li className={classes.count}>{value.count}</li>
//                         <li className={classes[value.Severity]}>{value.Severity} </li>
//
//                     </ul>
//                 ))}
//             </Fragment>;
//
//
//
//         case 'sortTimeStamp':
//             return <Fragment>
//                 {state.map((value)=>(
//                     <ul key={value.id} className={classes.container}>
//                         <li className={classes.timeStamp}>{value.timeStamp}</li>
//                         <li className={classes.count}>{value.count}</li>
//                         <li className={classes[value.Severity]}>{value.Severity} </li>
//
//                     </ul>
//
//                 ))}
//             </Fragment>;
//
//         default:
//             return <Fragment>
//                 {state.map((value)=>(
//                     <ul key={value.id} className={classes.container}>
//                         <li className={classes.timeStamp}>{value.timeStamp}</li>
//                         <li className={classes.count}>{value.count}</li>
//                         <li className={classes[value.Severity]}>{value.Severity} </li>
//
//                     </ul>
//
//                 ))}
//             </Fragment>
//     }
// }
//
