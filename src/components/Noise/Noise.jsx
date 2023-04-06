import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeNoise } from "../../redux/Slices/NoiseSlices";
import ReactAudioPlayer from 'react-audio-player';
// import NoiseItems from './NoiseItems/NoiseItems';
// import ReactAudioPlayer from 'react-audio-player';
function Noise(props) {

    const noiseMode = useSelector((state) => state.noise);
    const {cityTraffic, cityRain, keyBoard, peopleTalk} = noiseMode;
    const [citiTrafficVolume, setCitiTrafficVolume] = useState(cityTraffic);
    const [cityRainVolume, setCityRainVolume] = useState(cityRain);
    const [keyBoardVolume, setKeyBoardVolume] = useState(keyBoard);
    const [peopleTalkVolume, setPeopleTalkVolume] = useState(peopleTalk);

    const dispatch = useDispatch();

    const handleCitiTrafficVolume = (e)=>{
        setCitiTrafficVolume(e.target.value);
        const updateNoise = {
            ...noiseMode,
            cityTraffic: citiTrafficVolume,
        }
        dispatch(changeNoise(updateNoise))
    }
    const handleCityRainVolume = (e)=>{
        setCityRainVolume(e.target.value);
        const updateNoise = {
            ...noiseMode,
            cityRain: cityRainVolume,
        }
        dispatch(changeNoise(updateNoise))
    }
    const handleKeyBoardVolume = (e)=>{
        setKeyBoardVolume(e.target.value);
        const updateNoise = {
            ...noiseMode,
            keyBoard: keyBoardVolume,
        }
        dispatch(changeNoise(updateNoise))
    }
    const handlePeopleTalkVolume = (e)=>{
        setPeopleTalkVolume(e.target.value);
        const updateNoise = {
            ...noiseMode,
            peopleTalk: peopleTalkVolume,
        }
        dispatch(changeNoise(updateNoise))
    }

    console.log(cityTraffic);

   return ( 
    <>
        <div className = 'flex justify-between w-full level-input mx-3 pb-3 px-8'>
            <ReactAudioPlayer
                preload='auto'
                autoPlay
                src = "/mp3/city_traffic.mp3"
                loop
                volume={Number(cityTraffic)}
            />

            {/* <audio src = "/mp3/city_traffic.mp3" preload='auto' autoPlay volume="0" loop type="audio/mp3"/> */}
            <h1 className='text-[#bcbab8] pr-6'>City Traffic </h1>
            <div className="track-full row">
                <div className="filler"></div>
                <div className="track" ></div>
            </div>
            <input className='' value={cityTraffic} type="range" onChange = {handleCitiTrafficVolume} name="volume" step="0.1" min="0" max="1"  />
        </div>
        {/* <div className = 'flex justify-between w-full level-input mx-3 pb-3 px-8'>
            <ReactAudioPlayer 
                preload='auto'
                autoPlay
                src = "/mp3/keyboard.mp3"
                loop
                volume={Number(keyBoard)}
            />
            <h1 className='text-[#bcbab8] pr-6'>"Keyboard"</h1>
            <div className="track-full row">
                <div className="filler"></div>
                <div className="track" ></div>
            </div>
            <input className='' value={keyBoard} type="range" onChange = {handleKeyBoardVolume} name="volume" step="0.1" min="0" max="1"  />
        </div>
        <div className = 'flex justify-between w-full level-input mx-3 pb-3 px-8'>
            <ReactAudioPlayer 
                preload='auto'
                autoPlay
                src = "/mp3/rain_city.mp3"
                loop
                volume={Number(cityRain)}
            />
            <h1 className='text-[#bcbab8] pr-6'> CityRain</h1>
            <div className="track-full row">
                <div className="filler"></div>
                <div className="track" ></div>
            </div>
            <input className='' value={cityRain} type="range" onChange = {handleCityRainVolume} name="volume" step="0.1" min="0" max="1"  />
        </div>
        <div className = 'flex justify-between w-full level-input mx-3 pb-3 px-8'>
            <ReactAudioPlayer 
                preload='auto'
                autoPlay
                src = "/mp3/people_talk_inside.mp3"
                loop
                volume={Number(peopleTalk)}
            />
            <h1 className='text-[#bcbab8] pr-6'>Talking</h1>
            <div className="track-full row">
                <div className="filler"></div>
                <div className="track" ></div>
            </div>
            <input className='' value={peopleTalk} type="range" onChange = {handlePeopleTalkVolume} name="volume" step="0.1" min="0" max="1"  />
        </div> */}
        
        
    </>
        
    );
}

export default Noise;