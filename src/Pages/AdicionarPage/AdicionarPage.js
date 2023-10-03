import React, { useState, useEffect } from 'react'
import { AMain, APesquisa } from './styles'
import { NBand, NCard, NImg, NInfo, NTable, NTitle } from '../../Components/NotListened/styles';

import { collection, addDoc } from "firebase/firestore";
import {db} from '../../firebase';


const AdicionarPage = () => {

    const CLIENT_ID = "47d629387eff4cc2a731e7f2c290302e"
    const CLIENT_SECRET = "5bcf17b2ac36460480687f83171004ae"

    const [searchInput, setSearchInput] = useState("")
    const [accessToken, setAccessToekn] = useState("")
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        //API Access Token
        var auth = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
    
          body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', auth)
          .then(result => result.json())
          .then(data => setAccessToekn(data.access_token))
    }, [])

    async function addAlbum(name, data, band, link, logo){

        try {
            const docRef = await addDoc(collection(db, "todos"), {
              name: name,
              data: data,
              band: band,
              link:link,
              logo: logo,
              aberto: true
            });
            console.log("Document written with ID: ", docRef.id)
            setSearchInput("")
            setAlbums([])
          } catch (e) {
            console.error("Error adding document: ", e)
          }


    }


    async function search() {
        
        var artistParameters = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
            'Authorization' : 'Bearer ' + accessToken
        }
    }
        await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album&limit=20', artistParameters)
        .then(response => response.json())
        .then(async data => {
            setAlbums([])
            for(let i = 0; i < data.albums.items.length; i++){
                setAlbums(oldArray => [...oldArray, data.albums.items[i]]);
            }
            console.log(albums)
    })



    }


    return (
        <>
        <AMain>
            <APesquisa placeholder='🔍 Pesquisar'  onKeyPress={e => {if(e.key === 'Enter'){search()}}} onChange={e => {setSearchInput(e.target.value)}} />
            <NTable>
            {albums.map(album => (
            <NCard key={album.name} onClick={() => addAlbum(album.name, album.release_date, album.artists[0].name, album.href, album.images[0].url)}>
                <NImg src={album.images[0].url}/>
                <NInfo>
                    <NTitle>{album.name}</NTitle>
                    <NBand>{album.artists[0].name}</NBand>
                </NInfo>
            </NCard>
            ))}
            
        </NTable>
        </AMain>
        </>

    )
}

export default AdicionarPage