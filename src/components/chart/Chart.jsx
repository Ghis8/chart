import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import './Chart.scss';
import BarChart from './BarChart';

const datas = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30],
    [40,56,60,80,30],
    [0,0,0,20,50,70,40,50],
    [0,0,0,0,0,0,30,50,10,90,70]
]
var i = 0;

function Chart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }


    return (
        <>
       
            <div className="back">
                 <Link to="/">
                    <button>Home</button>
                 </Link>
            </div>
            
       

        <div className="Chart">
            <h2>Sample Chart</h2>
            <button onClick={changeData}>Change Data</button>
            <BarChart width={600} height={400} data={data} />
        </div>
        </>
    );
}

export default Chart;