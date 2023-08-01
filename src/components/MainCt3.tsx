import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import MainPortFolio1 from './MainPortFolio1';
import {I_propsForI_project} from '@/components/I_index';

const Inner = styled.div`
    padding: 130px 0;
    .txtWrap{
        display: flex;flex-direction: column;align-items: center;
        p{
            font-size: 18px;line-height: 1.2;color: #222;font-weight: 400;
        }
        h3{
            margin-top: 20px;font-size: 40px;line-height: 1.2;font-weight: 600;
            span{ color: #ED0282;}
        }
    }
    .portFolioWrap{
        display: flex; flex-wrap: wrap; gap: 10px; margin-top: 60px;
    }
    .btnWrap{
        width: 100%;margin-top: 60px;
        button{color: #432178;font-size: 18px;line-height: 1.2;font-weight: 600;border: 1px solid #A8A8A8;padding: 15px 0;min-width: 256px;border-radius: 60px;background-color: #fff;display: flex;margin: 0 auto;justify-content: center;}
    }
    `;
    //프롭스는 무적건 오브젝트 타입일 것임..
export default function MainCt3(props:I_propsForI_project) { 
    return (
        <Inner className='mainCt3'>
            <div  className='txtWrap'>
                <p>위즈피아는 빠르게, 트렌드하게, 실속있게 프로젝트를 완성합니다!</p>
                <h3><span>위즈피아</span> 포트폴리오를 소개합니다!</h3>
            </div>
            <ul className='portFolioWrap setCenter'>
                {
                    props.data.map((i,idx)=>(
                        <MainPortFolio1  content = {props.data[idx]}  key = {idx}></MainPortFolio1>
                    ))
                }
            </ul>
            <div className='btnWrap'>
                <button>포트폴리오 더보기 &nbsp;<span>+</span></button>
            </div>
        </Inner>
    )
}
