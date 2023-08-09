import React ,{useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import { I_productList ,I_stateProps,I_basketItem} from '@/components/I_index';
import { useSelector, useDispatch } from 'react-redux';
import BasketProduct from '../BasketProduct'

const Basket = (props:I_productList) => {
    const BasketWrap = styled.div`
        
    `;
    // const dispatch = useDispatch();
    const addedPrdList: {
        [key: string] : I_basketItem
    }[] = useSelector((state: I_stateProps) => state.basketReducer.prdList);
    console.log(addedPrdList, "addedPrdList!!!!!!!!!!!!");
    //저장된 상품 이름 뽑기
    const addedPrdTitle:string[] = [];
    addedPrdList.forEach(i => {
        addedPrdTitle.push(...Object.keys(i));
    });
    //
    const result = addedPrdTitle.map((i,idx) => {
        return <BasketProduct
            key={idx}
            id = {idx}
            name = {addedPrdList[idx][i].itemInfo.name}
            desc = {addedPrdList[idx][i].itemInfo.desc}
            src = {addedPrdList[idx][i].itemInfo.src}
        ></BasketProduct>
    })
    
    return (
        <BasketWrap>
            <button>장바구니 보기</button>
            {
                <div className="basketArea">
                    <ul>
                        {result}
                    </ul>
                </div>
            }
        </BasketWrap>
    )
}
export default Basket;