import React from 'react'
import {Box, Grid} from '@mui/material';
export default function GridModel() {
  return (
    <div>
      <Grid container >
        <Grid item xs={12} sm={6} >
            <Box bgcolor='primary.light'>Item 1</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light'>Item 2</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light'>Item 3</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light'>Item 4</Box>
        </Grid>
      </Grid>
    </div> 
  )
}

/*
 Grid Container -
              1.The Grid Component under the hood uses the flexbox module 
              2.The Grid Consists of 12 columns
              3.Each item in the grid can take up to one or more columns as its width
              4.There are five breakpoints each corresponding to a certain device width 
              5.xs for mobile device size , sm for tablet , md for desktop ,lg and xl for 
*/ 