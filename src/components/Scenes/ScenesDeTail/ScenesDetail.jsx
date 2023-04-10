import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeScenes } from "../../../redux/Slices/ScenesSlices";
function ScenesDetail(props) {
    const {imageDetail} = props.items;
    const scenesMode = useSelector((state) => state.scenes);
    const {scenes, positionScenes} = scenesMode;  
    const dispatch = useDispatch();

    const handleChangeScenesIn = () =>{
        if(imageDetail.name === 'CafeBook'){
            const updateScenes = {
                scenes: 'CafeBook',
                positionScenes: 'inside',
            }
            dispatch(changeScenes(updateScenes))
        }
        if(imageDetail.name === 'CafeChill'){
            const updateScenes = {
                scenes: 'CafeChill',
                positionScenes: 'inside',
            }
            dispatch(changeScenes(updateScenes))
        }
        if(imageDetail.name === 'HomeChill'){
            const updateScenes = {
                scenes: 'HomeChill',
                positionScenes: 'inside',
            }
            dispatch(changeScenes(updateScenes))
        }
        else{
            return;
        }
    }
    const handleChangeScenesOut = () =>{
        if(imageDetail.name === 'CafeBook'){
            const updateScenes = {
                scenes: 'CafeBook',
                positionScenes: 'outside',
            }
            dispatch(changeScenes(updateScenes))
        }
        if(imageDetail.name === 'CafeChill'){
            const updateScenes = {
                scenes: 'CafeChill',
                positionScenes: 'outside',
            }
            dispatch(changeScenes(updateScenes))
        }
        if(imageDetail.name === 'HomeChill'){
            const updateScenes = {
                scenes: 'HomeChill',
                positionScenes: 'outside',
            }
            dispatch(changeScenes(updateScenes))
        }
        else{
            return;
        }
    }

    return (
        <div className={`${props.viewScenes ? 'scenes ': ''}  backdrop-filter w-[20%] h-[60%] right-[6%] top-[20%] absolute z-10 scroll-div noise`}>
            <div onClick={()=>props.onCloseScenesDetail()} className='flex justify-start items-center text-[#ddd] w-[50%]  cursor-pointer p-4'>
                <i  className="fa-solid fa-chevron-left mr-1"></i>
                <h2 className='text-[18px]'>Switch Scenes</h2>
            </div>

            
           {imageDetail.imgDetail1 && <div className='p-2 cursor-pointer'>
                                            <div onClick={handleChangeScenesIn} className={`p-2 ${positionScenes === "outside"? 'border-[#f3a952]' : 'border-[#999]'} border-2  rounded-lg`}>
                                                <img src={imageDetail.imgDetail1} alt="" />
                                            </div>
                                        </div>} 
           {imageDetail.imgDetail2 && <div className='p-2 cursor-pointer'>
                                            <div onClick={handleChangeScenesOut} className={`p-2 ${positionScenes === "inside"? 'border-[#f3a952]' : 'border-[#999]'} border-2 border-[#999] opacity-[0.8]  rounded-lg`}>
                                                <img src={imageDetail.imgDetail2} alt="" />
                                            </div> 
                                        </div>}
        </div>
    );
}

export default ScenesDetail;