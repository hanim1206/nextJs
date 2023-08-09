// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {I_project} from '@/components/I_index';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) 
{
const projectList: I_project[] = [
    {
        img: '/po1.png',
        title: '음악플러스',
        desc: 'PC WEB/MOBILE WEB/HYBRId APP',
        delay:100,
    },
    {
        img: '/po2.png',
        title: 'GNM',
        desc: 'PC WEB/MOBILE WEB/HYBRId APP',
        delay:200,
    },
    {
        img: '/po3.png',
        title: '영창',
        desc: 'PC WEB/MOBILE WEB/HYBRId APP',
        delay:300,
    },
    {
        img: '/po4.png',
        title: '동아',
        desc: 'PC WEB/MOBILE WEB/HYBRId APP',
        delay:400,
    },
    {
        img: '/po5.png',
        title: '게임,,,',
        desc: 'PC WEB/MOBILE WEB/HYBRId APP',
        delay:100,
    },
    {
        img: '/po6.png',
        title: '맥스무비',
        desc: 'PC WEB/MOBILE WEB/HYBRId APP',
        delay:200,
    },
    {
        img: '/po7.png',
        title: '어떤 시계',
        desc: 'PC WEB/MOBILE WEB/HYBRId APP',
        delay:300,
    },
    {
        img: '/po8.png',
        title: '원주옥상영화제',
        desc: 'PC WEB/MOBILE WEB/HYBRId APP',
        delay:400,
    },
] 
    res.status(200).json(projectList)
}
