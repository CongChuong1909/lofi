import React, {  useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeMusic } from "../../redux/Slices/MusicSlices";
import Noise from '../Noise/Noise';
function Mixed(props) {

    const musicMode = useSelector((state) => state.music);
    const {onPlay, kindMusic, volume} = musicMode;
    const dispatch = useDispatch();
    const [kindMusicPlay, setKindMusicPlay] = useState(kindMusic);
    const [volumePlay, setVolumePlay] = useState(volume)
    const [showSpotify, setShowSpotify] = useState(false);
    const arrKindMusic =  ['sleepy', 'jazzy', 'chill'];
    const handleClickChangeMusic = (kind)=>{
            setKindMusicPlay(kind);
            const updateMusic = {
                ...musicMode,
                kindMusic: kind,
                onPlay: true,
            }
            dispatch(changeMusic(updateMusic))
    }

    const handleChangeVolume = (e) =>{
        const newValueChange = e.target.value;
        setVolumePlay(newValueChange)
        const updateMusic = {
            ...musicMode,
            volume: newValueChange,
        }
        dispatch(changeMusic(updateMusic))
    }

    

    return (
        <div className={`${props.mixedView ? 'opacity-1 z-10' : 'opacity-0 z-0'} absolute w-52 h-[280px] lg:w-80 lg:h-[430px] top-[20%] left-[60%] backdrop-filter scroll-div noise transition_opacity`}>
            <div className='relative right-0 flex w-full justify-end px-[12px] '><p onClick={props.onCloseMixed } className='text-[#fff] cursor-pointer pb-1'>___</p></div>
            <div className='grid grid-cols-5 gap-2 p-2 '>
                <div className="row-span-2 col-span-3 bg-[rgba(1,1,1,0.7)] rounded-[8px]">
                    <div className='flex justify-between items-center p-2'>
                        <h3 className='text-[#bcbab8] text-[12px] lg:text-[16px] font-semibold'>MUSIC</h3>
                        <img className='w-4 h-4 lg:w-5 lg:h-5 opacity-[0.2]' src="https://app.lofi.co/icons/custom-playlist.svg" alt="" />
                    </div>
                    <div className='grid grid-cols-3 px-3 gap-4'>
                        {arrKindMusic.map((item,index)=>
                        {
                            let icon;
                            item === 'sleepy' ? icon ='fa-duotone fa-moon-stars': item ==='jazzy'? icon='fa-solid fa-saxophone':icon='fa-duotone fa-mug-hot';
                            return <div key = {index} onClick={()=>handleClickChangeMusic(item)} className='flex flex-col items-center justify-center cursor-pointer'>
                                    <div className={`${kindMusicPlay === item ? 'active-music': ''} bg-[#524d48] rounded-full w-7 h-7 lg:w-10 lg:h-10 flex justify-center items-center`}>
                                        <i className={`text-[#e4e4e4] p-3 lg:p-5 text-[12px] lg:text-[16px]  ${icon} `}></i>
                                    </div> 
                                    <h4 className='text-[#a5a5a5] text-[10px] lg:text-[14px] pb-2 pt-1'>{item}</h4> 
                                </div>
                        })}
                    </div>
                </div>
                <div className="bg-[rgba(1,1,1,0.7)] col-span-2 rounded-[8px] flex justify-center items-center cursor-pointer border border-[#f3a952]"><img className='w-4 h-4 lg:w-6 lg:h-6' src="https://app.lofi.co/icons/lofi-logo.png" alt="" /><h3 className='text-[#fff] text-[12px] lg:text-[16px] ml-1 lg:ml-3'>lofi.co</h3></div>
                <div onClick={()=> setShowSpotify(!showSpotify)} className="bg-[rgba(1,1,1,0.7)] col-span-2 rounded-[8px] flex justify-center items-center cursor-pointer"><img className='w-4 h-4 lg:w-6 lg:h-6' src="https://app.lofi.co/icons/controls/spotify-player.svg" alt="" /><h3 className='text-[#fff] text-[12px] lg:text-[16px] ml-1 lg:ml-3'>Spotify</h3></div>
                <div className='col-span-5 flex flex-col justify-center items-center bg-[rgba(1,1,1,0.7)] rounded-[8px]'>
                    <h3 className='text-[#bcbab8] text-[13px] lg:text-[16px] pt-3'>MUSIC VOLUME</h3>
                    <div className='flex justify-center items-center w-full py-2'> 
                           <i className="fa-solid fa-volume-off ml-4 lg:ml-0 text-[14px] lg:text-[16px] text-[#bcbab8]"></i> 
                            <div className = 'level-input mx-3 '>
                                <div className="track-full row">
                                    <div className="filler"></div>
                                    <div className="track" ></div>
                                </div>
                                <input className='' value={volumePlay} type="range" name="volume" onChange={handleChangeVolume} step="0.1" min="0" max="1"  />
                            </div>
                            <i className="fa-solid fa-volume-high mr-4 lg:ml-0 text-[14px] lg:text-[16px] text-[#bcbab8]"></i>
                        </div>    
                </div>
                {showSpotify && <div className=' col-span-5 text-center bg-[rgba(1,1,1,0.7)] relative rounded-[8px] w-full'>
                    <span onClick={()=>setShowSpotify(false)} className='absolute right-0 py-2 px-4 cursor-pointer text-[#ccc]'>x</span>
                    <h3 className='text-[#bcbab8] text-[13px] lg:text-[16px] pt-6 lg:pt-3 font-semibold mb-1 lg:mb-4'>SOUNDS FROM <span className='text-[#f3a952]'>SPOTIFY</span></h3>
                    <h3 className='text-[#bcbab8] text-[12px] lg:text-[14px] font-thin mb-4'>... Update later ...</h3>
                </div>}

                <div className='noise col-span-5 flex flex-col justify-center items-center bg-[rgba(1,1,1,0.7)] rounded-[8px] overflow-scroll scrollbar-thin scrollbar-thumb-gray-500 h-[176px]'>
                    <h3 className='text-[#bcbab8] text-[13px] lg:text-[16px] pt-28 lg:pt-40 font-semibold mb-4'>SOUNDS FROM <span className='text-[#f3a952]'>LOFI CAFE</span></h3>
                    <Noise />
                    
                </div>
            </div>

        </div>
    );
}

export default Mixed;