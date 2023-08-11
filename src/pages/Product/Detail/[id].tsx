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
import WriteReview from '@/components/WriteReview'

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
                    <WriteReview></WriteReview>
                    <ReviewList></ReviewList>
                </DetailPage>
            </Content>
        </>
    )
}
export default Detail;