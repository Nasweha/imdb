
import { Movie } from '@mui/icons-material';
import { Box, Typography, boxClasses, styled } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Popular from './Popular';

const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const StyledBanner = styled('img')({
    width:"100%",
  })

 

    const Banner=({popular}) =>{

    
  return (
    <>
       <Box style={{width:"65%"}}>
           <Carousel responsive={responsive}>
            {
            popular.map(movie =>(
               <>
                    <StyledBanner  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />     
               </>


              
            
                
            ))
           
            }
           
            
            </Carousel> 

       </Box>
        
    </>
  );
}

export default Banner