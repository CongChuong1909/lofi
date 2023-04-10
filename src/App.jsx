import { isMobile } from "react-device-detect";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Loading from "./components/UI/Loading/Loading";
import React, { useState, useEffect } from "react";
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if (isMobile) {
            setShowIcon(true);

            const handleOrientationChange = () => {
                if (window.orientation === 90 || window.orientation === -90) {
                    setShowIcon(false);
                }
            };

            window.addEventListener(
                "orientationchange",
                handleOrientationChange,
            );

            return () => {
                window.removeEventListener(
                    "orientationchange",
                    handleOrientationChange,
                );
            };
        }
    }, []);

    // const handleTouchMove = () => {
    //     setShowIcon(false);
    // };
    console.log(showIcon);
    return (
        <>
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Home />
                    </>
                )}
                {showIcon && (
                    <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-[#333]"
                    >
                        <img
                            width={120}
                            src="/image/rotate.gif"
                            alt="Please rotate your device horizontally"
                        />
                        <h1 className="text-[#ddd]">Please rotate your device horizontally</h1>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
