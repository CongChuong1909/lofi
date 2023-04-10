import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ButtonOption from '../UI/ButtonOption/ButtonOption';
import SidebarMixed from '../SideBarMixed/SidebarMixed';
import Mixed from '../Mixed/Mixed';
import Scenes from '../Scenes/Scenes';
import ScenesDetail from '../Scenes/ScenesDeTail/ScenesDetail';
import { CSSTransition } from 'react-transition-group';
import TimerHidden from '../TimerHidden/TimerHidden';
import OclockCoundown from '../UI/OclockCoundown/OclockCoundown';
import TimerSetting from '../TimerSetting/TimerSetting';
import { changePosition } from '../../redux/Slices/PositionDragSlices';
function HomeBookCafe(props) {
    const mode = useSelector((state) => state.mode);
    const scenes = useSelector((state) => state.scenes);
    const [mixedView, setMixedView] = useState(false);
    const [scenesView, setScenesView] = useState(false);
    const [settingView, setSettingView] = useState(false);
    const dispatch = useDispatch();
    const [timerView, setTimerView] = useState(false);
    const hiddenMode = useSelector((state) => state.hidden);
    const [viewOclock, setViewOclock] = useState(false);
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
    const [isDragging, setIsDragging] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState({ x: 300, y: 100 });
  const [draggedElement, setDraggedElement] = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDraggedElement(e.target);
    e.stopPropagation();
    setDraggingPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.stopPropagation();
    const dx = e.clientX - draggingPosition.x;
    const dy = e.clientY - draggingPosition.y;

    setDraggingPosition({
      x: e.clientX,
      y: e.clientY,
    });

    draggedElement.style.left = `${draggedElement.offsetLeft + dx}px`;
    draggedElement.style.top = `${draggedElement.offsetTop + dy}px`;
  };

  const handleMouseUp = () => {
    // e.stopPropagation();
    setIsDragging(false);
    setDraggedElement(null);
  };

      const style = {
        position: "absolute",
        top: draggingPosition.y,
        left: draggingPosition.x,
        transform: "translate(-50%, -50%)",
      };
    

    return (
        <div  onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className='w-full h-[100vh] fixed bg-[#000]'    >
            {video()}
            <CSSTransition
                in={hidden}
                timeout={500}
                unmountOnExit
            >
            {/* <div className={`${hidden ? 'opacity-[1]' : 'opacity-0'} -z-10  transition_opacity w-full h-[100vh]` }> */}
            <>
            <SidebarMixed onViewScenes = {()=>{setScenesView(!scenesView); setMixedView(false); setSettingView(false); setTimerView(false);}} onViewMixed = {()=>{setMixedView(!mixedView);setScenesView(false); setSettingView(false); setTimerView(false);}} onViewSetting = {()=>{setSettingView(!settingView);setScenesView(false); setMixedView(false); setTimerView(false);}} onViewTimer= {() =>{setTimerView(!timerView); setMixedView(false); setScenesView(false); setSettingView(false)}}/>
            <Mixed mixedView = {mixedView} classes = {classes} onCloseMixed = {()=>setMixedView(false)}/>
            <Scenes scenesView = {scenesView} onCloseScenes = {()=>setScenesView(false)}/>
            <TimerHidden  settingView = {settingView} onCloseSetting = {()=>setSettingView(false)}/>
            {viewOclock && <div className='absolute w-64 h-[8%] top-[20%] left-[60%] z-[50]  noise transition_opacity' style={style}>
                <OclockCoundown onViewSetting = {()=> setSettingView(true)} onCloseOclock = {()=> setViewOclock(false)} style={style} onMouseDown = {handleMouseDown}/>
            </div>}
            
            <TimerSetting handleOclockView = {()=>setViewOclock(true)} timerView = {timerView} onCloseTimer = {()=>setTimerView(false)}/>
           {mode.scence === 'outside' && 
            <>
                 <div className='relative w-[120px] h-[120px] bottom-[-44%] right-[-53%]'>
                    <ButtonOption tagName = "Go Cafe" tag = 'Go Cafe' volume = {false}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] top-[6%] left-[8%]'>
                    <ButtonOption tagName = "City Rain" tag = 'City Rain' volume = {true}/>  
                </div>

                <div className='relative  w-[120px] h-[120px] bottom-[-8%] lg:bottom-[-41%] left-[30%]'>
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

                        <div className='relative  w-[120px] h-[120px] bottom-[-16%] lg:bottom-[-34%] left-[80%]'>
                            <ButtonOption tagName = "KeyBoard" tag = 'KeyBoard' volume = {true}/>  
                        </div>
                </>}
                </>
            {/* </div> */}
           </CSSTransition>
        </div>
    );
}

export default HomeBookCafe;