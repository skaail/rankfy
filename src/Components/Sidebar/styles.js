import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const SSidebar = styled.div`
    width: 300px;
    height: 100vh;
    background-color: rgb(10, 10, 10)
`




export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(8px - 2px) 0;

    &:hover {
        font-size: 25px;
        svg {
            font-size: 25px;
            color: white;
        }
    }
    
    
`

export const SLinkIcon = styled.div`
    padding: 16px 8px;
    display: flex;

    svg {
        font-size: 20px;
        color: white;
    }
`

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: 8px;
    color: white;
`

export const SLinkContainer = styled.div`
    background: transparent;
    margin: 8px 0;
    padding: 20px;

`