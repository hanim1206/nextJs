import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react'
import { I_productList,I_stateProps} from '@/components/I_index';
import { useSelector, useDispatch } from 'react-redux';


const BasketProduct = (props: I_productList) => {
    // console.log(props,"props in basket product")
    const PrdItem = styled.li``;
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
            </div>
        </PrdItem>
    )
}
export default BasketProduct;