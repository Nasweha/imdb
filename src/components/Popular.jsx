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
const Popular = ({people}) => {
    return (
        <div>
            <h3 className='text-light my-3'>Popular Actors</h3>
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
                    people.map(movie => (
                       <>
                           
                                <img src={`https://image.tmdb.org/t/p/original${movie.profile_path}`} alt=""  style={{width:'180px',height:'180px',borderRadius:'250px'}}/>
                               <div className='p-2'>
                                    <p className='text-light text-center'>{movie.name}</p>
                                    {/* <h5 className='text-light'>{movie.title .slice(0,10)}</h5> */}
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

export default Popular