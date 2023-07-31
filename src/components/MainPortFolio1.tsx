import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
/**
 * 인터페이스
 */

interface I_project{
    img: string;
    title: string;
    desc: string;
    delay: number;
}
interface I_MainPortFolio1{
    content: I_project;
}

export default function MainPortFolio1(props : I_MainPortFolio1) { 
    // console.log(props.content, "content");
    const PortFolio = styled.li`
        width:calc((100% / 4) - 30px);
        padding: 50px 0;
        background-color: #fff;
    `;
    const TxtWrap = styled.div`
        display: flex;flex-direction:column;
        h4.title{text-align: left;margin-top: 30px;font-size: 18px;line-height: 1.2;color: #222;}
        p.description{margin-top: 20px;color: #000;font-size: 17px;line-height: 1.2;font-weight: 300;}
    `;
    const ImgWrap = styled.div`
        display:flex;
        justify-content: center;
        margin-top:55px;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(14){
            margin-top: 0;
        }
    `;
    return (
        <PortFolio className='portfolio'  data-aos="fade-up"  data-aos-delay={props.content.delay} >
            <ImgWrap>
                <Image
                    width="312"
                    height="272"
                    src={props.content.img}
                    alt="Picture of the author"
                /> 
            </ImgWrap>
            <TxtWrap className='txtWrap'>
                <h4 className='title'>{props.content.title}</h4>
                <p className='description'>{props.content.desc}</p>
            </TxtWrap>
        </PortFolio>
    )
}
