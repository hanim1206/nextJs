import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';

type Props = {};

/**
 * 인터페이스
 */
interface ImgInterface{
    frontImg: string;
    bgImg: string;
}
interface MainSlideItem {
    topTxt: string;
    mainTxt: string;
    btmTxt: string;
    btn: string[];
    img: ImgInterface;
    color?:string,
    } 
interface SlideProps{
    slideData: MainSlideItem;
}
export default function Slide(props: SlideProps) { 
    /**
     * 스타일드 컴포넌트
    */
    const SingleSlide = styled.div`
        height: 47.3vw;background-image:url(${props.slideData.img.bgImg});background-repeat:no-repeat;background-size:cover;
        div.setCenter{
            height:100%;display:flex;
            .txtWrap{
                display: flex;flex-direction: column;width:50%;justify-content:center;
                h3{color: #fff;font-size: 30px;font-weight: 700;line-height: 1.2;}
                span{color: #fff;font-size: 62px;font-weight: 600;line-height: 1.2;margin-top:20px}
                p{ color: #fff;margin-top: 20px;font-size: 20px;font-weight: 300;line-height: 1.2;}
            }
            .imgWrap{width:50%;display:flex;align-items:center;}
        }
        &.purple .setCenter{
            .txtWrap{
                h3,span,p{color:#432178}
            }
            .btnWrap{
                button{border: none;background-color: #862991;color: #fff;}
            }
        }
        
    `;
    const BtnWrap = styled.div`
        display: flex;
        button{display: flex;justify-content:center;align-items:center;margin-top: 50px;border-radius: 100px;padding: 15px 20px;font-size: 20px;font-weight: 400;line-height: 1.2;min-width: 216px;border: 1px solid #fff;color: #fff;margin-right: 10px;}
    `;
    return (
        <SingleSlide className={`${props.slideData.color} singleSlide`}>
            <div className='setCenter'>
                <div className='txtWrap'>
                    <h3 className='txt1 txt'>{props.slideData.topTxt}</h3>
                    <span className='txt2 txt' dangerouslySetInnerHTML={{__html : props.slideData.mainTxt}}></span>
                    <p className="txt3 txt">{props.slideData.btmTxt}</p>            
                    <BtnWrap className='btnWrap'>
                        {
                            props.slideData.btn.map((i,idx) => (
                                <button  key = {idx}>{i}</button>
                            ))
                        }
                    </BtnWrap>
                </div>
                <div className='imgWrap'>
                    <Image
                        width="670"
                        height="382"
                        src={props.slideData.img.frontImg}
                        alt="목업 이미지"
                    />  
                </div>
            </div>
        </SingleSlide>
    )
}
