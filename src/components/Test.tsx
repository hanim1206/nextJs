import React, { useState, useCallback } from 'react'
import Link from 'next/link'
type Props = {
    count:Function
}

export default function Test({count}: Props) {
    const [num,setNum] = useState<number>(1);
    const clickEvent = useCallback(() => {
        setNum(num+1);
        count(num);
    },[num])


    return (
        <button type='button' onClick={clickEvent}>버튼입니다.</button>
    )
}

