import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AppDispatch, RootState } from "../state/store"
import { increment, decrement, incrementByAmount, incrementAsync } from '../state/counter/counterSlice'


const Counter = () => {
    // RootState from Store.ts
    const count = useSelector((state: RootState) => state.counter.value) 
    // Connect to dispatch, use AppDispatch type as well which is required for Asynchronous actions
    const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
        <h2>
            {count}
        </h2>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(incrementByAmount(10))}>Increment by amount</button>
            <button onClick={()=> dispatch(incrementAsync(10))}>Increment by amount Async</button>
        </div>
        
    </div>
  )
}

export default Counter