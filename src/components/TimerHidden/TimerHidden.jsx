
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { changeHidden } from '../../redux/Slices/HiddenSlices';
function TimerHidden(props) {
    const [isToggled, setIsToggled] = useState(true);
    const dispatch = useDispatch();
    const hiddenMode = useSelector((state) => state.hidden);
    const {hidden, time, isHidden} = hiddenMode; 
    const [timeHidden, setTimeHidden] = useState(time);
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };

    const handleChangeHiddenOption = () =>{
        const updateHidden = {
            ...hiddenMode,
            isHidden : isToggled,
            time: Number(timeHidden),
        }
        console.log(updateHidden);
        dispatch(changeHidden(updateHidden))
        props.onCloseSetting();
    }

    // console.log(hiddenMode);
    return (
        <div className={`${props.settingView ? 'opacity-1' : 'opacity-0 translate-x-[200%] z-0'} backdrop-filter w-[20%] h-[40%] absolute top-[20%] z-10 left-[60%] p-4`}>
            <div className='flex justify-between items-center px-3 '>
                <p className='text-[18px] text-[#fff] font-semibold'>General Setting</p>
                <i onClick={props.onCloseSetting} className=" cursor-pointer p-2 fa-light fa-xmark text-[#fff]"></i>
            </div>
                <div className='grid grid-cols-2 gap-4p-4 p-4 mt-4 bg-[rgba(0,0,0,0.69)] rounded-xl'>
                    <div>
                        <h1  className='text-[18px] text-[#fff] font-semibold'>Hide Element</h1>
                    </div>
                    <div className='flex justify-end w-full'>
                        <button className={` relative w-[36px] h-[20px] rounded-full border-none outline-none shadow-xl  ${isToggled ? "bg-[#f3a952]" : "bg-[rgba(0,0,0,0.7)]"}`} onClick={handleToggle} >
                                <div className={`absolute  transition-all ease-linear delay-150 top-[2px] bg-[#fff] w-[15px] h-[15px] rounded-full shadow-lg ${isToggled ? "translate-x-[17px]" : "translate-x-[2px]" }`} ></div>
                        </button>
                    </div>
                    <div className='col-span-2'>
                        <p className='text-[12px] text-[#999]'>You can chose to show or hide the interface after a period of inactivity.</p>
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-4p-4 p-4 mt-2 bg-[rgba(0,0,0,0.69)] rounded-xl'>
                    <h1 className='flex items-center text-[16px] text-[#fff]'>Hide After</h1>
                    <div className='flex justify-center items-center'>
                        <input type="number" value={timeHidden} onChange={(e) =>setTimeHidden(e.target.value)} className="w-[50%] text-[#fff] font-bold bg-[rgba(0,0,0,0.2)] outline-none appearance-none py-1 px-2 rounded-md border border-gray-300 number"/>
                        <h1 className='text-[#f3a952] text-[18px] px-4 font-semibold'>sec</h1>
                    </div>
                </div>
                <div onClick={handleChangeHiddenOption} className='grid grid-cols-1 gap-4 px-4 py-1 mt-2 bg-[#c56c06] cursor-pointer rounded-xl'>
                        <h1 className='flex items-center justify-center w-full p-0 text-[16px] text-[#fff]'>Save</h1>
                </div>
        </div>
    );
}

export default TimerHidden;