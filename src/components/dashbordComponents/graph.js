import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { height } from "@mui/system";

const Graph = () => {


    const [lineStylesData] = useState({
        labels: ["1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        datasets: [
            {
                label: "Car Statistics",
                data: [12, 51, 62, 33, 21, 62, 45],
                fill: true,
                borderColor: "#FF764C",
                tension: 0.5,
                backgroundColor: "rgb(255 118 76 / 0.3)"
            }
        ]
    });

    return (
        <div className="card pt-5 px-2 text-center chartDashbord">
            <div className="center justify-content-between px-3">
                <div>
                    20 February 2022
                </div>
                <div className="py-1 rounded-pill" style={{background:'#F5F4F6'}}>
                    <span className="bottom-bar activeGraph">day</span>
                    <span className="bottom-bar">week</span>
                    <span className="bottom-bar">month</span>
                </div>


            </div>
            <Chart type="line" data={lineStylesData} style={{ height: '233px' }} />
        </div>

    );
};



export default Graph