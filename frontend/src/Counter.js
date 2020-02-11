import React, {useState, useEffect} from "react";

const Counter = () => {

    const [number, setNumber] = useState(1);

    useEffect(() => {
        //리렌더될 때 실행됨 
        console.log("rendering,,,,,,,,,,,,,,", number);
    })
    const increase = () => {
        setNumber(number + 1 );
    }

    const decrease = () => {
        setNumber(number - 1 );
    }
    
    return <>{number} 입니다
    <button onClick={increase}> + </button>
    <button onClick={decrease}> - </button>
    </>
};

export default Counter;