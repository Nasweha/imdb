import React, { useEffect, useState } from 'react'
import { categoryMovies } from '../services/api'
import {PEOPLE_API_URL,TOPRATED_API_URL,POPULAR_API_URL, NOWPLAYING_API_URL} from '../constant/constant';
import Header from '../components/Header';
import { Box, styled } from '@mui/material';
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slide from '../components/Slide';
import Top from '../components/Top'
import Fanfav from '../components/Fanfav'
import More from '../components/More'
import Mov from '../components/Mov'
import Popular from '../components/Popular';
const Wrapper = styled(Box)
`display:flex;
padding:20px 0;`;

const Component = styled(Box)
`padding: 0 115px !important`


const  Home=() =>{
  const [movies, setMovies] =useState([]);
  const [feature, setFeature] = useState([]);
  const [people, setPeople] = useState([]);
  const [popular, setPopular] = useState([]);
  useEffect(()=>{
    const getDta = async()=>{
    
    let response  =  await categoryMovies(NOWPLAYING_API_URL)
    setMovies(response.results);
    console.log(response.results);

    let nowplaying  =  await categoryMovies(POPULAR_API_URL)
    setPopular(nowplaying.results);
      

    let topRatedResponse = await categoryMovies(TOPRATED_API_URL);
    setFeature(topRatedResponse.results);


    let peopleResponse = await categoryMovies(PEOPLE_API_URL);
    setPeople(peopleResponse.results);
      
    }
    getDta();

    
       
  },[])
  return (
   <>
      <Component>
        
        <Wrapper >
          <Banner popular={popular}/>
          <UpNext popular={popular}/>
        </Wrapper>
        <Slide feature={feature}/>
        <Top popular={popular}/>
        <More/>
        <Fanfav feature={feature}/>
       <Mov movies={movies}/>
       <Popular people={people}/>
      </Component>
   </>
  )
}

export default Home