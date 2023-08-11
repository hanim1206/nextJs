import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import SingleReview from './SingleReview'
import { useSelector, useDispatch } from 'react-redux';
import { I_productList,I_stateProps,I_singleReview} from '@/components/I_index';

const ReviewList = () => {
    const ReviewBox = styled.div`
        width: 50%;height:50vw;background-color: #dbe9d1;
        ul{
            position: relative;height: 100%;
            li{
                transition:all 0.3s;
                .title{
                    height: 20px;border-bottom: solid 1px #000;display: flex;flex-direction: column;justify-content: center;background-color: #85e437;
                }
                .content{
                    word-break: break-all;padding-left: 30px;height: 32px;
                }
                &.on{
                    position: absolute;top: 0;z-index: 1;width: 100%;background-color: #fff;height: 100%;
                    .content{
                        height: calc(100% - 20px);
                    }
                }
            }
        }
    `;
    /**
     * state 가져오기
     */
    const reviewList:I_singleReview[] = useSelector((state: I_stateProps) => state.reviewReducer.reviewList);
    console.log(reviewList, 'reviewList');
    return (
        <ReviewBox>
            <ul>
                {
                    reviewList.map((i,idx) => (
                        
                        <SingleReview
                            title = {reviewList[idx].title}
                            content = {reviewList[idx].content}
                        ></SingleReview>
                    ))
                }
            </ul>
        </ReviewBox>      
    )
}
export default ReviewList;

