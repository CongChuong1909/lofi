
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
function App() {


    return (
        <>
            <Header/>
            <Home />  
        </>
    );
}

export default App;
// import React, { useState, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";

// export default function App() {
//   const [showBox, setShowBox] = useState(false);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setShowBox(true);
//     }, 3000);

//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, []);

//   const handleMouseMove = () => {
//     setShowBox(true);
//   };

//   useEffect(() => {
//     if (showBox) {
//       const timeoutId = setTimeout(() => {
//         setShowBox(false);
//       }, 3000);
//       return () => {
//         clearTimeout(timeoutId);
//       };
//     }
//   }, [showBox]);

//   return (
//     <div className="container" onMouseMove={handleMouseMove}>
//       <CSSTransition
//         in={showBox}
//         timeout={3000}
//         classNames="box"
//         unmountOnExit
//       >
//         <div className="box"></div>
//       </CSSTransition>
//     </div>
//   );
// }