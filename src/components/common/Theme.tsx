import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import {useSelector} from 'react-redux';

interface I_statePropsTheme {
    theme:string
}
const Theme = (props) => {

    const ThemeBox = styled.div``;
    return <ThemeBox>
        {props.children}
    </ThemeBox>
}
export default Theme;