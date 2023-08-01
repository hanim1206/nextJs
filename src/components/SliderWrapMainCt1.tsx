import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import Slide from './Slide';
import Slider from "react-slick";
import {ImgInterface,I_MainSlideItem,I_propsForMainSlideItem} from '@/components/I_index';

/**
 * 스타일드 컴포넌트
*/
const SliderInner = styled.div`
  position: relative;
  ul.buttonBar{
    display:flex!important;position:absolute;bottom:70px;left:50%;transform:translateX(-50%);
    li{
      width:13px;height:13px;margin-right:10px;position:relative;
      button{position:absolute;width:100%;height:100%;background-color:rgba(255, 255, 255, 0.5);border-radius:7.5px;font-size:0;color:transparent;}
      &.slick-active{width:22px;}
      &.slick-active button{background-color:#fff;}
    }
  }
`;
/**
 * 추출 컴포넌트
*/
const SliderWrapMainCt1=(props:I_propsForMainSlideItem)=> {
  const finalData:I_MainSlideItem[] = props.data;
  console.log(typeof finalData,'finalData');
  // console.log(finalData,'finalData');
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'buttonBar',
    arrows:false,
  };

  return (
    <SliderInner className="sliderInner">
      <Slider {...settings}>
        {
          props.data.map((i,idx) => (
            <Slide slideData = {props.data[idx]}  key = {idx}></Slide>
          ))
        }
      </Slider>
    </SliderInner>
  );
}
export default SliderWrapMainCt1;