import React from 'react';
import useToggle from './hooks/useToogle';

function Toggler() {


    const [isHappy, setIsHappy] = useToggle(true);
    const [isBroken, setIsBroken] = useToggle(false);
    
    

    return (
        <div>
           <h1 onClick={setIsHappy}>
           {isHappy ? "YEEEEEE" : "NOOOOOOOO"}    
           </h1>

            <h1 onClick={setIsBroken}>
           {isBroken ? "Yes it is." : "No it is not moron."}    
           </h1>  
        </div>
    )
}

export default Toggler;
