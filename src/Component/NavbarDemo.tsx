import React, { useState } from 'react'
import { AppBar,Toolbar,IconButton, Typography,Stack,Button ,Menu, MenuItem } from '@mui/material'
import { KeyboardArrowDown, CatchingPokemon } from '@mui/icons-material'
export default function NavbarDemo() {
    const [anchor,setAnchor]=useState<null | HTMLElement>(null)
    const open= Boolean(anchor)
    const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        setAnchor(e.currentTarget)
    }
    const handleClose=()=>{
        setAnchor(null)
    }
  return (
    <AppBar position='static'>
        <Toolbar>
           <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
              <CatchingPokemon/>
           </IconButton>
           <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                POKEMONAPP
           </Typography>
           <Stack direction='row' spacing={2}>
             <Button color='inherit'>  Features </Button>
             <Button color='inherit'>  Pricing </Button>
             <Button color='inherit'> About  </Button>
             <Button 
             color='inherit' 
             id='resources-button' 
             onClick={handleClick} 
             aria-control={open ? 'resources-menu' :undefined}
             aria-haspopup='true'
             aria-expanded={open ? 'true':undefined}
             endIcon={<KeyboardArrowDown
             />}
             > Resources  </Button>
             <Button color='inherit'>  LogIn </Button>
           </Stack>
            <Menu id='resources-menu'
              anchorEl={anchor}
              open={open}
              MenuListProps={{
                'aria-labelledby':'resources-button'
              }}
              onClose={
                handleClose
              }
              anchorOrigin={{
                vertical:'bottom',
                horizontal:'right'
              }}
            >
                      <MenuItem onClick={handleClose}>Blog</MenuItem>
                      <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}
