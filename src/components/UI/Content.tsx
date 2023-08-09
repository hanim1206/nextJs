import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'

interface I_children{
    children : JSX.Element | JSX.Element[]
}
const Content = (props:I_children) => {
    const Container = styled.div`
        padding-top:84px;
        margin: 0 auto;
        max-width: 1280px;
        width: 90%;
    `; 
    console.log(props.children,"children")
    return (<Container>
        {props.children}
    </Container>)
}
export default Content;