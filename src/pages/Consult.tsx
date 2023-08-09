import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '../components/common/Header';
import Content from '../components/UI/Content'
import Basket from '@/components/common/Basket';

type Props = {}

export default function Consult({ }: Props) { 
    return (
        <>
            <Header></Header>
            <Content>
                <Basket></Basket>
                <div></div>
            </Content>
        </>
    )
}