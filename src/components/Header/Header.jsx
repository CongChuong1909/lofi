import React, { useState } from 'react';
import Toggle from '../UI/ToggleButton/ToggleButton';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { changeMode } from '../../redux/Slices/ModeSlices';
import PlayerOption from '../PlayerOption/PlayerOption';
import { CSSTransition } from "react-transition-group";
function Header(props) {
    const mode = useSelector((state) => state.mode);
    const {dayNight} = mode
    const dispatch = useDispatch();
    const [dayNightBg, setDayNightBg] = useState(dayNight)
    const hiddenMode = useSelector((state) => state.hidden);
    const {hidden, time, isHidden} = hiddenMode;

    console.log(hiddenMode);
    const handleChangeMode = ()=>{

        if(dayNight === 'day')
        {
            setDayNightBg('night');
            const updateMode = {
                ...mode,
                dayNight: 'night',
            }
            dispatch(changeMode(updateMode))
        }
        else{
            setDayNightBg('day');
            const updateMode = {
                ...mode,
                dayNight: 'day',
            }
            dispatch(changeMode(updateMode))
            
        }
    }
    return (
        <CSSTransition
        in={hidden}
        timeout={500}
        classNames="box"
        unmountOnExit
      >
        <div className={` flex justify-between items-center bg-[rgba(92,92,92,0)] w-full fixed z-[2]  ${hidden ? 'fadeDown': 'fadeUp'}`}>
                <img className='w-40 mx-10 h-auto' src="/image/logo.gif" alt="" />
                <div className='flex justify-between items-center w-[30%] h-[80px] px-10'>
                    <Toggle onToggleModeBg = {handleChangeMode}/>
                    <PlayerOption/>
                    <div className='bg-[rgba(1,1,1,0.7)] rounded-[10px]'>
                        <i className="text-[#fff] cursor-pointer px-3 py-2 fa-regular fa-bars"></i>
                    </div>
                </div>
        </div>
        </CSSTransition>
    );
}

export default Header;