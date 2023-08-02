import React from 'react'
import Link from 'next/link'
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

    return useObserver(() => (
        <div>
            <p>현재 값: {numberStore.num}</p>

            <button onClick={onClickIncrease}>증가</button>
            <button onClick={onClickDecrease}>감소</button>
        </div>
    )
    )
}