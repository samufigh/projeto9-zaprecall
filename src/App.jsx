import styled from 'styled-components';
import Header from './Header';
import Deck from './Deck';
import Footer from './Footer';

export default function App() {
    return (

            <Container>
                <Header />
                <Deck />
                <Footer />
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