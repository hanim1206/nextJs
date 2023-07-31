import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '../components/common/Header'
type Props = {}

export default function Works({ }: Props) { 
    const age: number = 12;
    console.log(age,'age')
    return (
        <>
            <Header/>
            <div>
                works 페이지입니다
                <br />타입스크립트 테스트
            </div>
        </>
    )
}