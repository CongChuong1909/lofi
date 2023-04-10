import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import ButtonOption from '../UI/ButtonOption/ButtonOption';
import SidebarMixed from '../SideBarMixed/SidebarMixed';
import Mixed from '../Mixed/Mixed';
import Scenes from '../Scenes/Scenes';
import ScenesDetail from '../Scenes/ScenesDeTail/ScenesDetail';
import { CSSTransition } from 'react-transition-group';
function HomeLofiCafe(props) {
    const mode = useSelector((state) => state.mode);
    const scenes = useSelector((state) => state.scenes);
    
    const [mixedView, setMixedView] = useState(false);
    const [scenesView, setScenesView] = useState(false);
    const hiddenMode = useSelector((state) => state.hidden);
    const {hidden, time, isHidden} = hiddenMode;
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
                <source src="/mp4lofi/CafeChill/outDay.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-outside-night-clear' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/CafeChill/outNight.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-outside-day-ran' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/CafeChill/outRainyDay.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-outside-night-ran' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/CafeChill/outRainyNight.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-inside-day-clear' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/CafeChill/inDay.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-inside-night-clear' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/CafeChill/inNight.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-inside-day-ran' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/CafeChill/inRainyDay.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-inside-night-ran' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/CafeChill/inRainyNight.mp4" type="video/mp4"/>
                </video>
            </>
        )
    }
    

    return (
        <div className='w-full h-[100vh] fixed bg-[#000] ' >
            {video()}
            <CSSTransition
                in={hidden}
                timeout={500}
                unmountOnExit
            >
            <div className={`${hidden ? 'opacity-[1]' : 'opacity-0'}  transition_opacity w-full h-[100vh]` }>
            <SidebarMixed onViewScenes = {()=>{setScenesView(!scenesView); setMixedView(false); setSettingView(false)}} onViewMixed = {()=>{setMixedView(!mixedView);setScenesView(false); setSettingView(false)}} onViewSetting = {()=>{setSettingView(!settingView);setScenesView(false); setMixedView(false)}}/>
            <Mixed mixedView = {mixedView} classes = {classes} onCloseMixed = {()=>setMixedView(false)}/>
            <Scenes scenesView = {scenesView} onCloseScenes = {()=>setScenesView(false)}/>
            <TimerHidden  settingView = {settingView} onCloseSetting = {()=>setSettingView(false)}/>
           {mode.scence === 'outside' && 
            <>
                 <div className='relative w-[120px] h-[120px] bottom-[-42%] right-[-44%] transition_opacity'>
                    <ButtonOption tagName = "Go Cafe" tag = 'Go Cafe' volume = {false}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] top-[6%] left-[4%] transition_opacity'>
                    <ButtonOption tagName = "City Rain" tag = 'City Rain' volume = {true}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] bottom-[-51%] left-[74%] transition_opacity'>
                    <ButtonOption tagName = "City Traffic" tag = 'City Traffic' volume = {true}/>  
                </div>
            </>
           }
           {mode.scence === 'inside' && <>
                <div className='relative w-[120px] h-[120px] bottom-[-70%] right-[-1%] transition_opacity'>
                    <ButtonOption tagName = "Go Out" tag = 'Go Cafe' volume = {false}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] top-[7%] left-[64%] transition_opacity'>
                    <ButtonOption tagName = "City Rain" tag = 'City Rain' volume = {true}/>  
                </div>
           </>}
           </div>
           </CSSTransition>
        </div>

    );
}

export default HomeLofiCafe;