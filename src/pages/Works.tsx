import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '../components/common/Header'
import {useSelector , useDispatch} from 'react-redux';
interface I_stateProps{
    counter:number,
}
const Counter = styled.div`
    padding:500px;
    button{
        padding:1rem;
        margin:1rem;
        background-color:orange;
    }
`;
export default function Works() { 

    const dispatch = useDispatch();
    const counter = useSelector((state:I_stateProps) => state.counter);
    const incrementHandler = () => {
    dispatch({ type : 'increment'})  
    }
    const decrementHandler = () => {
    dispatch({ type : 'decrement'})  
    }
    return (
        <>
            <Header/>
            <Counter>
                <div>{counter}</div>
                <button onClick={incrementHandler}>increment</button>
                <button onClick={decrementHandler}>decrement</button>
            </Counter>
            
        </>
    )
}