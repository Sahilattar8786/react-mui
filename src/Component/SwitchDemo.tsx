import React, {useState} from 'react'
import {Box,FormControlLabel,FormGroup,Switch} from '@mui/material';
export default function SwitchDemo() {
  const [checked,setChecked]=useState(false)
  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setChecked(e.target.checked)
  }
  console.log(checked)
  return (
    <div>
      <Box>
        <FormControlLabel label='Dark Mode' control={<Switch checked={checked} onChange={handleChange}/>}  />
      </Box>
      <Box>
        <FormGroup>
          
        </FormGroup>
      </Box>
    </div>
  )
}
