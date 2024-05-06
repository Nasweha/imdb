import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Top = ({popular}) => {
    return (
        <div>
            <h3 className='text-light my-3'>Top 20 on This Imdb Week</h3>
            {/* <div className='row'>
           <div className='col-md-2'>
            <img src="" alt="" />
            <p>8.6</p>
            <h6>fallout</h6>
            <button>wach now</button>
            <p> Trailor</p>
           </div>
           <div className='col-md-2'></div>
           <div className='col-md-2'></div>
           <div className='col-md-2'></div>
        </div> */}

            <Carousel responsive={responsive}>


                {
                   popular.map(movie => (
                       <>
                            <div className='card m-2 ' style={{backgroundColor:"rgb(26 26 26)"}}>
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt=""  height={"250px"}/>
                               <div className='p-2'>
                                    <p className='text-light'><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} className='me-2'/>{movie. vote_average}</p>
                                    <h5 className='text-light'>{movie.title .slice(0,10)}</h5>
                                    <button className='w-50 align-items-center justify-content-center display-inline mx-5 my-2 p-2 rounded'style={{color:'rgb(83 146 228)',backgroundColor:'#31363F'}}>wach now</button>
                                    <p className='text-center text-light'> Trailor</p>
                               </div>
    
    
    
                            </div>
                            
                            
                       </>

                    ))
                }

                {/* <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 4</div> */}
            </Carousel>;
        </div>
    )
}

export default Top