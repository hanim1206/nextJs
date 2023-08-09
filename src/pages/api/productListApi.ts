// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { I_productList } from '@/components/I_index';
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) 

{
    const productList:I_productList[] = [
        {
            key:1,
            name: '저스틴 비버',
            desc:'저스틴 비버입니다.',
            src: '/비버1.jpg',
        },
        {
            key:2,
            name: '비버 3D',
            desc:'모델링 비버입니다.',
            src: '/비버2.jpg',
        },
        {
            key:3,
            name: '루피',
            desc:'잔망루피입니다.',
            src: '/비버3.png',
        },
        {
            key:4,
            name: '유사비버',
            desc:'촉감이 실물과 제일 유사한 유사비버입니다.',
            src: '/비버4.jpg',
        },
        {
            key:5,
            name: '비버지',
            desc:'보노보노의 친구 비버의 아버지입니다.',
            src: '/비버5.jpg',
        },
        
    ]
    res.status(200).json(productList)
}