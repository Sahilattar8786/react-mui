import React ,{useState} from 'react'
import {Autocomplete, Stack, TextField} from '@mui/material'
export default function AutoCompleteDemo() {
  
  const skills=['HTML','CSS','JavaScript','MUI']  
  const [value,setValue]=useState<string | null>(null)
  return (
    <div>
      <Stack spacing={2} width='250px'>
        <Autocomplete 
         options={skills}
         renderInput={(params)=><TextField {...params} label="Skills"/>}
         value={value}
         onChange={(e:any,newValue:string | null)=>setValue(newValue)}
        />
      </Stack>
    </div>
  )
}
