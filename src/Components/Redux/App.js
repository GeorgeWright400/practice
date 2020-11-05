import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, signin} from './Actions/index';


function Appp() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.islogged);
    const dispatch = useDispatch();
      return (<div>
          <h1>{counter}</h1>
          <button onClick={() => dispatch(increment(5))}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(signin())}>LogIn</button>

          {isLogged ? <p>hey</p>: ''}
          </div>)
}

export default Appp;