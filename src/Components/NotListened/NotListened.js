import React, { useEffect, useState } from 'react'
import { NBand, NCard, NHeader, NImg, NInfo, NTable, NTitle } from './styles'
import { collection, getDocs, updateDoc , doc } from "firebase/firestore";
import {db} from '../../firebase'

const NotListened = () => {
    
    const [albuns, setAlbuns] = useState([])

    const fetchAlbuns = async () => {
        await getDocs(collection(db, "todos"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setAlbuns(newData);                
            })
    }

    useEffect(() => {
        fetchAlbuns()
    }, [])

    return (
        <>
        <NHeader>Não ouvidas</NHeader>
        <NTable>
            {albuns.map(({name, band, logo}) => (
            <NCard key={name}>
                <NImg src={logo}/>
                <NInfo>
                    <NTitle>{name }</NTitle>
                    <NBand>{band}</NBand>
                </NInfo>
            </NCard>
            ))}
            
        </NTable>
        </>
    )
}

export default NotListened