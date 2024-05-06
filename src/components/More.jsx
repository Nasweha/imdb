import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons/faGripLinesVertical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



function More() {
  return (
    <div className='row'>

       <div className='col-md-8 mb-5'>
        
            <h3 className='text-light'><FontAwesomeIcon icon={faGripLinesVertical} style={{color: "#FFD43B",}} className='me-2'/>More to Watch</h3>
            <p className='text-light'>IMDb helps you select the perfect next show or movie to watch.</p>
            <button className='bg-transparent text-light px-5 border-light py-2 me-3 ' style={{width:"300px"}}><a href='https://www.imdb.com/what-to-watch/watch-guides/?ref_=hm_watch_wchgd' className='text-light' style={{textDecoration:'none'}}>Watch Guide </a></button>
            <button className='bg-transparent text-light px-5 border-light py-2 'style={{width:"300px"}}><a href='' className='text-light' style={{textDecoration:'none'}}>Most Popular</a></button>
       </div>
       <div className='col-md-2'></div>

    </div>
  )
}

export default More