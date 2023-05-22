import styled from "styled-components";
import { useState } from "react";

import icone_certo from "./assets/icone_certo.png";
import icone_erro from "./assets/icone_erro.png";
import icone_quase from "./assets/icone_quase.png";
import seta_play from "./assets/seta_play.png";
import seta_virar from "./assets/seta_virar.png";


export default function Flashcard(props) {
    const [textDecoration, setTextDecoration] = useState("none");
    const [mostrarPergunta, setmostrarPergunta] = useState(false);
    const { index, question, answer, counter, setCounter } = props;
    const [virou, setvirou] = useState(false);
    const [icone, seticone] = useState(icone_certo);
    const [cor, setcor] = useState("black");
    const [respondido, setrespondido] = useState(false);

    function amarelo() {
        clicouNoCard();
        seticone(icone_quase);
        setcor("#ff922e");
      }

    function vermelho() {
        clicouNoCard();
        seticone(icone_erro);
        setcor("#ff3030");
      }
      function verde() {
        clicouNoCard();
        seticone(icone_certo);
        setcor("#2fbe34");
      }

    function clicouNoCard() {
        if (!virou && !respondido) {
          setmostrarPergunta(!mostrarPergunta);
          setrespondido(!respondido);
        } else {
          setvirou(false);
          let newCounter = counter + 1;
    
          newCounter <= 8 ? setCounter(newCounter) : setCounter(counter);
          setTextDecoration("line-through");
        }
      }
    
      const handleContentClick = () => {
        setvirou(true);
        setmostrarPergunta(!mostrarPergunta);
      };
    
      function icon() {
        if (!respondido) {
          return (
            <img
              src={seta_play}

              onClick={clicouNoCard}
              data-test="play-btn"
            />
          );
        }
        if (respondido) {
          if (icone == icone_certo) {
            return <img 
            src={icone_certo}  
            data-test="zap-icon"/>;
          } else if (icone == icone_quase) {
            return <img 
            src={icone_quase}  
            data-test="partial-icon"/>;
          } else if (icone == icone_erro) {
            return <img 
            src={icone_erro}  
            data-test="no-icon"/>;
          }
        }
      }
    
      const frontCardDiv = (
        <Frente>
          <p
            style={{textDecorationLine: textDecoration,  color: cor}}
            data-test="flashcard-text">
            Pergunta {index + 1}
          </p>
          {icon()}
        </Frente>
      );
      const questionDiv = (
        <Pergunta>
          <p data-test="flashcard-text">{question}</p>
          <img
            src={seta_virar}
            onClick={handleContentClick}
            data-test="turn-btn"
          />
        </Pergunta>
      );
      const caixaSelecao = (
        <Selecionar>
          <p data-test="flashcard-text">{answer}</p>
          <Botoes>
            <Red onClick={vermelho} data-test="no-btn">
              Não lembrei
            </Red>
            <Yellow onClick={amarelo} data-test="partial-btn">
              Quase não lembrei
            </Yellow>
            <Green onClick={verde} data-test="zap-btn">
              Zap!
            </Green>
          </Botoes>
        </Selecionar>
      );
    
      return (
        <Card data-test="flashcard">
          {virou ? caixaSelecao : mostrarPergunta ? questionDiv : frontCardDiv}
        </Card>
      );
    }

    const Response = styled.button`
      width: 85.17px;
      
      align-items: center;
      text-align: center;
      color: #ffffff;
      border-radius: 5px;
      font-family: "Recursive";
      font-size: 12px;
      border: none;
      font-style: normal;
      font-weight: 400;
      height: 37.17px;
      
      display: flex;
      justify-content: center;
      
      margin: 0 4px;
    `;
    
    const Red = styled(Response)`
      background: #ff3030;
    `;
    const Yellow = styled(Response)`
      background: #ff922e;
    `;
    const Green = styled(Response)`
      background: #2fbe34;
    `;
    
    const Botoes = styled.div`
      display: flex;
    `;
    
    const Card = styled.div`
      width: 300px;
      margin-bottom: 12.5px;
    
    display: flex;
    justify-content: center;
      border-radius: 5px;
    `;
    const Frente = styled(Card)`
      height: 65px;
      align-items: center;
      background: #ffffff;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
      justify-content: space-between;
      padding: 0 22px 0 15px;
    
      p {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        font-family: "Recursive";
        font-style: normal;
        color: black;
        text-decoration-line: none;
      }
    `;
    
    const Tras = styled(Card)`
      background: #ffffd5;
      flex-direction: column;
      transition: transform 0.3s;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
      padding: 18px 15px 6px 15px;
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        font-family: "Recursive";
        font-style: normal;
      }
      img {
        padding-left: 254px;
      }
    `;
    
    const Pergunta = styled(Tras)`
    justify-content: space-between;
      align-items: flex-start;
      height: 131px;
      
    `;
    
    const Selecionar = styled(Tras)`
      
      div {
        padding-top: 22px;
      }
      align-items: flex-start;
    `;

