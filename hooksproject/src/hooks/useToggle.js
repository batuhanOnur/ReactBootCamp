import {useState} from 'react';

function useToggle(initialVal = false) {
    //call useState
    const [state,setState] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    };
    // return pieace of state
    return [state, toggle];
}

export default useToggle;