import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ButtonOption from '../UI/ButtonOption/ButtonOption';
import SidebarMixed from '../SideBarMixed/SidebarMixed';
import Mixed from '../Mixed/Mixed';
function Outside(props) {
    const mode = useSelector((state) => state.mode);
    const activeMode = `status-${mode.scence}-${mode.dayNight}-${mode.weather}`;

    const [mixedView, setMixedView] = useState(false);
    const [isVideoLoaded, setVideoIsLoaded] = useState(false);

    
    return (
        <div className='w-full h-[100vh] bg-[#000]'>
            <video autoPlay loop muted  className={`${activeMode === 'status-outside-day-clear' ? 'bg-in' : 'bg-out'}`}>
                <source src="/mp4lofi/ExteriorDay.mp4" type="video/mp4"/>
            </video>
            <video autoPlay loop muted onLoadedData={()=>setVideoIsLoaded(true)} className={`${activeMode === 'status-outside-night-clear' ? 'bg-in' : 'bg-out'}`}>
                <source src="/mp4lofi/ExteriorNight.mp4" type="video/mp4"/>
            </video>
            <video autoPlay loop muted onLoadedData={()=>setVideoIsLoaded(true)} className={`${activeMode === 'status-outside-day-ran' ? 'bg-in' : 'bg-out'}`}>
                <source src="/mp4lofi/ExteriorRainyDay.mp4" type="video/mp4"/>
            </video>
            <video autoPlay loop muted onLoadedData={()=>setVideoIsLoaded(true)} className={`${activeMode === 'status-outside-night-ran' ? 'bg-in' : 'bg-out'}`}>
                <source src="/mp4lofi/ExteriorRainyNight.mp4" type="video/mp4"/>
            </video>
            <video autoPlay loop muted onLoadedData={()=>setVideoIsLoaded(true)} className={`${activeMode === 'status-inside-day-clear' ? 'bg-in' : 'bg-out'}`}>
                <source src="/mp4lofi/CafeDay.mp4" type="video/mp4"/>
            </video>
            <video autoPlay loop muted onLoadedData={()=>setVideoIsLoaded(true)} className={`${activeMode === 'status-inside-night-clear' ? 'bg-in' : 'bg-out'}`}>
                <source src="/mp4lofi/CafeNight.mp4" type="video/mp4"/>
            </video>
            <video autoPlay loop muted onLoadedData={()=>setVideoIsLoaded(true)} className={`${activeMode === 'status-inside-day-ran' ? 'bg-in' : 'bg-out'}`}>
                <source src="/mp4lofi/CafeRainyDay.mp4" type="video/mp4"/>
            </video>
            <video autoPlay loop muted onLoadedData={()=>setVideoIsLoaded(true)} className={`${activeMode === 'status-inside-night-ran' ? 'bg-in' : 'bg-out'}`}>
                <source src="/mp4lofi/CafeRainyNight.mp4" type="video/mp4"/>
            </video>
            <SidebarMixed onViewMixed = {()=>setMixedView(!mixedView)}/>
            {/* {mixedView &&  */}
            <Mixed onCloseMixed = {()=>setMixedView(false)}/>
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

export default Outside;