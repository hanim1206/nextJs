import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import Card from './Card';
import { useEffect } from 'react';

type Props = {};
const Inner = styled.div`
    padding: 130px 0;
    background-color: #EBEEF2;
`;
const TxtWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const CardWrap = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 60px;
`;
const Txt1 = styled.p`
    font-size: 18px;
    line-height: 1.2;
    color: #222;
    font-weight: 400;
`;
const Txt2 = styled.h3`
    margin-top: 20px;
    font-size: 40px;
    line-height: 1.2;
    color: #432178;
    font-weight: 600;
    span{
        color: #222;
    }
`;
/** 
 * 인터페이스
 */
interface I_serviceList  {
    number: number;
    title: string;
    desc: string;
    icon: string;
    delay: number;
}
const serviceList: I_serviceList[] = [
    {
        number: 1,
        title: '홈페이지 제작',
        desc: '홈페이지, 반응형 & 적응형 모바일 웹,<br />모바일 엡과 같은 최적화된 제작 서비스를 제공',
        icon:'/article1Img1.svg',
        delay:100,
    },
    {
        number:2,
        title:'쇼핑몰 제작',
        desc:'틀에 박힌 디자인을 벗어나 다양한 트렌드 변화에<br />맞춰 새로운 아이덴티티를 제공',
        icon:'/article1Img2.svg',
        delay:300,
    },
    {
        number:3,
        title:'웹 프로그램 개발',
        desc:'다양한 개발 경험으로 최적의 웹프로그램을 개발,<br /> 안정적이고 지속적인 서비스 제공',
        icon:'/article1Img3.svg',
        delay:500,
    },
] 
export default function MainCt2({ }: Props) { 

    return (
        <Inner className='mainCt2'>
            <TxtWrap data-aos="fade-up">
                <Txt1>위즈피아는 고객의 브랜드 아이덴티티와 비즈니스 경쟁력있는 홈페이지를 만들어 드립니다!</Txt1>
                <Txt2>위즈피아는 이런 <span>제작 서비스</span>를 제공합니다!</Txt2>
            </TxtWrap>
            <CardWrap className='setCenter'>
                {
                    serviceList.map((s,idx) => (
                        <Card content = {serviceList[idx]} key = {idx}></Card>
                    ))
                }
            </CardWrap>

        </Inner>
    )
}
