import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../../redux/Slices/ModeSlices";
import { changeNoise } from "../../../redux/Slices/NoiseSlices";

function ButtonOption(props) {
    let volume = true;
    if(props.volume){
        volume = props.volume;
    }
    const mode = useSelector((state) => state.mode);
    const {weather,scence} = mode;
    const noiseMode = useSelector((state) => state.noise);
    const {cityTraffic, cityRain, keyBoard, peopleTalk} = noiseMode;
    const dispatch = useDispatch();
    const [viewVolume, setViewVolume] = useState(false)
    const [valueRainVolume, setValueRainVolume] = useState(cityRain);
    const [valueTrafficVolume, setValueTrafficVolume] = useState(cityTraffic);
    const [valueKeyboardVolume, setValueKeyBoardVolume] = useState(keyBoard);
    const handleClickEvent = () =>{
        setViewVolume(true);
        if(props.tag === "City Rain")
        {
            if(weather === 'clear')
            {
                const updateWeather = { ...mode, weather: 'ran', }
                const updateNoise = { ...noiseMode, cityRain: 0.5, }
                setValueRainVolume(0.5)
                dispatch(changeNoise(updateNoise))
                dispatch(changeMode(updateWeather))
            }
            else{
                const updateWeather = { ...mode, weather: 'clear',}
                const updateNoise = {...noiseMode, cityRain: 0, }
                setValueRainVolume(0)
                dispatch(changeNoise(updateNoise))
                dispatch(changeMode(updateWeather))
            } 
        }
        if(props.tag === "Go Cafe"){
            if(scence === 'outside')
            {
                const updateScence = {...mode, scence: 'inside',}
                dispatch(changeMode(updateScence))
            }
            else{
                const updateScence = {...mode, scence: 'outside',}
                dispatch(changeMode(updateScence))
            }
        }
        if(props.tag === "City Traffic")
        {
            const updateNoise = {...noiseMode, cityTraffic: 0.5}
            setValueTrafficVolume(0.5)
            dispatch(changeNoise(updateNoise))
        }
        if(props.tag === "KeyBoard")
        {
            const updateNoise = {...noiseMode, keyBoard: 0.5}
            setValueKeyBoardVolume(0.5)
            dispatch(changeNoise(updateNoise))
        }
    }

    const handleChangeValueVolume = (e) =>{
        if(props.tag === 'City Rain')
        {
            let newVolumeRain = e.target.value;;
            setValueRainVolume(newVolumeRain)
            const updateNoise = {
                ...noiseMode,
                cityRain: newVolumeRain,
            }
            dispatch(changeNoise(updateNoise))
        }
        if (props.tag === 'City Traffic') {
            let newVolumeTraffic = e.target.value;;
            setValueTrafficVolume(newVolumeTraffic)
            const updateNoise = {
                ...noiseMode,
                cityTraffic: newVolumeTraffic,
            }
            dispatch(changeNoise(updateNoise))
        }
        if (props.tag === 'KeyBoard') {
            let newVolumeKeyboard = e.target.value;;
            setValueKeyBoardVolume(newVolumeKeyboard)
            const updateNoise = {
                ...noiseMode,
                keyBoard: newVolumeKeyboard,
            }
            dispatch(changeNoise(updateNoise))
        }
    }


    
    return (
        <div className="flex button-option flex-col justify-center items-center relative">
            <div className="cursor-pointer button-option_border w-6 h-6  lg:w-8 lg:h-8 border-[3px] flex items-center justify-center border-[#fff] rounded-full relative z-[3]">
                <div onClick={handleClickEvent} onMouseOver={()=>setViewVolume(false)} className="button-option_avtive opacity-0 bg-[#fff] rounded-full w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]"></div>
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
                    <input type="range" onChange={handleChangeValueVolume} value={props.tag === 'City Rain' ? valueRainVolume : props.tag === 'City Traffic' ? valueTrafficVolume  : props.tag === 'KeyBoard'? valueKeyboardVolume: ''} name="volume" step="0.1" min="0" max="1"  />
                </div>
                 }
                
            </div>
        </div>
    );
}

export default ButtonOption;
