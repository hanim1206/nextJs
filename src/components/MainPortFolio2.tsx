import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';

type Props = {};

export default function MainPortFolio2({ }: Props) { 
    const PortFolio = styled.li`
        width:417px;
        height: 265px;
        overflow: hidden;
    `;
    const TxtWrap = styled.div`
        display: flex;flex-direction:column;
        h4.title{    margin-top: 30px;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 600;
    color: #fff;}
        p.description{margin-top: 15px;color: #fff;font-size: 15px;line-height: 1.2;font-weight: 300;}
    `;
    const ImgWrap = styled.div`
        display:flex;
        justify-content: center;
    `;
    return (
        <PortFolio className='portfolio'>
            <ImgWrap className='imgWrap'>
                <Image
                    width="417"
                    height="265"
                    src="/po8.png"
                    alt="Picture of the author"
                />  
            </ImgWrap>
            <TxtWrap className='txtWrap'>
                <h4 className='title'>음악플러스</h4>
                <p className='description'>PC WEB/MOBILE WEB/HYBRId APP</p>
            </TxtWrap>
        </PortFolio>
    )
}
