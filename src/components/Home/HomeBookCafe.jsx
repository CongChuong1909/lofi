import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import ButtonOption from '../UI/ButtonOption/ButtonOption';
import SidebarMixed from '../SideBarMixed/SidebarMixed';
import Mixed from '../Mixed/Mixed';
import Scenes from '../Scenes/Scenes';
import ScenesDetail from '../Scenes/ScenesDeTail/ScenesDetail';
function HomeBookCafe(props) {
    const mode = useSelector((state) => state.mode);
    const scenes = useSelector((state) => state.scenes);
    const [mixedView, setMixedView] = useState(false);
    const [scenesView, setScenesView] = useState(false);

    
    const activeMode = `status-${mode.scence}-${mode.dayNight}-${mode.weather}`;
    let classes = '';
    if(mixedView)
    {
        classes = ' visible opacity-[1]'
    }
    else{
        classes = ' invisible opacity-[0]'
    }

    const video = () =>{
        return (
            <>
                <video autoPlay loop muted  className={`${activeMode === 'status-outside-day-clear' ? 'bg-in' : 'bg-out'}`}>
                <source src="/mp4lofi/BookCafe/outDay.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-outside-night-clear' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/BookCafe/outNight.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-outside-day-ran' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/BookCafe/outRainyDay.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-outside-night-ran' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/BookCafe/outRainyNight.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-inside-day-clear' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/BookCafe/inDay.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-inside-night-clear' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/BookCafe/inNight.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-inside-day-ran' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/BookCafe/inRainyDay.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-inside-night-ran' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/BookCafe/inRainyNight.mp4" type="video/mp4"/>
                </video>
            </>
        )
    }
    

    return (
        <div className='w-full h-[100vh] fixed bg-[#000]' >
            {video()}
            <SidebarMixed onViewScenes = {()=>{setScenesView(!scenesView); setMixedView(false)}} onViewMixed = {()=>{setMixedView(!mixedView);setScenesView(false)}}/>
            <Mixed mixedView = {mixedView} classes = {classes} onCloseMixed = {()=>setMixedView(false)}/>
            <Scenes scenesView = {scenesView} onCloseScenes = {()=>setScenesView(false)}/>
           {mode.scence === 'outside' && 
            <>
                 <div className='relative w-[120px] h-[120px] bottom-[-44%] right-[-53%]'>
                    <ButtonOption tagName = "Go Cafe" tag = 'Go Cafe' volume = {false}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] top-[6%] left-[8%]'>
                    <ButtonOption tagName = "City Rain" tag = 'City Rain' volume = {true}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] bottom-[-41%] left-[30%]'>
                    <ButtonOption tagName = "City Traffic" tag = 'City Traffic' volume = {true}/>  
                </div>
            </>
           }
           {mode.scence === 'inside' && <>
                <div className='relative w-[120px] h-[120px] bottom-[-70%] right-[-1%]'>
                    <ButtonOption tagName = "Go Out" tag = 'Go Cafe' volume = {false}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] top-[0%] left-[8%]'>
                    <ButtonOption tagName = "City Rain" tag = 'City Rain' volume = {true}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] bottom-[-34%] left-[80%]'>
                    <ButtonOption tagName = "KeyBoard" tag = 'KeyBoard' volume = {true}/>  
                </div>
           </>}


        </div>
    );
}

export default HomeBookCafe;