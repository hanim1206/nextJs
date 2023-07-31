import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import Slide from './Slide';
import Slider from "react-slick";
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
/**
 * 추출 컴포넌트
*/
const SliderWrapMainCt1=()=> {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'buttonBar',
    arrows:false,
  };
  const mainSlideList: MainSlideItem[] = [
    {
      topTxt: '홈페이지 제작은 역시 위즈피아!',
      mainTxt: '쇼핑몰 제작은 위즈피아에서 <br />트렌디하게!',
      btmTxt: '위즈피아는 틀에 박힌 디자인을 벗어나서 변화를 위한 노력과 최신 Trend 탐구를 통해 새로운 디자인을 제공합니다.',
      btn: ['견적 문의하기'],
      img: {
        frontImg: '/mockup1.png',
        bgImg: '/slide3.png',
      },
      color: 'purple',

    },
    {
      topTxt: '홈페이지 제작은 역시 위즈피아!',
      mainTxt: '쇼핑몰 제작은<br />위즈피아에서 빠르게!',
      btmTxt: '홈패이지, 모바일 웹, 반응형 등 다양한 형태의 기업&고객의 특성에 최적화된 제작 서비스를 제공합니다.',
      btn: ['견적 문의하기', '방문신청'],
      img: {
        frontImg: '/mockup2.png',
        bgImg: '/slide2.png',
      },

    },
    {
      topTxt: '홈페이지 제작은 역시 위즈피아!',
      mainTxt: '웹프로그램 개발은 <br />위즈피아에서 실속있게!',
      btmTxt: '다양한 웹프로그램 개발을 퀄리티는 높이고 제작비용은 낮추었습니다. 지금 바로 상담해보세요!',
      btn: ['견적 문의하기'],
      img: {
        frontImg: '/mockup3.png',
        bgImg: '/slide1.png',
      },
    },
  ];
  return (
    <SliderInner className="sliderInner">
      <Slider {...settings}>
        {
          mainSlideList.map((i,idx) => (
            <Slide slideData = {mainSlideList[idx]}  key = {idx}></Slide>
          ))
        }
      </Slider>
    </SliderInner>
  );
}
export default SliderWrapMainCt1;