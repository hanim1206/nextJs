import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '../components/common/Header'
import { useSelector, useDispatch } from 'react-redux';
import { I_stateProps } from '@/components/I_index'
const Content = styled.div`
    padding:100px;
    div.themeBox{
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 1rem;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: solid 1px #000;
        min-height: 50vw;
        p{
            color: #000;
            margin:1rem;
            font-weight: bold;
        }
        button{
            padding:1rem;
            margin:1rem;
            border-radius: 1rem;
            border:solid 1px #000;
        }
        //theme version
        &.lightMode{}
        &.darkMode{
            background-color: #000;
            p{color:#fff}
            button{color:#fff;border-color:#fff;}
        }
    }
`;
export default function Works() {
    const dispatch = useDispatch();
    const theme = useSelector((state: I_stateProps) => state['themeReducer'].theme);
    const themeHandler = () => {
        if (theme === 'lightMode')
        {
            dispatch({ type: 'dark' });
            console.log(theme);
        }
        else if(theme === 'darkMode')
        {
            dispatch({ type: 'light' });
            console.log(theme);
        }
    }
    return (
        <>
            <Header />
            <Content>
                <div className={`themeBox ${theme}`}>
                    <p>Theme : {theme}</p>
                    <button onClick={themeHandler}>change mode</button>
                </div>
            </Content>

            
        </>
    )
}