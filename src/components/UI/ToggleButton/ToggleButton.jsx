import React, { useState } from 'react';

const Toggle = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    props.onToggleModeBg();
  };

  return (
    <div className={`toggle ${isToggled ? 'toggle--active' : ''}`} onClick={handleToggle}>
      <div className="toggle__slider" />
    </div>
  );
};

export default Toggle;