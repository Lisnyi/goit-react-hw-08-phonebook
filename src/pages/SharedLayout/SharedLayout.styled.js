import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 10px;
    box-shadow: 0px 5px 4px -2px rgba(0,0,0,0.6);
    margin-bottom: 15px;
    
    nav {
        height: 33px;
        display: flex;
    }
    a {
        margin-right: 15px;
        font-weight: bold;
        padding: 5px;
        text-decoration: none;
        color: black;
        &.active{
            color: darkred;
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

export default Header