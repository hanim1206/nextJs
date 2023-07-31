import React, { useState, useCallback } from 'react'
import Link from 'next/link'
type Props = {
    func:Function
    style:object
    text:string
}

export default function Button(data: Props) {
    const clickEvent = useCallback(() => {
        data.func();
    },[])
    return (
        <button type='button' style={data.style} onClick={clickEvent}>{data.text}</button>
    )
}

