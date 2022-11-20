import styled from "styled-components";
import { Conteiner } from "components/App/App.styled";

export const Header = styled.header`
    margin: 0;
    padding: 16px 0;
    box-shadow: 0px 5px 4px -2px rgba(0,0,0,0.6);
    
    nav {
        height: 40px;
        display: flex;
        align-items: center;
    }
    a {
        margin-right: 15px;
        font-weight: bold;
        padding: 5px;
        text-decoration: none;
        color: black;
        &.active{
            color: darkblue;
        }
        &:hover, &:focus {
            text-decoration: underline;
        }
        &:last-child {
            margin-right: 0;
        }
    }

    p {
        margin: 0;
    }

`

export const HeaderConteiner = styled(Conteiner)`
    display: flex;
    justify-content: end;

    div {
        margin-right: 10px;
        
        &:last-child {
            margin-right: 0;
        }
    }
`