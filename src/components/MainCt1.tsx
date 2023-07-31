import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import SliderWrapMainCt1 from './SliderWrapMainCt1';
/**
 * 스타일드 컴포넌트
*/
const Inner = styled.div`
    padding-top:82px;
`;
export default function MainCt1() { 
    return (
        <Inner className='mainCt1'>
            <SliderWrapMainCt1></SliderWrapMainCt1>
        </Inner>
    )
}
