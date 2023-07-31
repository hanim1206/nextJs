import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'

interface HamBtnProps { 
    handleHamClick:Function,
}
const HamBtn = (props:HamBtnProps) => {
    const onClickEvent = (e:any):void => {
        console.log(e.target);
        props.handleHamClick();
    }
    return (
        <button className="hamBtnInner" onClick ={ onClickEvent }>
            <Image
                width="56"
                height="56"
                src="/menuBtn.svg"
                alt="Picture of the author"
            />
        </button>

    )
}
export default HamBtn;
