import { styled } from "styled-components";
import Ingredientes from '../../assets/img/cursor_ingredientes.png'
import Preparo from '../../assets/img/cursor_preparo.png'

export const Conteudo = styled.div`
    max-width: 990px;
    margin: auto;
    padding: 40px;

    h1 {
        color: #FF6B28;
        font-size: 48px;
    }

    h2 {
        font-size: 28px;
        color: #FF6B28;
        margin-bottom: 40px;
    }


`

export const Sessao = styled.section`
    border: 1px solid none;
    padding: 70px 100px;
    margin-top: 50px;
    border-radius: 20px;
    cursor: url(${Ingredientes}), auto;

    &:hover {
    box-shadow: 8px 8px 15px 12px rgba(205,205,205, 0.25);
  }

  &:nth-child(3) {
    cursor: url(${Preparo}), auto;
  }

  a {
    text-decoration: none;
    background-color: #FF6B28;
    color: white;
    padding: 16px;
    border-radius: 20px;
  }

  li {
    margin-bottom: 14px;
  }

  ul {
    margin-bottom: 50px;
  }

`
