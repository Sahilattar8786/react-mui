import React, { ChangeEvent, useState } from 'react'
import {Rating, Stack} from '@mui/material'
import { Favorite ,FavoriteBorder } from '@mui/icons-material';
export default function RatingDemo() {
    const[value,setValue]=useState<number| null>(null);

    const handleClick=(e:React.ChangeEvent<{}>, newValue:number | null)=>{
           setValue(newValue)
    }
    console.log(value)
  return (
    <div>
       <Stack spacing={2} margin={5}>
        <Rating value={value} 
        onChange={handleClick} 
        precision={0.5} 
        icon={<Favorite fontSize='inherit' color='error'/>}
        emptyIcon={<FavoriteBorder/>}
        />
       </Stack> 
    </div>
  )
}
