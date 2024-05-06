import React from 'react'

import Carousel from 'react-multi-carousel';

import { Box,  Typography,  styled } from '@mui/material';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const StyledBanner = styled('img')
`  width:"100%";
height:250px;

`;
const Title = styled(Typography)
`
color:#FFFFFF;
`;




const Slide=({feature})=> {
  return (
    <>
      <Box>
      <Typography style={{color:'#F5C518' ,fontSize:"35px" ,paddingBottom:"1rem"}}>Featured Today</Typography>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={false}
                slidesToSlide={1}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                {
                    feature.map(movie => (
                        <>

                       
                            <StyledBanner src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                            <Title>{movie.original_title}</Title>
                        </>
                    ))
                }
            </Carousel>
        </Box>
    </>
  )
}

export default Slide