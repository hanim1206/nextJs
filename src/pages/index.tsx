import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import MainCt1 from '@/components/MainCt1'
import MainCt2 from '@/components/MainCt2'
import MainCt3 from '@/components/MainCt3'
import MainCt4 from '@/components/MainCt4'
import MainCt5 from '@/components/MainCt5'
import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import {I_allData,I_allDataProps,I_project,I_MainSlideItem} from '@/components/I_index';


export default function Home(props:I_allDataProps) 
{
    const data1:I_MainSlideItem[] = props.content1;
    const data2:I_project[] = props.content3;
    return (
        <div className='text-8xl index'>
            <Header />
            <MainCt1 data={props.content1}/>
            <MainCt2 />
            <MainCt3 data={props.content3}/>
            <MainCt4 />
            <MainCt5 />
            <Footer />
        </div>
    )
}
export const getServerSideProps: GetServerSideProps = async () => {
    const res:Response = await fetch('http://localhost:3000/api/hello');
    const res2 = await fetch('http://localhost:3000/api/IndexApi');
    const myData = await res.json();
    const myData2 = await res2.json();
    
    const allData:I_allData = {
        props : { 
            content1: myData,
            content3: myData2,
        }
    }
    return allData;
}


