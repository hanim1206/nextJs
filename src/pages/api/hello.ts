// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {I_MainSlideItem} from '@/components/I_index';
/**
 * 인터페이스
 */

const mainSlideList: I_MainSlideItem[] = [
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

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) 
{
    res.status(200).json(mainSlideList)
}
