import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import HamBtn from '../HamBtn';
import SubMenu from './SubMenu';

type Props = {};
const Register = styled.div`
    background-color:#271247;
    .setCenter{
        display: flex;
        align-items: center;
        height:94px;
        input{
            border: none;
            padding: 0 20px;
            background-color: #17082e65;
            width: 180px;
            height: 60px;
            box-sizing: border-box;
            color: #fff;
            font-size:18px;
            &::placeholder{
            color:#fff;
            font-size:16px;
            line-height:1.2;}
        }
        button{
            display: flex;
            align-items: center;
            gap:10px;
            justify-content:center;
            font-size: 20px;
            line-height: 1.2;
            font-weight: 700;
            width: 250px;
            height:100%;
            background-color:#533288;
            &:last-child{margin-left:10px;background-color:#862991;}
            span{
                font-size: 20px;color:#fff;
            }
        }
    }
`;
const CompanyInfo = styled.div`
    padding: 80px 0; background-color: #F0F0F0;
    .setCenter{
        display: flex;
        justify-content: space-between;
        .left{
            .logoWrap{}
            .txtWrap{
                h4{font-size: 18px;line-height: 1.2;color: #222222;font-weight: 500;margin-top: 20px;}
                p{margin-top: 20px;font-size: 15px;line-height: 1.3;color: #545454;font-weight: 500;}
                span{display: block;margin-top: 30px;color: #545454;font-size: 13px;line-height: 1.3;font-weight: 100;}
                strong{display: block;margin-top: 15px;color: #545454;font-size: 13px;line-height: 1.2;font-weight: 300;}
            }
            .optionWrap{
                margin-top:50px;
                select{
                    border: 1px solid #BDBDBD;font-size: 15px;line-height: 1.2;font-weight: 600 !important;color: #545454;padding: 15px 20px;outline: none;min-width: 205px;background: url(/arrowIcon.svg) no-repeat 95% 50%;appearance: none;
                }
            }
        }
        .right{
            h3{font-size: 20px;font-weight: 700;line-height: 1.2;color: #222222;text-align: right;}
            h2{color: #432178;font-size: 32px;font-weight: 700;line-height: 1.2;margin-top: 20px;text-align: right;}
            p{margin-top: 20px;font-size: 15px;line-height: 1.2;color: #545454;font-weight: 500;text-align: right;}
        }
    }
`;
export default function Footer({ }: Props) { 
    return (
        <footer>
            <Register className="unit">
                <div className="setCenter">
                    <input type="text" placeholder="회사명"/>
                    <input type="text" placeholder="담당자명"/>
                    <input type="text" placeholder="연락처"/>
                    <input type="text" placeholder="이메일"/>
                    <button>
                        <Image
                            width="24"
                            height="24"
                            src="bottomIcon1.svg"
                            alt="Picture of the author"
                        />  
                        <span>방문상담신청</span>
                    </button>
                    <button>
                        <Image
                            width="24"
                            height="24"
                            src="bottomIcon2.svg"
                            alt="Picture of the author"
                        />  
                        <span>견적문의</span>
                    </button>
                </div>
            </Register>
            <CompanyInfo>
                <div className="setCenter">
                    <div className="left">
                        <div className="logoWrap">
                            <Image
                                width="300"
                                height="57"
                                src="/logo_entwiz.png"
                                alt="Picture of the author"
                            />  
                        </div>
                        <div className="txtWrap">
                            <h4>위즈피아는 주식회사 엔트위즈소프트의 웹에이전시 브랜드입니다.</h4>
                            <p>㈜엔트위즈소프트&nbsp;&nbsp;|&nbsp;&nbsp;대표 유철웅&nbsp;&nbsp;|&nbsp;&nbsp;사업자등록번호 113-86-58651&nbsp;&nbsp;|&nbsp;&nbsp;<br/>통신판매업신고번호 113-86-58651</p>
                            <span>주소 : 서울특별시 금천구 가산디지털1로 225, 1016호 ~ 1017호 (가산동, 에이스 가산포휴) <br/>Tel. 1666-7926 Email. agency@entwiz.com</span>
                            <strong>Copyright©2023 ENTWIZ CORP. ALL RIGHTS RESERVED.</strong>
                        </div>
                        <div className="optionWrap">
                            <select name="" id="familySite">
                                <option value="">패밀리사이트</option>
                                <option value="https://www.entwiz.com/">엔트위즈소프트</option>
                            </select>
                        </div>
                    </div>
                    <div className="right">
                        <h3>CUSTOMER CENTER</h3>
                        <h2>Tel. 1666-7926</h2>
                        <p>운영시간 평일 AM 10:00 ~ PM 19:00<br/> 주말, 공휴일 휴무</p>
                    </div>
                </div>
            </CompanyInfo>
        </footer>

    )
}