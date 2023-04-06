import React, { useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';

function NoiseItems(props) {

    return (
        <div className = 'flex justify-between w-full level-input mx-3 pb-3 px-8'>
            <ReactAudioPlayer 
                preload='auto'
                autoPlay
                src = "/mp3/city_traffic.mp3"
                // loop
            />
            {/* <audio src = {props.mp3} onLoadedData={(event) => {event.target.volume = props.volumeValue;}} type="audio/mp3"/>
            <h1 className='text-[#bcbab8] pr-6'>{props.tagName}</h1>
            <div className="track-full row">
                <div className="filler"></div>
                <div className="track" ></div>
            </div>
            <input className='' value={props.volumeValue} type="range" onChange = {props.ChangeVolumeNoise} name="volume" step="0.1" min="0" max="1"  /> */}
        </div>
    );
}

export default NoiseItems;