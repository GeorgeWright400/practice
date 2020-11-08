import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, signin, additem } from './Actions/index';
import ReduxPlay from "./ReduxPlay/ReduxPlay";

const MakeList = (list) => {
  return (<ul>
    {list.map((item) =>{
      return <li>{item}</li>
    }
    )}
  </ul>)
}



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

          <ReduxPlay/>
          <div>{MakeList(toDo)}</div>



          </div>)
}

export default Appp;