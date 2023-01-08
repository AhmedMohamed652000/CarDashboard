import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import React, { useState } from "react";
import { Chart } from "primereact/chart";

const BarChar = () => {
    const [basicData] = useState({
        labels: ["1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        datasets: [
            {
                label: "Miles Statistics",
                backgroundColor: "#2884FF",
                data: [65, 59, 80, 81, 8, 55, 40]
            }
        ]
    });

    return (
        <div >
            <div className="card pt-5 px-2 text-center chartDashbord">
                <div className="center justify-content-between px-3">
                    <div>
                        <span className="bottom-bar active">day</span>
                        <span className="bottom-bar">week</span>
                        <span className="bottom-bar">month</span>
                    </div>
                    <div>
                        256 Miles
                    </div>

                </div>
                <Chart type="bar" data={basicData} />
            </div>
        </div>
    );
};


export default BarChar