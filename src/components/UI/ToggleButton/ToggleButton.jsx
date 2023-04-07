import React, { useState } from 'react';

const Toggle = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    props.onToggleModeBg();
  };

  return (
    <>

        <button className={` relative w-[61px] h-[30px] rounded-full border-none outline-none shadow-xl  ${isToggled ? "bg-[rgba(0,0,0,0.7)]" : "bg-[#f3a952]"}`} onClick={handleToggle} >
                    <div className={`absolute  transition-all ease-linear delay-150 top-[2px] bg-[#fff] w-[25px] h-[25px] rounded-full shadow-lg ${isToggled ? "translate-x-[34px]" : "translate-x-[2px]" }`} ></div>
                    <img className={`absolute top-[6px] w-[17px] h-[17px] bg-[] ${isToggled ? "left-[8px]" : "right-[8px]" }`}
                        src={ isToggled
                                ? "https://app.lofi.co/static/media/day.5accee77369b956360cc75a7d7a5ea33.svg"
                                : "https://app.lofi.co/static/media/night.0e9aec7405cc2f74e26970aeab6cec31.svg"
                        }
                        alt="iconWeather"
                    />
                </button>
    </>
    
  );
};

export default Toggle;