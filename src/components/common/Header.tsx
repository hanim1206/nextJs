import React ,{useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import HamBtn from '../HamBtn';
import SubMenu from './SubMenu';

type Props = {};

export default function Header({ }: Props) {
    const Header = styled.header`
        position: fixed;width: 100%;z-index:1;background-color:#fff;
        .inner{ 
            display:flex; justify-content:space-between; align-items: center; position: relative; height: 84px;
            .logoWrap{}
            .mainMenu{
                display:flex;
                li{
                    font-size:14px;line-height:1.2;color:#222222;margin-right: 40px;list-style:none;
                }
            }
            .phone{
                width: 175px;font-size: 28px;font-weight: 700;color: #271247;position: absolute;right: 5%;top:50%;transform: translateY(-50%);
            }
        }
    `;
    /**
     * state
    */
    const [subMenu,setSubMenu] = useState(false)
    /**
     *function
    */
    const handleHam = () => {
        setSubMenu((prev) => {
            let a: Boolean = prev;
            return a === false ? true : false 
        });
    }
    return (
        <Header>
            <div className='inner setCenter'>
                <div className='logoWrap'>
                    <Link href="/">
                        <Image
                            width="184"
                            height="60"
                            src="/logo.svg"
                            alt="Picture of the author"
                        />    
                    </Link>
                </div>
                <div className='mainMenu'>
                    <li><Link href="/Works">Works</Link></li>
                    <li><Link href="/Service">제작서비스</Link></li>
                    <li><Link href="/Consult">견적/상담</Link></li>
                    <li><Link href="/About">About 위즈피아</Link></li>
                </div>
                <div className='phone'>1666-7926</div>
                <HamBtn handleHamClick={ handleHam } />
            </div>
            {subMenu ? <SubMenu/> : null}
            
        </Header>
    )
}

