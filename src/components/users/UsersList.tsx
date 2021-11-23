

import React, { useEffect, useState } from "react";


export interface IUserListProps {
    list: number[]
}


export const UserList = () => {

    const [counter, setCounter] = useState(0);

    
    

    useEffect(() => {
        console.log(`mount`);
        return () => {
            console.log('Unmount');
        }
    }, [counter]);

    const increment = () => {
        setCounter(counter + 1);
    }

    return (<>
        <button onClick={() => increment() } >Increment</button>
        <h1>This is the user list {counter}</h1>
    </>);
}
