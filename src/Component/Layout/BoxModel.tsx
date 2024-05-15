import React from 'react'
import {Box} from '@mui/material'
export default function BoxModel() {
  return (
    <>
      
      <Box sx={{
        backgroundColor:'primary.main',
        color:'white',
        height:'100px',
        width: '100px',
        padding:'16px',
        '&:hover':{
            backgroundColor:'primary.light'
        }
      }}>
           Sahil Attar
      </Box>
      <Box
         display='flex'
         height='100px'
         width='100px'
         bgcolor='success.light'
         p={2}
         >

      </Box>

     
     
    </>
  )
}

/*
 Box Componnet  is Replacement of Div Tag 
 Box Component has sx tag whih can handle custom style of theme 
 In Div Tag You cannt access specified theme props 


*/