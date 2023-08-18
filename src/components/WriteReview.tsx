import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '@/components/common/Header'
import Content from '@/components/UI/Content'
import { I_productList,I_stateProps} from '@/components/I_index';
import { useSelector, useDispatch } from 'react-redux';

const WriteReview = () => {
    const WriteReviewBox = styled.div`
            width: 80%;min-height:30vw;background-color: #71747a;padding:2vw;display: flex;flex-direction: column;justify-content: space-between;border-radius: 0 50%;
            h4{
                font-size: 21px;color: #fff;margin-top: 50px;text-align:center;
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
    `;
    /**
     * 객체
    */
    interface I_singleReview {
        title: string;
        content:string
    }
    /**
     * 작성내용 디스패치
     */
    const dispatch = useDispatch()
    const writeReviewHandler = (newReview:I_singleReview) => {
        dispatch(
            {
                type: 'create',
                item : newReview,
            },
        )
    }
    /**
     * 함수
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target;
        const title = target.title.value;
        const content = target.content.value;
        console.log(target.title.value);
        console.log(target.content.value);
        const newReview:I_singleReview = {
            title: title,
            content:content,
        }
        writeReviewHandler(newReview)
    }

    return (
        <WriteReviewBox className="reviewWriteBox">
            <h4>review</h4>
            <form onSubmit={handleSubmit}>
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
        </WriteReviewBox>
    )
}
export default WriteReview;