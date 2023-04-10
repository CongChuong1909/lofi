
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Loading from "./components/UI/Loading/Loading";
import React, { useState, useEffect } from 'react';
function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
          }, 2000);
      },[]);

      
    return (
        <>
            {isLoading ? <Loading/>: 
                <>
                    <Header/>
                    <Home />  
                </>
            }
            
        </>
    );
}

export default App;

