import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '../components/common/Header'
import Content from '../components/UI/Content'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { I_productList } from '@/components/I_index';
import Product from '../components/Product'
import Basket from '@/components/common/Basket'
import Popup from '@/components/Popup';


interface I_propsVal{
    productList: I_productList[],
}
interface I_props{
    props:I_propsVal
}
export default function Cart(props: I_propsVal) { 
    const { productList } = props;
    /**
     * 서타일드 컴포넌트
     */
    const ServicePage = styled.div`
        .titleWrap{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4vw 0;
            gap: 20px;
            line-height: 1.5;
            text-align: center;
            h3{
                font-size: 30px;
                font-weight: bold;
            }
            span{
                font-size: 16px;
            }
        }
    `;
    const PrdList = styled.ul`
        display: flex;
        flex-wrap:wrap;
        width: 100%;
        gap: 2vw;
        li{
            border:solid 1px #2b2b2b;
            width: calc(25% - 1.5vw);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            padding: 2vw;
            gap: 20px;
            .imgWrap{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                    height:100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
            .txtWrap{
                h3{
                    font-weight:bold;
                }
                span{
                    font-size: 12px;
                    line-height: 1.5;
                }
                text-align: center;
            }
            .btnWrap{
                button{
                    padding: 1rem;
                    background-color: #2b2b2b;
                    color: #fff;
                    border-radius: 10px;
                    font-size: 14px;
                }
            }
        }
    `;
    const [isPopupOpen,setIsPopupOpen] = useState(false);
    const handlePopup = () => {
        console.log('팝업')
        isPopupOpen ? setIsPopupOpen(false) : setIsPopupOpen(true);
    }
    return (
        <>
            {
                isPopupOpen ? (<Popup handlePopup = {handlePopup}>
                    <div className='txtWrap'>
                        상품이 잘 담겼습니다.
                    </div>
                </Popup>) : ''
            }
            <Header></Header>
            <Content>
            
                <Basket ></Basket>
                <ServicePage>
                    <div className="titleWrap">
                        <h3>New Arrival</h3>
                        <span>이번달에 들어온 신상 아이템들입니다. <br/> 가장 소중한 사람에게 선물하세요~</span>
                    </div>
                    <PrdList className="shopList">
                        {
                            productList.map((p,idx) => (
                                <Product
                                    key = {productList[idx].key}
                                    id = {productList[idx].id}
                                    name = {productList[idx].name}
                                    desc = {productList[idx].desc}
                                    src = {productList[idx].src}
                                    handlePopup = {handlePopup}
                                ></Product>
                        ))  
                        }
                    </PrdList>
                </ServicePage> 
            </Content>
        </>
    )
}
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
