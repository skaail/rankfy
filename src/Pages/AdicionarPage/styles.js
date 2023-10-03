import styled from "styled-components";

export const AMain = styled.div`
    display: flex;
    margin: 0;
    flex-wrap: wrap;

    max-height: 100vh;
    max-width: 1200px;

    gap: 50px;

    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const APesquisa = styled.input`
    width: 100%;
    height: 40px;
    border: 0;
    border-radius: 30px;
    padding: 20px;
    background-color: #2e2e2e;
    color: white;

`

export const ATable = styled.div`
    display: flex;
    padding: 25px;
    margin: 0;
    flex-wrap: wrap;

    max-height: 100vh;
    max-width: 1200px;

    gap: 50px;

    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`