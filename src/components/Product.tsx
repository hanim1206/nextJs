import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react'
import { I_productList,I_stateProps} from '@/components/I_index';
import { useSelector, useDispatch } from 'react-redux';

interface addFunc extends I_productList{
    handlePopup : Function
}
const Product = (props:addFunc) => {
    const PrdItem = styled.li``;
    // 
    const [addBasket, setAddBasket] = useState([]);
    // 
    const dispatch = useDispatch();
    const prdList = useSelector((state: I_stateProps) => state);
    const basketHandler = () => {
        dispatch(
            {
                type : 'add',
                item : props
            }
        );
        // console.log(prdList,'prdList')
    }
    return (
        <PrdItem className='product'>
            <div className="imgWrap">
                <Image
                    width='100'
                    height='100'
                    src={props.src}
                    alt='비버1'
                ></Image>
            </div>
            <div className="txtWrap">
                <h3>{props.name}</h3>
                <span>{props.desc}</span>
            </div>
            <div className="btnWrap">
                <button onClick={()=>{
                    basketHandler();
                    props.handlePopup();
                }}>장바구니에 넣기</button>
            </div>
        </PrdItem>
    )
}
export default Product;