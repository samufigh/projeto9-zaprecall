import styled from 'styled-components';

export default function Footer() {
    return (
        <Count data-test="footer" >
            <span>0/4 Concluídos</span>
        </Count>
    )
}

const Count = styled.div`
    height: 70px;
    width: 100%;
    background-color: white;
    span{
        font-size: 18px;
        font-family: Recursive;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0px;
     bottom: 0px;
    z-index: 5;
`