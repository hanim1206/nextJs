import { Inter } from 'next/font/google'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import MainCt1 from '@/components/MainCt1'
import MainCt2 from '@/components/MainCt2'
import MainCt3 from '@/components/MainCt3'
import MainCt4 from '@/components/MainCt4'
import MainCt5 from '@/components/MainCt5'
import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import {I_myData,I_allData} from '@/components/I_index';


export default function Home(props:I_myData) 
{
    const inputtext = useRef<HTMLInputElement>(null);

    const dataChange = useCallback(() => {
        if(inputtext.current)
        {
            console.log(inputtext.current.value);
        }
    },[])
    console.log(props);
    return (
        <div className='text-8xl index'>
            <Header />
            <MainCt1 />
            <MainCt2 />
            <MainCt3 />
            <MainCt4 />
            <MainCt5 />
            <Footer />
        </div>
    )
}
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/hello');
    const res2 = await fetch('http://localhost:3000/api/IndexApi');
    const myData = await res.json();
    const myData2 = await res2.json();
    const allData:I_allData = {
        props : { 
            "data1": myData,
            "data2": myData2
        }
    }
    return allData;
}
