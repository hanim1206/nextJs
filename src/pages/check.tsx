import React, { useCallback, useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/common/Header'

import Test from '@/components/Test'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [count,setCount] = React.useState<number>(0);
    const dataCallback = (data:number) => {
        setCount(data);
    }

    useEffect(()=>{
        console.log(count);
    },[count])
    return (
        <div className='text-8xl'>
            <Header />
            <div>
                check{count}
            </div>
            <Test count={dataCallback}/>
        </div>
    )
}
