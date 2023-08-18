import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '@/components/common/Header'
import Content from '@/components/UI/Content'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { I_productList ,I_stateProps} from '@/components/I_index';
import Product from '@/components/Product'
import Basket from '@/components/common/Basket'
import Popup from '@/components/Popup';
import ReviewList from '@/components/ReviewList';
import WriteReview from '@/components/WriteReview'
import { useSelector, useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation'
interface I_propsVal{
    productList: I_productList[],
}
interface I_props{
    props:I_propsVal,
}
const Detail = (props: I_propsVal) => {
    /**
     * 스타일드 컴포넌트
    */
    const DetailPage = styled.div`
        display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;background-color: #3f3b41;flex-direction: column;
        .imgBox{
            width: 50%;height: 30vw;overflow: hidden;
            img{
                width:100%;height:100%;object-fit: cover;
            }
        }
        .infoBox{
            width: calc(80%);min-height: 10vw;display: flex;flex-direction: column;gap: 10px;background-color: #223055;padding:1vw;border-radius:100% 0 100%;align-items: center;justify-content:center;
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
    const pathname = usePathname();
    console.log(pathname);
    console.log(props,"props")
    const { productList } = props;
    console.log(productList,'productList');
    //product 객체 만들기
    const newPrdMap = {};
    productList.forEach(prd => {
        const newObg = prd;
        console.log(newObg,'newObg');
        console.log(prd,'prd');
        })
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

export const getServerSideProps: GetServerSideProps = async () => {

    const res3 = await fetch('http://localhost:3000/api/productListApi')
    const myData3 = await res3.json();
    const allData:I_props = {
        props : { 
            productList:myData3,
        }
    }
    return allData;
    
}
