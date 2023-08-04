import React from 'react'
import Link from 'next/link'
import { useEffect , useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useObserver } from 'mobx-react';
import indexStore from '../modules/indexStore';

type Props = {}

export default function About({ }: Props) { 
    const { numberStore }  = indexStore();

    const onClickIncrease = () => {
        numberStore.increaseAction(3);
    }
    const onClickDecrease = () => {
        numberStore.decreaseAction(2);
    }
    const ChangeMode = styled.div`width: 300px;height: 40px;display: flex;justify-content: center;align-items: center;border: solid 1px blue;border-radius: 10px;overflow: hidden;
        select{width:100%;height: 100%;padding: 0 10px;}
    `;

    const [mode, setMode] = useState('lightMode');
    console.log(mode);

    return useObserver(() => ( 
        <div>
            <p>현재 값: {numberStore.num}</p>
            <button onClick={onClickIncrease}>증가</button>
            <button onClick={onClickDecrease}>감소</button>

            <ChangeMode className='changeMode'>
                <select onChange={(e) => {
                    setMode(e.target.value)
                }}>
                    <option value="lightMode">Light Mode</option>
                    <option value="darkMode">Dark Mode</option>
                </select>
            </ChangeMode>
        </div>
    )
    )
}