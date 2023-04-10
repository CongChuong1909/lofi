import React from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function OclockCoundown(props) {
    const percentage = 66;
    return (
        <div className="hidden absolute w-64 flex items-center flex-col h-[40%] top-[20%] left-[60%] z-10 backdrop-filter scroll-div noise transition_opacity">
            <div className="flex justify-between w-full px-2 ">
                <div className="cursor-pointer"><i className="fa-solid fa-gear p-2 text-[#fff]"></i><span className="text-[#fff]">Setting</span></div>
                <div className="cursor-pointer"><i className="fa-thin fa-xmark p-2 text-[#fff]"></i></div>
            </div>
            <div className="w-full flex flex-col items-center py-6 justify-center">
                <div className="w-[60%]">
                <CircularProgressbarWithChildren value={66}>
        
                    <img
                    style={{ width: 120, marginTop: -5 }}
                    src="https://app.lofi.co/static/media/logo.0cbf9e63b4a021661126.gif"
                    alt="doge"
                    />
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>66%</strong>
                    </div>
                </CircularProgressbarWithChildren>
                </div>
                <div>
                <i className="fa-thin fa-play p-4 text-[#fff] bg-[rgba(0,0,0,0.7)] rounded-full"></i>
                <i className="fa-thin fa-pause p-4 text-[#fff] bg-[rgba(0,0,0,0.7)] rounded-full"></i>
                </div>
            </div>
        </div>
    );
}

export default OclockCoundown;
