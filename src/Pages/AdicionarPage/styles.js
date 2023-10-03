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

export const AModal = styled.div`
    z-index: auto;
    display: ${({show}) => (show ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgb(0 0 0 / 0%);
 
    justify-content: center;
    align-items: center;
`

export const AModalBody = styled.div`
    width: 50%;
    height: 50%;
    background-color: rgb(14 14 14);
    display: ${({show}) => (show ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border: 3px #212124 solid;
    color: white;
`