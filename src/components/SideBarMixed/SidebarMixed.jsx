import React, { useState } from 'react';

function SidebarMixed(props) {
    console.log(props.onViewMixed);
    console.log(props.onViewTimer);
    return (
        <>
           <div className='flex flex-col justify-center items-center bg-[rgba(1,1,1,0.7)] rounded-[10px] z-[2] absolute w-10 right-10 bottom-[20%] lg:bottom-[40%] transition_opacity'>
                <i onClick={props.onViewMixed} className=" cursor-pointer text-[#fff] fa-regular fa-sliders px-4 py-4 lg:py-6 text-[14px] lg:text-[18px]"></i>
                <i onClick={props.onViewTimer} className=" cursor-pointer text-[#fff] fa-solid fa-hourglass-half px-4 py-4 lg:py-6 text-[14px] lg:text-[18px]"></i>
                <i onClick={props.onViewScenes } className=" cursor-pointer text-[#fff] fa-sharp fa-solid fa-image px-4 py-4 lg:py-6 text-[14px] lg:text-[18px]"></i>
                <i onClick={props.onViewSetting} className=" cursor-pointer  text-[#fff] fa-solid fa-gears px-4 py-4 lg:py-6 text-[14px] lg:text-[18px]"></i>
                {/* <i class="fa-duotone fa-sliders"></i> */}
                {/* <i class="fa-solid fa-grid-round-2"></i> */}
                {/* <i class="fa-duotone fa-image"></i> */}
           </div>
        </>
    );
}

export default SidebarMixed;