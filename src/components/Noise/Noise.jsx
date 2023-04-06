import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeNoise } from "../../redux/Slices/NoiseSlices";

function Noise(props) {

    const noiseMode = useSelector((state) => state.noise);
    const {cityTraffic, cityRain, keyBoard, peopleTalk} = noiseMode;
    const [citiTrafficVolume, setCitiTrafficVolume] = useState(cityTraffic);
    const [cityRainVolume, setCityRainVolume] = useState(cityRain);
    const [keyBoardVolume, setKeyBoardVolume] = useState(keyBoard);
    const [peopleTalkVolume, setPeopleTalkVolume] = useState(peopleTalk);

    const dispatch = useDispatch();
    const audioTrafficRef = useRef();
    const audioRainRef = useRef();
    const audioKeyBoardRef = useRef();
    const audioTalkRef = useRef();
    useEffect(()=>{
        if(audioTrafficRef.current)
        {
            audioTrafficRef.current.volume =0;
        }
        if(audioRainRef.current)
        {
            audioRainRef.current.volume =0;
        }
        if(audioKeyBoardRef.current)
        {
            audioKeyBoardRef.current.volume =0;
        }

        if(audioTalkRef.current)
        {
            audioTalkRef.current.volume =0;
        }
    },[])
    const handleCitiTrafficVolume = (e)=>{
        const newCitiTrafficVolume = e.target.value;
        setCitiTrafficVolume(newCitiTrafficVolume);
        const updateNoise = {
            ...noiseMode,
            cityTraffic: newCitiTrafficVolume,
        }
        dispatch(changeNoise(updateNoise))
        console.log(newCitiTrafficVolume);
        audioTrafficRef.current.volume = newCitiTrafficVolume;
    }
    const handleCityRainVolume = (e)=>{
        const newCityRainVolume = e.target.value;
        setCityRainVolume(newCityRainVolume);
        const updateNoise = {
            ...noiseMode,
            cityRain: newCityRainVolume,
        }
        dispatch(changeNoise(updateNoise))
        console.log(newCityRainVolume);
        audioRainRef.current.volume = newCityRainVolume;
    }
    const handleKeyBoardVolume = (e)=>{
        const newKeyboardNoiseVolume = e.target.value;
        setKeyBoardVolume(newKeyboardNoiseVolume);
        const updateNoise = {
            ...noiseMode,
            keyBoard: newKeyboardNoiseVolume,
        }
        dispatch(changeNoise(updateNoise))
        console.log(newKeyboardNoiseVolume);
        audioKeyBoardRef.current.volume = newKeyboardNoiseVolume;
    }
    const handlePeopleTalkVolume = (e)=>{
        const newPeopleTalkingNoiseVolume = e.target.value;
        setPeopleTalkVolume(newPeopleTalkingNoiseVolume);
        const updateNoise = {
            ...noiseMode,
            peopleTalk: newPeopleTalkingNoiseVolume,
        }
        dispatch(changeNoise(updateNoise))
        console.log(newPeopleTalkingNoiseVolume);
        audioTalkRef.current.volume = newPeopleTalkingNoiseVolume;
    }

   return ( 
    <>
        <div className='flex justify-between w-full level-input mx-3 pb-3 px-8'>
            <audio preload='auto' ref={audioTrafficRef}  autoPlay src='https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/city_traffic.mp3' loop type='audio/mp3'/>
            <h1 className='text-[#bcbab8] pr-6'>City Traffic </h1>
            <div className='track-full row'>
                <div className='filler'></div>
                <div className='track'></div>
            </div>
            <input className=''  value={citiTrafficVolume} type='range' onChange={handleCitiTrafficVolume} name='volume' step='0.1' min='0' max='1'  />
        </div>
        <div className = 'flex justify-between w-full level-input mx-3 pb-3 px-8'>
        <audio preload='auto' ref={audioRainRef}  autoPlay src='https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/rain_city.mp3' loop type='audio/mp3'/>
            <h1 className='text-[#bcbab8] pr-6'>Key Board</h1>
            <div className="track-full row">
                <div className="filler"></div>
                <div className="track" ></div>
            </div>
            <input className='' value={keyBoard} type="range" onChange = {handleKeyBoardVolume} name="volume" step="0.1" min="0" max="1"  />
        </div>
        <div className = 'flex justify-between w-full level-input mx-3 pb-3 px-8'>
        <audio preload='auto' ref={audioKeyBoardRef}  autoPlay src='https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/keyboard.mp3' loop type='audio/mp3'/>
            <h1 className='text-[#bcbab8] pr-6'> City Rain</h1>
            <div className="track-full row">
                <div className="filler"></div>
                <div className="track" ></div>
            </div>
            <input className='' value={cityRain} type="range" onChange = {handleCityRainVolume} name="volume" step="0.1" min="0" max="1"  />
        </div>
        <div className = 'flex justify-between w-full level-input mx-3 pb-3 px-8'>
        <audio preload='auto' ref={audioTalkRef}  autoPlay src='https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/people_talk_inside.mp3' loop type='audio/mp3'/>
            <h1 className='text-[#bcbab8] pr-6'>Talking</h1>
            <div className="track-full row">
                <div className="filler"></div>
                <div className="track" ></div>
            </div>
            <input className='' value={peopleTalk} type="range" onChange = {handlePeopleTalkVolume} name="volume" step="0.1" min="0" max="1"  />
        </div>
        
        
    </>
        
    );
}

export default Noise;