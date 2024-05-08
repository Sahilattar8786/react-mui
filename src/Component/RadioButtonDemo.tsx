import React ,{ChangeEvent, useState} from 'react'
import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio, FormHelperText} from '@mui/material'
export default function RadioButtonDemo() {
  const [value,setValue]=useState<string>('')

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
     setValue(e.target.value as string);
  }
  console.log(value);
  return (
    <div>
      <Box>
        <FormControl>
          <FormLabel id ="job-experience-group-label">
              Years Of Experiance
          </FormLabel>
          <RadioGroup row aria-label="Job Experiance Group" name="job-experience-group" onChange={handleChange} >
             <FormControlLabel control={<Radio size='medium' color='primary' />} label='0-2' value='0-2'></FormControlLabel>
             <FormControlLabel control={<Radio/>} label='3-5' value='3-5'></FormControlLabel>
             <FormControlLabel control={<Radio/>} label='5-10' value='5-10'></FormControlLabel>
          </RadioGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </div>
  )
}
