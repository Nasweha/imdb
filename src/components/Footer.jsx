import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
        <div className='row mt-5 pt-5'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='d-flex  me-2 w-100'>
                    <div className='border p-3 rounded w-100'>
                        <h5 className='text-light text-center'>Follow on Socila Media app</h5>
                        <div className='p-2 text-center'>
                        <FontAwesomeIcon icon={faInstagram} style={{color:'white'}} className='me-4 fs-4'/>
                        <FontAwesomeIcon icon={faFacebook} style={{color:'white'}}className='me-4  fs-4'/>
                        <FontAwesomeIcon icon={faTwitter} style={{color:'white'}}className='me-4 fs-4'/>
                        <FontAwesomeIcon icon={faYoutube} style={{color:'white'}}className='me-4 fs-4'/>
                        <FontAwesomeIcon icon={faTiktok} style={{color:'white'}}className=' fs-4'/>
                        
                        </div>
                    </div>
                    <div className='border w-100 ms-3 rounded p-3'>
                        <h5 className='text-center text-light'>Get the imdb App</h5>
                        <h6 className='text-center'>for ios and Android</h6>
                    </div>
                    
                </div>
                <div className='mt-4'>
              <div className='d-flex align-items-center justify-content-evenly'>
                   <p className='text-light'><a href=''style={{textDecoration:'none'}}>Help</a></p>
                   <p className='text-light'><a href=''style={{textDecoration:'none'}}>siteIndex</a></p>
                   <p className='text-light'><a href=''style={{textDecoration:'none'}}>ImdbPro</a></p>
                   <p className='text-light'><a href=''style={{textDecoration:'none'}}>Boxoffice Mojo</a></p>
                   <p className='text-light'><a href=''style={{textDecoration:'none'}}>License Imdb Data</a></p>
              </div>
               
               <div className='d-flex align-items-center justify-content-between'>
                   <p className='text-light'><a href='' style={{textDecoration:'none'}}>Press Room</a></p>
                   <p className='text-light'><a href='' style={{textDecoration:'none'}}>Advertising</a></p>
                   <p className='text-light'><a href=''style={{textDecoration:'none'}}>Jobs</a></p>
                   <p className='text-light'><a href=''style={{textDecoration:'none'}}>Condition of use</a></p>
                   <p className='text-light'><a href=''style={{textDecoration:'none'}}>Privacy and policy</a></p>
               </div>
               <div>
               <h6 className='text-center text-light'>An anazone Company</h6>
                   <h6 className='text-center text-light'>© 1990-2024 by IMDb.com, Inc.</h6>
               </div>

                </div>
               
            </div>
           
            <div className='col-md-3'></div>


        </div>
    </div>
  )
}

export default Footer

