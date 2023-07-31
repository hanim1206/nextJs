import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import MainPortFolio2 from './MainPortFolio2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
type Props = {};
const Inner = styled.div`
    padding: 130px 0;background-image:url("/back1.png");
`;
const TxtWrap = styled.div`
    display: flex;flex-direction: column;align-items: center;
`;

const IconWrap = styled.ul`
    display: flex;max-width: 1280px;align-items: center;justify-content: space-between;margin: 50px auto 0 auto;border: 1px solid #ffffff64;padding: 45px 65px;border-radius: 200px;
    li{
        display: flex;flex-direction: column;align-items: center;
        svg{
            width: 18px;height: 18px;
            path{
                fill:#fff;
            }
        }
        p{
            font-size: 16px;line-height: 1.2;font-weight: 400;color: #fff;margin-top: 40px;
        }  
    }
`;
const PortfolioWrap = styled.ul`
    display: flex;flex-wrap: wrap;gap: 10px;margin-top: 80px;
`;
const Txt1 = styled.p`
    font-size: 18px;line-height: 1.2;color: #fff;font-weight: 400;
`;
const Txt2 = styled.h3`
    margin-top: 20px;font-size: 40px;line-height: 1.2;font-weight: 600;color:#fff;
    span{
        color: #432178;
    }
`;
export default function MainCt4({ }: Props) { 
    return (
        <Inner className='mainCt4'>
            <TxtWrap>
                <Txt1>쉽고 빠르게 제작해드립니다.</Txt1>
                <Txt2><span>위즈피아</span> 디자인 템플릿을 선택해주세요!</Txt2>
            </TxtWrap>
            <IconWrap className='iconWrap'>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="200" className="aos-init aos-animate">
                            <Image
                                width="55"
                                height="55"
                                src="/icon1.svg"
                                alt="Picture of the author"
                            />  
                            <p>저렴한 비용</p>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="300" className="aos-init aos-animate">
                            <FontAwesomeIcon icon={faAngleRight} /> 
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" className="aos-init aos-animate">
                            <Image
                                width="55"
                                height="55"
                                src="/icon2.svg"
                                alt="Picture of the author"
                            />
                            <p>빠른 제작기간</p>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="500" className="aos-init aos-animate">
                            <FontAwesomeIcon icon={faAngleRight} /> 
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="600" className="aos-init aos-animate">
                            <Image
                                width="55"
                                height="55"
                                src="/icon3.svg"
                                alt="Picture of the author"
                            />
                            <p>반응형 무료제작</p>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="700" className="aos-init aos-animate">
                            <FontAwesomeIcon icon={faAngleRight} /> 
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="800" className="aos-init aos-animate">
                            <Image
                                width="55"
                                height="55"
                                src="/icon4.svg"
                                alt="Picture of the author"
                            />  
                            <p>서브페이지 무료</p>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="900" className="aos-init aos-animate">
                            <FontAwesomeIcon icon={faAngleRight} /> 
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="1000" className="aos-init aos-animate">
                            <Image
                                width="55"
                                height="55"
                                src="/icon5.svg"
                                alt="Picture of the author"
                            />  
                            <p>관리자모드 제공</p>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="1100" className="aos-init aos-animate">
                            <FontAwesomeIcon icon={faAngleRight} /> 
                        </li>
                        <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="1200" className="aos-init aos-animate">
                            <Image
                                width="55"
                                height="55"
                                src="/icon6.svg"
                                alt="Picture of the author"
                            />  
                            <p>통계 분석기능</p>
                        </li>
            </IconWrap>
            <PortfolioWrap className='portFolioWrap setCenter'>
                <MainPortFolio2></MainPortFolio2>
                <MainPortFolio2></MainPortFolio2>
                <MainPortFolio2></MainPortFolio2>
                <MainPortFolio2></MainPortFolio2>
                <MainPortFolio2></MainPortFolio2>
                <MainPortFolio2></MainPortFolio2>
                <MainPortFolio2></MainPortFolio2>
                <MainPortFolio2></MainPortFolio2>
            </PortfolioWrap>
        </Inner>
    )
}
