

import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTitle } from "../../store/actions/appActions";


export interface IUserListProps {
    list: number[]
}


export const UserList = () => {

    const [counter, setCounter] = useState(0);

    const dispatch: Dispatch<any> = useDispatch();

    
    

    useEffect(() => {
        console.log(`mount`);
        return () => {
            console.log('Unmount');
        }
    }, [counter]);

    useEffect(() => {
        dispatch(changeTitle('Users'));
    }, [dispatch]);

    const increment = () => {
        setCounter(counter + 1);
    }

    return (<>
        <button onClick={() => increment() } >Increment</button>
        <h1>This is the user list {counter}</h1>
    </>);
}
