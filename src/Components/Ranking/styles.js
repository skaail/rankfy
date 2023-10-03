import styled from "styled-components";

export const NTable = styled.div`
    display: flex;
    padding: 25px;
    margin: 0;
    flex-wrap: wrap;

    max-height: 100vh;
    max-width: 1200px;

    gap: 15px;

    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const NHeader = styled.h1`
    color: white;
`

export const NCard = styled.div`
    height: 280px;
    width: 200px;
    border-radius: 10px;

    background-color: rgb(40, 40, 40);

    cursor: pointer;
`

export const NImg = styled.img`
    height: 180px;
    width: 180px;
    border-radius: 10px;

    background-color: rgb(255, 255, 255);

    margin: 10px;
`

export const NInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NTitle = styled.span`
    color: white;
    font-size: 15px;
`

export const NBand =  styled.span`
    color: white;
    font-size: 10px
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
    flex-direction: column;
    gap: 25px;
`

export const MInput = styled.input`

    width: 30%;
    height: 40px;
    border: 0;
    border-radius: 30px;
    padding: 20px;
    background-color: #2e2e2e;
    color: white;

`

export const MButton = styled.a`
    cursor: pointer;
    background-color: white;
    border-radius: 30px;
    color: black;

    width: 20%;

    display: flex;

    justify-content: center;
    align-items: center;

    padding: 10px;
    
`

export const MClose = styled.a`
    cursor: pointer;

    position: fixed;
    top: 30%;
    right: 30%;
`