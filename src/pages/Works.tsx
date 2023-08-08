import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '../components/common/Header'
import {useSelector , useDispatch} from 'react-redux';
interface I_statePropsTheme {
    theme:string
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
    // const dispatch = useDispatch();
    const theme = useSelector((state: I_statePropsTheme) => state.theme);
    console.log(theme)
    // const themeHandler = () => {
    //     if (theme === 'lightMode')
    //     {
    //         dispatch({ type: 'dark' });
    //     }
    //     else if(theme === 'darkMode')
    //     {
    //         dispatch({ type: 'light' });
    //     }
    // }
    // console.log('hahahaha')
    return (
        <>
            <Header/>
            <Counter>
                <div>theme : </div>
                <button>change mode</button>
            </Counter>
            
        </>
    )
}