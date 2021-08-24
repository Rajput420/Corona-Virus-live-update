import React, { useEffect, useState } from "react";
import "./Covid.css"


const Covid = () =>{

    const[data, setData] = useState([]);

    const getCovidData = async () => {
        try{
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);  
        setData(actualData.statewise[0]); 
        }
        catch (err) {
            console.log(err);

        }
    }

    useEffect(() => {
        getCovidData();


    }, []);
    return(
        <>
        <h1 className='h1 dot'> 🔴 LIVE </h1>
        <h2 className='h1'>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
            <li className="card card1 ">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span className="sp">OUR</span> COUNTRY</p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                </div>
            </li>

            <li className=" card card2">
                <div className="card_main2">
                    <div className="card_inner2">
                        <p className="card_name2"><span className="sp2">TOTAL</span> RECOVERED </p>
                        <p className="card_data">{data.recovered}</p>
                    </div>
                </div>
            </li>

            <li className=" card card3">
                <div className="card_main3">
                    <div className="card_inner3">
                        <p className="card_name3"><span className="sp3">TOTAL</span> CONFIRMED</p>
                        <p className="card_total3 card_small3">{data.confirmed}</p>
                    </div>
                </div>
            </li><br/>

            <li className=" card card4">
                <div className="card_main4">
                    <div className="card_inner4">
                        <p className="card_name4"><span className="sp4">TOTAL</span> DEATH</p>
                        <p className="card_total4 card_small4">{data.deaths}</p>
                    </div>
                </div>
            </li>

            <li className=" card card5">
                <div className="card_main5">
                    <div className="card_inner5">
                        <p className="card_name5"><span className="sp5">TOTAL</span> ACTIVE</p>
                        <p className="card_total5 card_small5">{data.active}</p>
                    </div>
                </div>
            </li>

            <li className=" card card6">
                <div className="card_main6">
                    <div className="card_inner6">
                        <p className="card_name6"><span className="sp6">LAST</span> UPDATE </p>
                        <p className="card_total6 card_small6">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>


        </>
    )
}

export default Covid;