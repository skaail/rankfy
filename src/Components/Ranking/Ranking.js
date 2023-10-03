import React, { useEffect, useState } from 'react'
import { AModal, AModalBody, MButton, MClose, MInput, NBand, NCard, NHeader, NImg, NInfo, NTable, NTitle } from './styles'
import { collection, getDocs, updateDoc , doc } from "firebase/firestore";import {db} from '../../firebase'

const NotListened = () => {
    
    const [albuns, setAlbuns] = useState([])
    const [show, setShow] = useState(false)
    const [id, setId] = useState('')
    const [nota, setNota] = useState()

    const fetchAlbuns = async () => {
        await getDocs(collection(db, "todos"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setAlbuns(newData);                
            })
    }

    const salvarNota = async (e) => {
        const albumref = doc(db, "todos", id)
        console.log(nota)

        await updateDoc(albumref, {
            nota: parseInt(nota)
          });
          setShow(false)
          window.location.reload(false);

    }

    useEffect(() => {
        fetchAlbuns()
    }, [])

    return (
        <>
        <NHeader>Não ouvidas</NHeader>
        <NTable>
            {albuns.map(({id, name, band, logo, nota}) => {
            
            if(nota === undefined){
                return null

            }else{
                return(
                    <NCard key={id} onClick={() => {setShow(true); setId(id)}}>
                    <NImg src={logo}/>
                    <NInfo>
                        <NTitle>{name}</NTitle>
                        <NTitle>{nota}</NTitle>
                        <NBand>{band}</NBand>
                    </NInfo>
                </NCard>
                )
            }
            

        })}
            
        </NTable>

        <AModal show  = {show}>
            <AModalBody show  = {show}>
                <MClose onClick={() => setShow(false)}>X</MClose>
                Digite a Nota:
                <MInput onChange={(e) => {setNota(e.target.value)}} />
                <MButton onClick={() => salvarNota()}>Salvar</MButton>
            </AModalBody>
        </AModal>
        </>
    )
}

export default NotListened