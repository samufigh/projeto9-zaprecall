import styled from 'styled-components';
import Header from './Header';
import Deck from './Deck';
import Footer from './Footer';
import { useState } from "react";

export default function App() {
    const [counter, setCounter] = useState(0);

    return (

            <Container>
                <Header />
                <Deck 
                    counter={counter} 
                    setCounter={setCounter}/>
                <Footer 
                    counter={counter}/>
            </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FB6B6B;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`