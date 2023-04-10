import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import ButtonOption from '../UI/ButtonOption/ButtonOption';
import SidebarMixed from '../SideBarMixed/SidebarMixed';
import Mixed from '../Mixed/Mixed';
import Scenes from '../Scenes/Scenes';
import ScenesDetail from '../Scenes/ScenesDeTail/ScenesDetail';
import { CSSTransition } from 'react-transition-group';
function HomeLofiHome(props) {
    const mode = useSelector((state) => state.mode);
    const scenes = useSelector((state) => state.scenes);
    const hiddenMode = useSelector((state) => state.hidden);
    const {hidden, time, isHidden} = hiddenMode;
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
                <source src="/mp4lofi/HomeChill/Day-sunny.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-outside-night-clear' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/HomeChill/Night-clear.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-outside-day-ran' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/HomeChill/Day-rainny.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted className={`${activeMode === 'status-outside-night-ran' ? 'bg-in' : 'bg-out'}`}>
                    <source src="/mp4lofi/HomeChill/Night-rainny.mp4" type="video/mp4"/>
                </video>
            </>
        )
    }
    

    return (
        <div className='w-full h-[100vh] fixed bg-[#000] '>
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
                 <div className='relative  w-[120px] h-[120px] bottom-[-49%] left-[43%] transition_opacity'>
                    <ButtonOption tagName = "KeyBoard" tag = 'KeyBoard' volume = {true}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] top-[6%] left-[78%] transition_opacity'>
                    <ButtonOption tagName = "City Rain" tag = 'City Rain' volume = {true}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] bottom-[4%] left-[10%] transition_opacity'>
                    <ButtonOption tagName = "City Traffic" tag = 'City Traffic' volume = {true}/>  
                </div>
            </>
           }
           {mode.scence === 'inside' && <>
                <div className='relative w-[120px] h-[120px] bottom-[-70%] right-[-1%] transition_opacity'>
                    <ButtonOption tagName = "Go Out" tag = 'Go Cafe' volume = {false}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] top-[0%] left-[8%] transition_opacity'>
                    <ButtonOption tagName = "City Rain" tag = 'City Rain' volume = {true}/>  
                </div>

                
           </>}
           </div>
           </CSSTransition>

        </div>
    );
}

export default HomeLofiHome;