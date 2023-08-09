import React ,{useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import { I_productList ,I_stateProps,I_basketItem} from '@/components/I_index';
import { useSelector, useDispatch } from 'react-redux';
import BasketProduct from '../BasketProduct'
import { spawn } from 'child_process';

const Basket = (props:I_productList) => {
    const BasketWrap = styled.div`

        .btnWrap{
            width: 110px;
            position: fixed;
            padding: 10px;
            button{
                width: 100%;
                height: 80px;
                box-sizing: border-box;
                background-color: orange;
                padding: 1rem;
                line-height: 1.2;
                color: #fff;
                font-weight: bold;
                border-radius: 10px;
                &:nth-child(2){
                    margin-top: 10px;
                    border: solid 1px #fff;
                    background-color: #2b2b2b;
                }
            }
        }
        .basketArea{
            background-color: #2b2b2b;
                border-radius: 10px;
                padding: 1vw;
                box-sizing: border-box;
                min-height: 200px;
                display: flex;
                justify-content: flex-end;
            .isEmpty{
                display: flex;
                width: 100%;
                height:100%;
                min-height: 200px;
                align-items: center;
                justify-content: center;
                span{
                    color: #fff;
                }
            }
            ul{
                display:flex;
                flex-wrap:wrap;
                width: calc(100% - 100px);
                gap: 2vw;

                li{
                    background-color: #2b2b2b;
                    border:solid 1px #fff;
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
                            color: #fff;
                        }
                        text-align: center;
                    }
                }
            }
        }
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
    console.log(result.length,'result')
    const BasketArea = (<div className="basketArea">
                            {result.length > 0 ? 
                            (
                                <ul>
                                    { result}
                                </ul>
                            ) 
                            :
                            (
                                <div className="isEmpty">
                                    <span>~ E m p t y ~</span>
                                </div>
                            )}
                            
                        </div>);
    //useState
    const [isBasketOpen,setIsBasketOpen] = useState(true);
    const toggleBasket =()=>{
        if(isBasketOpen)
        {
            setIsBasketOpen(false);
        }
        else
        {
            setIsBasketOpen(true);
        }
    }
    //
    const dispatch = useDispatch();
    const basketHandler = () => {
        dispatch(
            {
                type : 'removeAll',
            }
        );
    }
    return (
        <BasketWrap>
            <div className="btnWrap">
                <button onClick={()=>{toggleBasket()}}>
                    {
                        isBasketOpen ? '장바구니 접기' : '장바구니 보기'
                    }
                </button>
                {
                    isBasketOpen ? (<button onClick={basketHandler}>
                        장바구니 비우기
                    </button>)
                    : ''
                }

            </div>
            {
                isBasketOpen ? BasketArea : ''
            }
        </BasketWrap>
    )
}
export default Basket;