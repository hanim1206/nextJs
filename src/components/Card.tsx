import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';

/**
 * .인터페이스
*/
interface I_serviceList  {
    number: number;
    title: string;
    desc: string;
    icon: string;
    delay: number;
}
interface I_cardProp {
    content : I_serviceList
}
export default function Card(props : I_cardProp) { 
    const Card = styled.div`
        width:calc(100% / 3);
        padding: 50px 0;
        background-color: #fff;
    `;
    const TxtWrap = styled.div`
        display: flex;flex-direction:column;align-items:center;text-align:center;
        span.num{font-size: 24px;line-height: 1.2;font-weight: 600;color: #B5B5B5;}
        span.title{margin-top: 10px;font-size: 22px;line-height: 1.2;font-weight: 600;color: #222;}
        p.description{margin-top: 20px;color: #000;font-size: 17px;line-height: 1.2;font-weight: 300;}
    `;
    const ImgWrap = styled.div`
        display:flex;justify-content: center;margin-top:55px;
    `;
    return (
        <Card data-aos="zoom-in" data-aos-delay={`${props.content.delay}`} data-aos-duration='600'>
            <TxtWrap className='txtWrap'>
                <span className='num'>{props.content.number}</span>
                <span className='title'>{props.content.title}</span>
                <p className='description' dangerouslySetInnerHTML={{__html : props.content.desc}}></p>
            </TxtWrap>
            <ImgWrap>
                <Image
                    width="100"
                    height="100"
                    src={`${props.content.icon}`}
                    alt="Picture of the author"
                />  
            </ImgWrap>
        </Card>
    )
}
