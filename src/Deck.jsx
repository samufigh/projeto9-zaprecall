import styled from 'styled-components';
import cards from './cards';
import Flashcard from './Flashcard';

export default function Deck(){
    return (
        <Flashcards>
        {cards.map((card, index) => (
            <Flashcard 
                index = {index}
            />
        ))}
        </Flashcards>
    )
}

const Flashcards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
    line-height: 22px;
`