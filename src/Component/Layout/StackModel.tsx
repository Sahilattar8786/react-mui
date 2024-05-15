import React from 'react'
import {Box, Stack,Divider} from '@mui/material'
export default function StackModel() {
  return (
    <Stack sx={{border:'1px solid'}} 
    direction='row'
    spacing={2}
    divider={<Divider orientation='vertical' flexItem />}
    >
      <Box sx ={{
        backgroundColor:'primary.main',
        color: 'white',
        height:'100px',
        width:'100px',
        padding:'16px',
        '&:hover':{
            backgroundColor:'primary.light',

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
    </Stack>
  )
}
/*
 Stack COmponennt -
    - Stack Component Manage lAYout in One Dimmention 
     e.g Verticle & Horizontal 


*/