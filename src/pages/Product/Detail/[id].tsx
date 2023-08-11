import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '@/components/common/Header'
import Content from '@/components/UI/Content'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { I_productList } from '@/components/I_index';
import Product from '@/components/Product'
import Basket from '@/components/common/Basket'
import Popup from '@/components/Popup';
import ReviewList from '@/components/ReviewList';

const Detail = () => {
    /**
     * 스타일드 컴포넌트
    */
    const DetailPage = styled.div`
        display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;background-color: #120914;flex-direction: column;
        .imgBox{
            width: 50%;height: 30vw;overflow: hidden;
            img{
                width:100%;height:100%;object-fit: cover;
            }
        }
        .infoBox{
            width: calc(50%);height: 30vw;display: flex;flex-direction: column;gap: 10px;background-color: #223055;padding:1vw;border-radius:50% 0 50%;justify-content: center;align-items: start;
            h3{
                font-size: 18px;font-weight: bold;color: #fff;
            }
            span{
                font-size: 14px;color: #fff;
            }
        }
        .reviewWriteBox{
            width: 50%;min-height:30vw;background-color: #223055;padding:2vw;display: flex;flex-direction: column;justify-content: space-between;border-radius: 0 50%;
            h4{
                font-size: 21px;color: #fff;margin-top: 50px;text-align:end;
            }
            form{
                background-color: #2d3bbd;border-top: solid 5px #000;
                label{
                    display: flex;flex-direction: column;gap: 10px;
                    input{
                        border: solid 1px #000;background-color: transparent;border: none;color: #fff;
                        &:focus{outline:none}
                        &::placeholder{
                            color:rgba(255, 255, 255, 0.3);font-size: 14px;letter-spacing: 2px;
                        }
                    }
                    textarea{
                        border: none;background-color: transparent;height: 200px;border-top:solid 1px #000;color: #fff;
                        &:focus{outline:none}
                        &::placeholder{
                            font-size: 14px;color:rgba(255, 255, 255, 0.3);letter-spacing: 2px;
                        }
                    }
                }
                .btnWrap{
                    width: 100%;display: flex;justify-content: flex-end;
                    button{
                        width: 100px;height:20px;background-color: #85e437;padding: 0px;border-top: solid 1px #000;color: #223055;font-weight: bold;font-size: 14px;
                    }
                }
            }
        }
    `;
    return (
        <>
            <Header></Header>
            <Content>
                <DetailPage>
                    <div className="imgBox">
                        <Image
                            width='400'
                            height='400'
                            src= '/비버2.jpg'
                            alt='비버1'
                        ></Image>
                    </div>
                    <div className="infoBox">
                        <h3>상품명</h3>
                        <span> 상품을 소개하는 글</span>
                    </div>
                    <div className="reviewWriteBox">
                        <h4>review</h4>
                        <form>
                            <label htmlFor="">
                                <input type="text" name='title' placeholder='제목을 입력해주세요.'/>
                            </label>
                            <label htmlFor="">
                                <textarea name="content" placeholder='내용을 입력해주세요.'></textarea>
                            </label>
                            <div className="btnWrap">
                                <button type='submit'>작성하기</button>
                            </div>
                        </form>
                    </div>
                    <ReviewList></ReviewList>
                </DetailPage>
            </Content>
        </>
    )
}
export default Detail;