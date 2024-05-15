import React from 'react'
import { Paper,Grid, } from '@mui/material'
export default function PapelModel() {
  return (
    <>
      <Paper sx={{
        padding:'20px',
        margin:'20px'
      }}>
        <Grid container>
            <Grid item xs={6}>
                 Item 1
            </Grid>
            <Grid item xs={6}>
                 Item 1
            </Grid>
            <Grid item xs={6}>
                 Item 1
            </Grid>
            <Grid item xs={6}>
                 Item 1
            </Grid>
        </Grid>
     </Paper>
    </>
  )
}
/*
   1.A Paper Component - is surface related component 
   2.It provide Visual Herarchiey 
   ex- login page and sign Up Page is used as card and it have box shadow 
    
*/