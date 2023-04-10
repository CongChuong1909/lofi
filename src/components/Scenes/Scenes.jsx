import React, { useState } from 'react';
import { DataVideo } from '../../Data/DataVideo';
import ScenesDetail from './ScenesDeTail/ScenesDetail';
import {useSelector } from "react-redux";
function Scenes(props) {
    const [viewDetail, setViewDetail] = useState(false);
    const [dataDetail, setDataDetail] = useState(null);

    const scenesMode = useSelector((state) => state.scenes);
    const {scenes, positionScenes} = scenesMode; 


    return (
        <>
        {!viewDetail && <div className={`${props.scenesView ? 'opacity-1' : 'opacity-0 translate-x-[200%] z-0'}  backdrop-filter w-[20%] h-[80%] right-[6%] top-[10%] absolute z-10 scroll-div noise transition-opacity transition_opacity`}>
            <div className='flex justify-between items-center pt-4 px-4 font-bold text-[#ddd]'>
                <h1 className='font-bold text-[#ddd] text-[20px] '>Scenes</h1>
                <i onClick={props.onCloseScenes} className="p-2 cursor-pointer fa-light fa-xmark"></i>
            </div>
                { DataVideo.map((item, index)=>{
                    
                        return (
                            <div key={index} className='p-2 '>
                                <div className={`p-2 border-[3px] ${item.name === 'CafeBook' && scenes === 'CafeBook'? ' border-[#f3a952] ':item.name === 'CafeChill'&& scenes === 'CafeChill' ? ' border-[#f3a952] ': item.name === 'HomeChill' && scenes === 'HomeChill' ? ' border-[#f3a952] ' : 'border-[#999]'}  rounded-lg cursor-pointer opacity-[1]`}>
                                    <img src={item.imgMainVideo} alt="" onClick={()=>{setViewDetail(true), setDataDetail(item.detailVideo);}} />
                                </div>
                            </div> 
                        )
                })}

                       
            <div/>
        </div>}
        {viewDetail &&  <ScenesDetail items = {dataDetail} onCloseScenesDetail = {()=>setViewDetail(false)} />}
        </>
    );
}

export default Scenes;