import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./DatePractice.css";

const DatePractice = () =>{
    const [date, setDate] = useState(new Date());
    const update = () => {
        setInterval(()=>{setDate(new Date())}, 1000)
    }
    

    return(
        <div>
            <h1>Current Time</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
            {update()}
            <div>
                <div class ="red_block">
                    <div class="green_block"></div>
                </div>
                <div class = "first_paragraph"><p>Css Practice</p><button>Select</button></div>
            </div>
        </div>
    )
}

export default DatePractice;