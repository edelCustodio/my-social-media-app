import React, { Dispatch, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserList } from './users/UsersList';
import { useDispatch } from 'react-redux';
import { getUsers } from './store/actions';

function App() {

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <UserList list={[1, 2, 3] as number[]}></UserList>
  );
}

export default App;
