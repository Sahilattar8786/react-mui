import React ,{useState} from 'react'
import {Autocomplete, Stack, TextField} from '@mui/material'

type Skill ={
    id:number ,
    label:string
}
const skills=['HTML','CSS','JavaScript','MUI']  
const skillsOptions=skills.map((skill,index)=>({
    id:index+1,
    label:skill
}))
export default function AutoCompleteDemo() {
  
 
  const [value,setValue]=useState<string | null>(null)
  const [skill,setSkill]=useState<Skill |null>(null)
  console.log(skill)
  return (
    <div>
      <Stack spacing={2} width='250px'>
        <Autocomplete 
         options={skills}
         renderInput={(params)=><TextField {...params} label="Skills"/>}
         value={value}
         onChange={(e:any,newValue:string | null)=>setValue(newValue)}
         freeSolo
        />
      </Stack>
      <Stack spacing={2} width='250px'>
        <Autocomplete 
         options={skillsOptions}
         renderInput={(params)=><TextField {...params} label="Skills"/>}
         value={skill}
         onChange={(e:any,newValue:Skill | null)=>setSkill(newValue)}
        />
      </Stack>
    </div>
  )
}
