import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import HomeBookCafe from './HomeBookCafe';
import HomeLofiCafe from './HomeLofiCafe';
import HomeLofiHome from './HomeLofiHome';
import { changeHidden } from '../../redux/Slices/HiddenSlices';
function Home(props) {
    const scenes = useSelector((state) => state.scenes);
    const [show, setShow] = useState(false);
    const hiddenMode = useSelector((state) => state.hidden);
    const {hidden, time, isHidden} = hiddenMode;
    const dispatch = useDispatch();

  useEffect(() => {
    const handleMouseMove = () => {
      const updateHidden = {
        ...hiddenMode,
        hidden: true,
      }
      dispatch(changeHidden(updateHidden))
  
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const updateHidden = {
          ...hiddenMode,
          hidden: false,
        }
        dispatch(changeHidden(updateHidden))
      }, isHidden ? time*1000 : 99999 );
    };
  
    let timeout = setTimeout(() => {
      handleMouseMove();
    }, isHidden ? time*1000 : 99999);
  
    document.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, [hiddenMode]);
  

    const ScenesChanged = () =>{
        if(scenes.scenes === 'CafeBook'){
            return <HomeBookCafe />;
        }
        else if(scenes.scenes === 'CafeChill')
        {
            return <HomeLofiCafe/>;
        }
        else if(scenes.scenes === 'HomeChill'){
            return <HomeLofiHome/>;
        }
        else{
            return <h1>IS UPDATING</h1>
        }
    }
    useEffect(()=>{
        ScenesChanged();
    }, [scenes.scenes])
    
    return (
        <>
            {ScenesChanged()}
        </>
    );
}

export default Home;