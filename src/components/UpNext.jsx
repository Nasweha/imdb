import { Box, Typography, styled } from '@mui/material'
import React from 'react'


const Component = styled(Box)
`width:40%;
display:flex;
flex-direction:column;
align-items:baseline;
padding-left:30px;

& > p {
    color:#F5C518;
    font-weight:600;
    font-size:18px;
    margin-bottmo:10px;

    
}
`
;
const Poster = styled('img')({
    width:88
    
})

const Wrapper = styled(Box)
`color:#FFFFFF;
display:flex;
flex-direction:center;
align-items:center

margin-bottom:20px;

 & > p {
    padding-left :20px

 }
`


const UpNext = ({popular}) => {
  return (
 
        <Component>
            
            <Typography>Up Next</Typography>
           
                {
                 popular.splice(0,3).map(movie => (
                    <Wrapper>
                        <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                        <Typography>
                            <Typography>{movie.original_title}</Typography>
                            {`${movie.overview.slice(0,55)}...`}
                        </Typography>
                             
                    </Wrapper>
                 ))
                }
           
        </Component>
 
  )
}

export default UpNext