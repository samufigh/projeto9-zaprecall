import styled from "styled-components";
import logo from './assets/logo.png';

export default function Header(){
    return (
        <Logo>
           <img src ={logo}/>
           <p>ZapRecall</p>
        </Logo>
    );
}

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    img{
        height: 52px; 
        margin-right: 20px;
    }
    p{
        font-family: Righteous;
        font-size: 36px;
        color: white;
    }
    margin-top: 43px;
    margin-bottom: 29px;
`