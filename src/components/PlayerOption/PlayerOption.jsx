import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMusic } from "../../redux/Slices/MusicSlices";
function PlayerOption(props) {
    const musicMode = useSelector((state) => state.music);
    const {onPlay, kindMusic, volume} = musicMode;  
    const [volumePlay, setVolumePlay] = useState(volume);
    const [currentSongPlay, setCurrentSongPlay] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [viewVolume, setViewVolume] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const audioElement = useRef();
    const dispatch = useDispatch();
    onPlay && audioElement.current.play();

    const handlePlayingMusic = () =>{
        if(onPlay === false)
            {
                audioElement.current.play();
                const updateMusic = {
                    ...musicMode,
                    onPlay: true,
                }
                dispatch(changeMusic(updateMusic))
            }
            else{
                audioElement.current.pause();
                const updateMusic = {
                    ...musicMode,
                    onPlay: false,
                }
                dispatch(changeMusic(updateMusic))
                
            }
    }

    const handleChangeVolume = (e) =>{
        setVolumePlay(e.target.value);
        console.log(e.target.value);
        const updateMusic = {
            ...musicMode,
            volume: volumePlay,
        }
        setIsMuted(false);
        audioElement.current.volume = volumePlay;
       
        if(e.target.value === '0'){
            setIsMuted(true);
        }
        dispatch(changeMusic(updateMusic))
    }

    const handleMuted = () =>{
        setIsMuted(!isMuted);
        if(isMuted === false)
        {
            audioElement.current.volume = 0;
        }
        else{
            audioElement.current.volume = volumePlay;
        }
    }

    const mp3PlayerSong = `https://lofico.nyc3.cdn.digitaloceanspaces.com/tracks/${kindMusic}/${kindMusic}_${currentSongPlay}.mp3`
    console.log(mp3PlayerSong);

    const handleBack = ()=>{
        let temp = currentSongPlay;
        temp--;
        if(temp < 1)
            temp = 19;
        setCurrentSongPlay(temp)
    }
    const handleForward = ()=>{
        let temp = currentSongPlay;
        temp++;
        if(temp > 19)
            temp = 1;
        setCurrentSongPlay(temp)
    }

    const handleToggleFullscreen = () => {
        if (!isFullscreen) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
        setIsFullscreen(!isFullscreen);
      };
    return (
        <>
           <audio src={mp3PlayerSong} preload="auto"  type="audio/mpeg" ref ={audioElement}/>
            <div  onMouseLeave={()=> setViewVolume(false)}  className="relative">
                <div  className="bg-[rgba(1,1,1,0.7)] rounded-[10px] relative">
                    <i onClick={handleBack} className="text-[#fff] cursor-pointer px-3 py-2 fa-sharp fa-solid fa-backward-fast"></i>
                    {!onPlay && <i onClick={handlePlayingMusic} className="text-[#fff] cursor-pointer px-3 py-2 w-[32px] fa-duotone fa-play"></i>}
                    {onPlay && <i onClick={handlePlayingMusic} className="text-[#fff] cursor-pointer px-3 py-2 w-[32px] fa-duotone fa-pause"></i>}
                    <i onClick={handleForward} className="text-[#fff]  cursor-pointer px-3 py-2 fa-sharp fa-solid fa-forward-fast"></i>
                    <i onClick={()=>setViewVolume(!viewVolume)} className={`text-[#fff] cursor-pointer px-3 py-2 fa-solid  ${isMuted ? 'fa-volume-slash' : 'fa-volume'} `}></i>
                </div>
                <div className = {` bg-[rgba(1,1,1,0.7)] absolute  px-3 py-1 level-input ${viewVolume === true ? '': 'hidden'} `}>
                    <div className="track-full row">
                        <div className="filler"></div>
                        <div className="track" ></div>
                    </div>
                    <input type="range" name="volume" step="0.01" min="0" max="1" value={volumePlay} onChange={handleChangeVolume} />
                </div>
            </div>

            <div className="bg-[rgba(1,1,1,0.7)] rounded-[10px]">
                <i onClick = {handleMuted} className={`text-[#fff] cursor-pointer px-3 py-2 fa-sharp fa-solid fa-volume-slash ${isMuted ?'border-2 border-[#f3a952] rounded-lg': ''}`}></i>
            </div>
            <div className="bg-[rgba(1,1,1,0.7)] rounded-[10px] "  onClick={handleToggleFullscreen}>
            {isFullscreen ? <i class="text-[#fff] cursor-pointer px-3 py-2 fa-regular fa-arrows-minimize"></i>  : <i className="text-[#fff] cursor-pointer px-3 py-2 fa-sharp fa-regular fa-expand"></i>}
            </div>
        </>
    );
    }

export default PlayerOption;
