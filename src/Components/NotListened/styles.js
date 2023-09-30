import styled from "styled-components";

export const NTable = styled.div`
    display: flex;
    padding: 25px;
    margin: 0;
    flex-wrap: wrap;

    max-height: 90vh;
    max-width: 1000px;

    gap: 50px;

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