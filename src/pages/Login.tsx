import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Header from '../components/common/Header';
import Content from '../components/UI/Content';
import Basket from '@/components/common/Basket';
import { useSelector, useDispatch } from 'react-redux';



export default function Login() { 
    const LoginPage = styled.div`
    .titleWrap{
        display: flex;flex-direction: column;justify-content: center;align-items: center;padding: 4vw 0;gap: 20px;line-height: 1.5;text-align: center;
        h3{
            font-size: 30px;font-weight: bold;
        }
    }
    .loggedOut{
        .contentWrap{
            form{
                width: 100%;display: flex;justify-content: center;gap: 1vw;border: solid 1px #2b2b2b;padding: 3vw;border-radius: 10px;
                .inputWrap{
                    display: flex;flex-direction: column;justify-content: center;align-items: center;gap: 10px;
                    label{
                        display: flex;
                        span{
                            width: 40px;
                        }
                        input{
                            border: solid 1px #2b2b2b;border-radius: 10px;padding:2px 10px;
                        }
                    }
                }
                .btnWrap{
                    height: auto;
                    button{
                        background-color: #2b2b2b;height: 100%;color: #fff;padding:1vw;
                    }
                }
            }
        }
    }
    .loggedIn{
        padding:3vw;display: flex;justify-content: center;align-items: center;border:solid 1px #2b2b2b;border-radius: 10px;flex-direction: column;gap: 1vw;
        .txtWrap{
            height: 100px;display: flex;align-items: center;
            p{
                strong{
                    font-weight:bold;
                    font-size: 21px;
                }
            }
        }
        .btnWrap{
                    height: auto;
                    display:flex;
                    gap: 10px;
                    button{
                        background-color: #2b2b2b;height: 100%;color: #fff;padding:1vw;
                    }
                }
    }
    .info{
        margin-top: 10px;
        p{
            font-size: 12px;text-align: end;
        }
    }
    `;
    let ID = '';
    let PW = '';
    /**
     * 로그인 여부 판별하는 state
     */
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    /**
     * 페이지 로드시  로컬스토리지에 로그인 정보가 남아있는지 판별하는 함수
     */
    const getLoginInfo = (useEffect(() => {
        if (window.localStorage.getItem('isLoggedIn'))
        {
            console.log('로그인 정보가 남아있음');
            setIsLoggedIn(true)
        }
        else
        {
            console.log('로그아웃 상태임');
            setIsLoggedIn(false);
        }
    }, []));
    /**
     * 유효성 체크
     */
    const isValid = (id, pw) => {
        console.log(id, pw, "검증타임");
        const valWrap = [
            {
                val: id,
                name : '아이디'
            },
            {
                val: pw,
                name : '패스워드'
            }
        ] 
        let isOk = false;
        for (let i = 0; i < valWrap.length; i++)
        {
            if (valWrap[i].val === '')
            {
                alert(`${valWrap[i].name}를 입력해주세요.`); 
                isOk = false;
                break;
            }
            if (valWrap[i].val.length < 5 && valWrap[i].val === id)
            {
                alert(`${valWrap[i].name}를 5자리 이상 입력해주세요.`); 
                isOk = false;
                break;
            }
            if (valWrap[i].val.length < 8 && valWrap[i].val === pw)
            {
                alert(`${valWrap[i].name}를 8자리 이상 입력해주세요.`); 
                isOk = false;
                break;
            }
            isOk = true;
        };
        return isOk;
    }
    /**
     * 로그인버튼 클릭시 호출되는 함수
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isValid(ID,PW))
        {
            return false;
        }
        window.localStorage.setItem('isLoggedIn', ID);
        setIsLoggedIn(true);
    }
    /**
     * 로그아웃 클릭시 호출되는 함수 
     */
    const handleLogout = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIsLoggedIn(false);
        window.localStorage.setItem('isLoggedIn', '');
    }
    /**
     * 인풋창 입력시 호출되는 함수
     **/
    const handleType = (e: React.FormEvent<HTMLFormElement>) => {
        // console.log(e.target.name);
        if (e.target.name === 'id')
        {
            ID = e.target.value;
        }
        else if(e.target.name === 'password')
        {
            PW = e.target.value;
        }
    }

    return (
        <>
            <Header></Header>
            <Content>
                <LoginPage>
                <div className="titleWrap">
                    <h3>로그인 페이지</h3>
                </div>
                    {
                        isLoggedIn ? 
                            (
                                <section className='loggedIn'>
                                    <div className="txtWrap">
                                        <p>
                                            반갑습니다 <strong>{window.localStorage.getItem('isLoggedIn')} </strong>님
                                        </p>
                                    </div>
                                    <div className="btnWrap">
                                        <button>
                                            <Link href="/Cart">장바구니</Link>
                                        </button>
                                        <button onClick={handleLogout}>
                                            로그아웃
                                        </button>
                                    </div>
                                </section>
                            )
                            :
                            (
                                <section className='loggedOut'>
                                    <div className="contentWrap">
                                        <form onSubmit={handleSubmit} onChange={handleType}>
                                            <div className='inputWrap'>
                                                <label htmlFor="id">
                                                    <span>ID</span>
                                                    <input type="text" name='id' />
                                                </label>
                                                <label htmlFor="password">
                                                    <span>PW</span>
                                                    <input type="password" name='password'/>
                                                </label>
                                            </div>
                                            <div className="btnWrap">
                                                <button>
                                                    Sign In
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            )
                    }
                    <div className='info'>
                        <p>
                            아이디는 5자리 이상, 패스워드는 8자리 이상 입력해주세요.
                        </p>
                    </div>
                </LoginPage>
            </Content>
        </>
    )
}