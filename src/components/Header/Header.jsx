import React, { useState } from 'react';
import Toggle from '../UI/ToggleButton/ToggleButton';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { changeMode } from '../../redux/Slices/ModeSlices';
import PlayerOption from '../PlayerOption/PlayerOption';
function Header(props) {
    const mode = useSelector((state) => state.mode);
    const {dayNight} = mode
    const dispatch = useDispatch();
    const [dayNightBg, setDayNightBg] = useState(dayNight)
   
    const handleChangeMode = ()=>{

        if(dayNight === 'day')
        {
            setDayNightBg('night');
            const updateMode = {
                ...mode,
                dayNight: 'night',
            }
            console.log(updateMode);
            dispatch(changeMode(updateMode))
        }
        else{
            setDayNightBg('day');
            const updateMode = {
                ...mode,
                dayNight: 'day',
            }
            console.log(updateMode);
            dispatch(changeMode(updateMode))
            
        }
    }
    return (
        <div className='flex justify-between items-center bg-[rgba(92,92,92,0)] w-full fixed z-[2]'>
                <img className='w-40 mx-10 h-auto' src="/image/logo.gif" alt="" />
                <div className='flex justify-between items-center w-[30%] h-[80px] px-10'>
                    <Toggle onToggleModeBg = {handleChangeMode}/>
                    <PlayerOption/>
                    <div className='bg-[rgba(1,1,1,0.7)] rounded-[10px]'>
                        <i className="text-[#fff] cursor-pointer px-3 py-2 fa-regular fa-bars"></i>
                    </div>
                </div>
        </div>
    );
}

export default Header;