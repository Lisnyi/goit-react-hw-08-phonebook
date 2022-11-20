import styled from "styled-components";

export const ContactRegister = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

export const ContactElement =  styled.li`
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    &:last-child {
        margin-bottom: 0;
    }

    button {
        margin-left: 10px;
        height: 30px;
    }
`

export const ContactContainer = styled.div`
    min-width: 413px;
`

export const ContactName = styled.p`
    margin: 0;
    padding: 3px;
    background-color: #e3e2e1;
`

export const ContactNumber = styled.p`
    margin: 0;
    padding: 3px;
`