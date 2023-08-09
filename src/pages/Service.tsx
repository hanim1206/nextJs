import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '../components/common/Header'
import Content from '../components/UI/Content'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { I_productList } from '@/components/I_index';
import Product from '../components/Product'
import Basket from '@/components/common/Basket'
interface I_propsVal{
    productList: I_productList[],
}
interface I_props{
    props:I_propsVal
}
export default function Service(props: I_propsVal) { 
    console.log(props, "aaaa")
    const { productList } = props;
    // console.log(productList, "productList")
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
            .txrWrap{
                h3{
                    font-weight:bold;
                }
                span{
                    font-size: 12px;
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
    return (
        <>
            <Header></Header>
            <Content>
                <Basket></Basket>
                <ServicePage>
                    <div className="titleWrap">
                        <h3>샤핑하기</h3>
                        <span>물건을 골라보세요~</span>
                    </div>
                    <PrdList className="shopList">
                        {
                            productList.map((p,idx) => (
                                <Product
                                    key = {productList[idx].key}
                                    id = {productList[idx].key}
                                    name = {productList[idx].name}
                                    desc = {productList[idx].desc}
                                    src = {productList[idx].src}
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
    // console.log(allData,"dididi")
    return allData;
    
}
