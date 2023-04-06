import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../../redux/Slices/ModeSlices";

function ButtonOption(props) {
    let volume = true;
    if(props.volume){
        volume = props.volume;
    }
    const mode = useSelector((state) => state.mode);
    const {weather,scence} = mode;
    const dispatch = useDispatch();
    const [viewVolume, setViewVolume] = useState(false)
    const handleClickEvent = () =>{
        setViewVolume(true);
        if(props.tag === "City Rain")
        {
            if(weather === 'clear')
            {
                const updateWeather = {
                    ...mode,
                    weather: 'ran',
                }
                dispatch(changeMode(updateWeather))
            }
            else{
                const updateWeather = {
                    ...mode,
                    weather: 'clear',
                }
                dispatch(changeMode(updateWeather))
                
            }
        }
        if(props.tag === "Go Cafe"){
            if(scence === 'outside')
            {
                const updateScence = {
                    ...mode,
                    scence: 'inside',
                }
                dispatch(changeMode(updateScence))
            }
            else{
                const updateScence = {
                    ...mode,
                    scence: 'outside',
                }
                dispatch(changeMode(updateScence))
                
            }
        }
    }


    
    return (
        <div className="flex button-option flex-col justify-center items-center relative">
            <div className="cursor-pointer button-option_border  w-8 h-8 border-[3px] flex items-center justify-center border-[#fff] rounded-full relative z-[3]">
                <div onClick={handleClickEvent} onMouseOver={()=>setViewVolume(false)} className="button-option_avtive opacity-0 bg-[#fff] rounded-full w-[18px] h-[18px]"></div>
            </div>
            <div className="button-option_tag z-[3] text-center opacity-0 invisible bg-[rgba(1,1,1,0.6)] top-4 relative rounded-md">
                <p onClick={handleClickEvent} className="py-[2px] px-[8px] text-[#fff] font-semibold cursor-pointer">
                    {props.tagName}
                </p>
                {props.volume && 
                <div className = {`px-4 py-1 level-input ${viewVolume === true ? '': 'hidden'} `}>
                    <div className="track-full row">
                        <div className="filler"></div>
                        <div className="track" ></div>
                    </div>
                    <input type="range" name="volume" min="0" max="100"  />
                </div>
                 }
                
            </div>
        </div>
    );
}

export default ButtonOption;
