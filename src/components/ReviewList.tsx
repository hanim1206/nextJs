import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '@/components/common/Header'
import Content from '@/components/UI/Content'

const ReviewList = () => {
    const ReviewBox = styled.div`
        width: 50%;height:50vw;background-color: #dbe9d1;
        ul{
            position: relative;height: 100%;
            li{

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
    return (
        <ReviewBox>
            <ul>
                <li className=''>
                    <div className="title">
                        titletitletitletitle
                    </div>
                    <div className="content">
                        wawawawna,snfdsl,jndflkajnsd;kjland;lkhjS;ADLKJlsdkfj;LKSDJF;lsdhfL;SDHF;lnsdf;LKNSDL;sndLSDHJKF;Lsdhf;ljk
                    </div>
                </li>
                <li>
                    <div className="title">
                        titletitletitletitletitletitletitletitle
                    </div>
                    <div className="content">
                        wawawawna,snfdsl,jndflkajnsd;kjland;lkhjS;ADLKJlsdkfj;LKSDJF;lsdhfL;SDHF;lnsdf;LKNSDL;sndLSDHJKF;Lsdhf;ljk
                    </div>
                </li>
                <li>
                    <div className="title">
                        titletitletitletitle
                    </div>
                    <div className="content">
                        wawawawna,snfdsl,jndflkajnsd;kjland;lkhjS;ADLKJlsdkfj;LKSDJF;lsdhfL;SDHF;lnsdf;LKNSDL;sndLSDHJKF;Lsdhf;ljk
                    </div>
                </li>
                <li>
                    <div className="title">
                        titletitletitletitle
                    </div>
                    <div className="content">
                        wawawawna,snfdsl,jndflkajnsd;kjland;lkhjS;ADLKJlsdkfj;LKSDJF;lsdhfL;SDHF;lnsdf;LKNSDL;sndLSDHJKF;Lsdhf;ljk
                    </div>
                </li>
                <li>
                    <div className="title">
                        titletitletitletitle
                    </div>
                    <div className="content">
                        wawawawna,snfdsl,jndflkajnsd;kjland;lkhjS;ADLKJlsdkfj;LKSDJF;lsdhfL;SDHF;lnsdf;LKNSDL;sndLSDHJKF;Lsdhf;ljk
                    </div>
                </li>
                <li>
                    <div className="title">
                        titletitletitletitle
                    </div>
                    <div className="content">
                        wawawawna,snfdsl,jndflkajnsd;kjland;lkhjS;ADLKJlsdkfj;LKSDJF;lsdhfL;SDHF;lnsdf;LKNSDL;sndLSDHJKF;Lsdhf;ljk
                    </div>
                </li>
            </ul>
        </ReviewBox>      
    )
}
export default ReviewList;

