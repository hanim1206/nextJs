import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import MainPortFolio2 from './MainPortFolio2';

type Props = {};
const Inner = styled.div`
    background-image:url("/banner1.png");background-position: center;background-size: cover;background-repeat: no-repeat;overflow-x: hidden;-webkit-box-sizing: border-box;box-sizing: border-box;
    .filter{
        width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.3);
        .setCenter{
            padding: 130px 0;display: flex;justify-content: space-between;
            .txtWrap{
                display: flex;flex-direction: column;align-items: start;
                img{margin-top:30px}
                h4{font-size: 40px;font-weight: 500;line-height: 1.4;color: #fff;
                    span{
                        display: block;
                        &.purple{
                            color: #432178;
                        }
                    }
                }
            }
            ul.customWrap{

                li{
                    padding: 30px 35px;background-color: #fff;border: 1px solid #AAA3B5;width: 420px;
                    &:not(:first-child){margin-top:20px}
                    h5.title{font-size: 20px;line-height: 1.2;font-weight: 700;color: #222;}
                    p.description{margin-top: 10px;font-size: 16px;line-height: 1.2;font-weight: 300;color: #000;}
                }
            }
        }
    }
`;

export default function MainCt5({ }: Props) { 
    return (
        <Inner className='MainCt5'>
            <div className="filter">
                <div className='setCenter'>
                    <div className='txtWrap' >
                        <h4>
                            <span data-aos="fade-right" data-aos-duration="400" data-aos-delay="200">
                                고객의 신뢰와 만족을 최우선으로<br />제작 서비스를 제공하는<br />
                            </span>
                            <span className='purple'data-aos="fade-right" data-aos-duration="400" data-aos-delay="400">
                            웹에이전시, 위즈피아입니다.
                            </span>
                        </h4>
                        <div data-aos="fade-right" data-aos-duration="400" data-aos-delay="600">
                            <Image
                                    width="55"
                                    height="55"
                                    src="arrowIcon2.svg"
                                    alt="Picture of the author"
                                />  
                        </div>
                    </div>
                    <div className="right aos-init aos-animate" data-aos="fade-left" data-aos-duration="800" data-aos-delay="1000">
                        <ul className='customWrap' >
                            <li>
                                <h5 className='title'>IHQ샵 PC 쇼핑몰 구축</h5>
                                <p className='description'>고객사명 : ㈜아이에이치큐</p>
                            </li>
                            <li>
                                <h5 className='title'>IHQ샵 PC 쇼핑몰 구축</h5>
                                <p className='description'>고객사명 : ㈜아이에이치큐</p>
                            </li>
                            <li>
                                <h5 className='title'>IHQ샵 PC 쇼핑몰 구축</h5>
                                <p className='description'>고객사명 : ㈜아이에이치큐</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Inner>
    )
}
