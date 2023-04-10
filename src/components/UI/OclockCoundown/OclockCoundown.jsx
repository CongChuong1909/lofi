import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { useDispatch, useSelector } from 'react-redux';
import "react-circular-progressbar/dist/styles.css";
function OclockCoundown(props) {

    const timerMode = useSelector((state) => state.timer);
    const {workMinute, relaxMinute, modeTimer} = timerMode;  
    const [secondLeft, setSecondLeft] = useState(0)
    const [isPaused, setIsPaused] = useState(false);
    const [modeTimerState, setModeTimerState] = useState(modeTimer) 

    const secondsLeftRef = useRef(secondLeft);
    const isPausedRef = useRef(isPaused);
    const modeTimerRef = useRef(modeTimerState);
    

    const tick = () =>{
        secondsLeftRef.current--;
        setSecondLeft(secondsLeftRef.current);
    }
    
    useEffect(()=>{
        const switchMode = () =>{
            const nextMode = modeTimerRef.current === 'work' ? 'relax' : 'work';
            setModeTimerState(nextMode);
            modeTimerRef.current = nextMode
            const nextSecond = nextMode  === 'work' ? workMinute *60 : relaxMinute *60;
            setSecondLeft(nextSecond);
            secondsLeftRef.current = nextSecond;
        }

        secondsLeftRef.current = workMinute * 60;
        setSecondLeft(secondsLeftRef.current);
            const timerInterval = setInterval(()=>{
                if(isPausedRef.current){
                    return;
                }
                if(secondsLeftRef.current === 0)
                {
                    return switchMode();
                }
                tick();
            }, 1000)

            return () => clearInterval(timerInterval);
    }, [timerMode])

    const totalSecond = modeTimerState === 'work' ? workMinute* 60 : relaxMinute*60;
    const percentage = Math.round(secondLeft / totalSecond *100) ;

    const minute = Math.floor(secondLeft/60);
    let second = secondLeft % 60;
    if(second <10)
        {
            second = '0'+second;
        }

    return (
        <div className="flex items-center flex-col z-[999] h-52  w-44 lg:h-72 lg:w-full backdrop-filter">
            <div  className="flex justify-between w-full px-2 mt-2 cursor-grab">
                <div onClick={props.onViewSetting} className="cursor-pointer"><i className="fa-solid fa-gear text-[12px] lg:text-[16px] lg:p-2 text-[#fff]"></i><span className=" text-[12px] lg:text-[16px] text-[#fff] pl-2 lg:pl-0">Setting</span></div>
                <div onMouseDown={props.onMouseDown} className="w-[40%]"></div>
                <div onClick={props.onCloseOclock} className="cursor-pointer"><i className="fa-thin fa-xmark p-2 text-[#fff]"></i></div>
            </div>
            <div className="w-full flex flex-col items-center pb-2 lg:py-6 justify-center">
                <div className="w-[60%]">
                <CircularProgressbarWithChildren value={percentage}
                   styles={buildStyles({
                    pathColor: modeTimerState === 'work' ?'#f3a952': '#c1c8cf',
                    trailColor: "rgba(0,0,0,0.7)",
                  })}
                >
        
                    <img
                    style={{ width: 120, marginTop: -5 }}
                    src="https://app.lofi.co/static/media/logo.0cbf9e63b4a021661126.gif"
                    alt="doge"
                    />
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong className="text-[#ccc] flex justify-center">{percentage+ "%"}</strong>
                    <p className="text-[#333]">{minute} : {second}</p>
                    </div>
                </CircularProgressbarWithChildren>
                </div>
                <div className="mt-3">
                    {isPaused ? 
                    <div onClick={() => { setIsPaused(false); isPausedRef.current = false; }} className="bg-[rgba(0,0,0,0.7)] rounded-full w-8 lg:w-11 h-8 lg:h-11 flex items-center justify-center "><i  className="fa-thin fa-play  text-[12px] lg:text-[16px] text-[#fff] "></i></div> : 
                    <div onClick={() => { setIsPaused(true); isPausedRef.current = true; }} className="bg-[rgba(0,0,0,0.7)] rounded-full w-8 lg:w-11 h-8 lg:h-11 flex items-center justify-center "><i  className="fa-thin fa-pause text-[12px] lg:text-[16px]  text-[#fff] "></i></div>}
                
                
                </div>
            </div>
        </div>
    );
}

export default OclockCoundown;
