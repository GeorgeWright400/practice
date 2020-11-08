import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, signin, additem } from './Actions/index';



function Appp() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.islogged);
    const toDo = useSelector(state => state.todo);
    const dispatch = useDispatch();
      return (<div>
          <h1>{counter}</h1>
          <button onClick={() => dispatch(increment(5))}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(signin())}>LogIn</button>
          <button onClick={() => dispatch(additem())}>Add To Do List</button>

          {isLogged ? <p>hey</p>: ''}
          {toDo ? <h1>Turned On</h1>: ''}




          </div>)
}

export default Appp;