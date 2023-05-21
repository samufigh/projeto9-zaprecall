import styled from "styled-components";

export default function Flashcard(props) {
    return (
        <>
            <Front>
                <p>Pergunta {props.index + 1}</p>
                <ion-icon name="play-outline"></ion-icon>
            </Front>
        </>
    )
}

const Front = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;  
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 16px;
        font-family: Recursive;
        margin-left: 15px;
        font-weight: 700;
    }
    ion-icon{
        font-size: 30px;
        margin-right: 15px;
    }
`