import styled from 'styled-components';
import cards from './cards';
import Flashcard from './Flashcard';

export default function Deck(props) {
    const { counter, setCounter } = props;

    return (
        <Flashcards>
            {cards.map((card, index) => (
                <Flashcard
                    counter={counter}
                    setCounter={setCounter}
                    index={index}
                    key={index}
                    question={card.question}
                    answer={card.answer}
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