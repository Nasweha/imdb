import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, styled, InputBase, Box } from '@mui/material';
import { logoURL } from '../constant/constant';
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { BookmarkAdd, ExpandMore, Menu } from '@mui/icons-material';
import { routePath } from '../constant/Route';

const StyledToolBar = styled(Toolbar)`
 background :#121212;
 min-height:56px !important;
 padding:0 115px !important;
justify-content:space-between;
& > * {
    padding: 0 16px;
}



& > div {
    display:flex;
    align-items:center;
    cursor:pointer;
    & > p {
        font-size:14px;
        font-weigth:600;
    }
}

& >  p {
        font-size:14px;
        font-weigth:600;
}
 `;
const InputSearchField = styled(InputBase)`
background:#FFFFFF;
width:55%;
height:30px;
border-radius:5px
`


const Logo = styled('img')({
    width: 64
})

const Header = () => {
    const [open,setOpen]= useState(null);
   

    const navigate = useNavigate()
    const handleClick=(e)=>{
        setOpen(e.currentTarget)
    }
    const handleClose =()=>{
        setOpen(null)
    }

    


    return (
        <div>
            <AppBar position='static'>
                <StyledToolBar>
                    <Logo src={logoURL} alt="logo"  onClick={()=> navigate(routePath.home)}/>
                    <Box  onClick={handleClick}>
                        <Menu />
                        <Typography>Menu</Typography>
                    </Box>
                    <HeaderMenu open={open} handleClose={handleClose}/>
                    <InputSearchField />
                    <Typography><a href='https://pro.imdb.com/login/ap?u=/login/lwa&imdbPageAction=signUp&rf=cons_nb_hm&ref_=cons_nb_hm' style={{textDecoration:'none' ,color:"white"}}>IMDb</a><Typography component={'span'}  style={{color:'skyblue' ,fontWeight:'600'}}>Pro</Typography></Typography>
                    <Box>
                        <BookmarkAdd />
                        <Typography><a href='https://www.imdb.com/registration/signin?u=https%3A%2F%2Fwww.imdb.com%2Flist%2Fwatchlist%3Fref_%3Dnv_usr_wl_all_0' style={{textDecoration:'none' ,color:"white"}}>Watchlist</a></Typography>
                    </Box>
                    <Typography><a href='https://www.imdb.com/registration/signin?u=https%3A%2F%2Fwww.imdb.com%2Flist%2Fwatchlist%3Fref_%3Dnv_usr_wl_all_0' style={{textDecoration:'none' ,color:"white"}}>Sign In</a></Typography>
                    <Box>
                        <Typography>EN</Typography>
                        <Typography><ExpandMore /></Typography>
                    </Box>
                </StyledToolBar>
            </AppBar>
        </div>
    )
}

export default Header