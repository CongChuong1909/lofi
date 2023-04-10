import React from 'react';

function TimerSetting(props) {
    console.log(props.timerView);
    return (
        <div className={`${props.timerView ? 'opacity-1' : 'opacity-0 translate-x-[200%] z-0'}  backdrop-filter w-[23%] h-[40%] right-[6%] top-[30%] absolute z-10 transition_opacity`}>
           <div className='flex justify-between items-center pt-4 px-4 font-bold text-[#ddd]'>
                <h1 className='font-bold text-[#ddd] text-[18px] '>Timer</h1>
                <i onClick={props.onCloseTimer} className="p-2 cursor-pointer fa-light fa-xmark"></i>
            </div>
            <div className='p-2'>
                <div className='p-2 bg-[rgba(0,0,0,0.69)] rounded-xl'>
                    <p className='text-[#999] text-[14px]'><span className='text-[#f3a952]'>* Note:</span> control your study and work time more effectively</p>
                </div>
            </div>
        
                
                <div className='px-2 pb-1'>
                    <div className='grid grid-cols-7 bg-[rgba(0,0,0,0.69)] rounded-xl p-2'>
                            <h1 className=' col-span-3 text-[#aaa] pr-2 flex items-center'>Working Time: </h1>
                            <div className='col-span-2 flex items-center'>
                                <input type="number" className="w-[60%] text-[#fff] font-bold bg-[rgba(0,0,0,0.2)] outline-none appearance-none py-1 px-2 rounded-md border border-gray-300 number"/>
                                <h1 className='text-[#f3a952] text-[18px] pl-1 pr-4 font-semibold'>h</h1>
                            </div>
                            <div className='col-span-2 flex items-center'>
                                <input type="number" className="w-[60%] text-[#fff] font-bold bg-[rgba(0,0,0,0.2)] outline-none appearance-none py-1 px-2 rounded-md border border-gray-300 number"/>
                                <h1 className='text-[#f3a952] text-[18px] pl-1 pr-4 font-semibold'>m</h1>
                            </div>
                    </div>
                </div>
                <div className='px-2'>
                    <div className='grid grid-cols-7 bg-[rgba(0,0,0,0.69)] rounded-xl p-2'>
                            <h1 className=' col-span-3 text-[#aaa] pr-2 flex items-center'>Time to relax: </h1>
                            <div className='col-span-2 flex items-center'>
                                <input type="number" className="w-[60%] text-[#fff] font-bold bg-[rgba(0,0,0,0.2)] outline-none appearance-none py-1 px-2 rounded-md border border-gray-300 number"/>
                                <h1 className='text-[#f3a952] text-[18px] pl-1 pr-4 font-semibold'>h</h1>
                            </div>
                            <div className='col-span-2 flex items-center'>
                                <input type="number" className="w-[60%] text-[#fff] font-bold bg-[rgba(0,0,0,0.2)] outline-none appearance-none py-1 px-2 rounded-md border border-gray-300 number"/>
                                <h1 className='text-[#f3a952] text-[18px] pl-1 pr-4 font-semibold'>m</h1>
                            </div>
                            
                    </div>
                </div>
                <div className="p-2">
                <div className='grid grid-cols-1 gap-4 px-4 py-1 mt-2 bg-[#c56c06] cursor-pointer rounded-xl'>
                    <h1 className='flex items-center justify-center w-full p-0 text-[16px] text-[#fff]'>Start</h1>
                </div>
                </div>
        </div>
    );
}

export default TimerSetting;