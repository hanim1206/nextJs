import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'


const PopupBox = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    top:0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner{
        background-color: #fff;
        padding: 2rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 40%;
        gap: 1rem;
        .txtWrap{
            font-size: 18px;
            min-height: 4rem;
            display: flex;
            align-items: center;
            justify-content:center;
        }
        .deleteBtn{
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                background-color: orange;
                padding: 1rem;
                border-radius: 10px;
            }
        }
    }
`;
interface I_children{
    children : JSX.Element | JSX.Element[]
}
interface addFunc extends I_children{
    handlePopup : Function
}
const Popup = (props:addFunc) => {
    console.log(props,"props")
    return (
        <PopupBox>
            <div className="inner">
                {
                    props.children
                }
                <div className="deleteBtn">
                    <button
                    onClick={()=>{
                        props.handlePopup();
                    }}
                    >오케이</button>
                </div>
            </div>
        </PopupBox>
    )
}
export default Popup