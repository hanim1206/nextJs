import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import styles from '../../styles/Header.module.css' 
import Image from 'next/image'

const SubMenu = () => {
    return (
        <div className={`${styles.subMenuWrap} subMenuWrap`}>
            <ul className='subMenuList'>
                <li>
                    <Link href='/'>홈페이지 제작</Link>
                </li>
                <li>
                    <Link href='/'>쇼핑몰 제작</Link>
                </li>
                <li>
                    <Link href='/'>웹프로그램 개발</Link>
                </li>
            </ul>
            <ul className='subMenuList'>
                <li>
                    <Link href='/'>제작의뢰</Link>
                </li>
                <li>
                    <Link href='/'>방문상담</Link>
                </li>
            </ul>
            <ul className='subMenuList'>
                <li>
                    <Link href='/'>위즈피아 소개</Link>
                </li>
                <li>
                    <Link href='/'>Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

export default SubMenu;