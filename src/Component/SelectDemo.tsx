import { Box , TextField ,MenuItem} from '@mui/material'
import React,{useState} from 'react'

export default function SelectDemo() {
   const[country,setCountry]=useState<string[]>([]); 

   const handleChanege=(e:React.ChangeEvent<HTMLInputElement>)=>{
     const value =e.target.value;
     setCountry(typeof value ==='string' ? value.split(',') : value);
   }
  return (
    <div>
      <Box  width='250px' margin={5}>
          <TextField
           label="Select Country" 
           select value={country} 
           onChange={handleChanege} 
           fullWidth 
           SelectProps={{
            multiple:true
           }}
           size='small'
           color='secondary'
           helperText='Please Select Your Country'
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UAE">UAE</MenuItem>
          </TextField>
      </Box>
    </div>
  )
}
