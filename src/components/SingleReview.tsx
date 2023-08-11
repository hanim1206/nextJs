import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '@/components/common/Header'
import Content from '@/components/UI/Content'
import { I_singleReview} from '@/components/I_index';


const SingleReview = (props:I_singleReview) =>
{
    const showThisReview = (e:React.MouseEvent) => {
        const target = e.target as Element;
        target.closest('li').classList.toggle('on');
    }
    console.log(props);
    return (
        <li onClick={showThisReview}>
            <div className="title">
                {props.title}
            </div>
            <div className="content">
                {props.content}
            </div>
        </li>
    )
}
export default SingleReview;