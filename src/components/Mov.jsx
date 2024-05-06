import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons/faGripLinesVertical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const  Mov=({movies}) =>{
  return (
    <div>
        <div className='row m-5'>
            <h3 style={{color:'yellow'}}>Explore and Watch More </h3>
            <h4 className='text-light'>Top Box Office</h4>
            <p>Weekend ospecials </p>
            {
                    movies.slice(0,6).map(movie => (
            <div className='col-md-6 d-flex'>
              
                <div>
                    <h4 className='text-light'><FontAwesomeIcon icon={faGripLinesVertical} style={{color: "#FFD43B",}} /><FontAwesomeIcon icon={faSquarePlus} className='ms-2 me-2' />{movie.title}</h4>
                    <p className='text-light ms-2'>{movie.vote_average}</p>
               </div>
              
               {/* <div>
             
                    <h6>1<FontAwesomeIcon icon={faGripLinesVertical} style={{color: "#FFD43B",}} /><FontAwesomeIcon icon={faSquarePlus} />movie namw</h6>
                    <p>rating</p>
               </div> */}

            </div>
                    ))
                  }
           
            <div className='col-md-6'></div>
        </div>
    </div>
  )
}

export default Mov