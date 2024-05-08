import { Box, FormControl, FormGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
import React, { useState } from 'react'
import { BookmarkBorder , Bookmark } from '@mui/icons-material';
export default function CheckBoxDemo() {
  const [acceptInc, setAcceptInc] = useState(false);
  const[skills,setSkills]=useState<string[]>([])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptInc(e.target.checked);
  }
  const handleSkillChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const index=skills.indexOf(e.target.value);
    if(index ===-1){
        setSkills([...skills, e.target.value]);
    } else {
        setSkills(skills.filter((skill)=>skill!=e.target.value))
    }
  }
  console.log(skills)
  return (
    <div>
      <Box>
        <FormControlLabel
          label='I Accept Terms And Conditions'
          control={<Checkbox checked={acceptInc} onChange={handleChange} />}
        />
      </Box>
      <Box>
         <Checkbox 
         icon={<Bookmark/>}
         checkedIcon={<Bookmark/>}
         checked={acceptInc}
         onChange={handleChange}
          />
      </Box>
      <Box>
         <FormControl>
            <FormLabel>Skills</FormLabel>
             <FormGroup>
                <FormControlLabel
                 label='HTML'
                 control={<Checkbox 
                            value="HTML"
                            checked={skills.includes('HTML')}
                            onChange={handleSkillChange}
                          ></Checkbox>}
                />
                  <FormControlLabel
                 label='CSS'
                
                 control={<Checkbox 
                            value="CSS"
                            checked={skills.includes('CSS')}
                            onChange={handleSkillChange}
                          ></Checkbox>}
                />
                  <FormControlLabel
                 label='JAVASCRIPT'
                 control={<Checkbox 
                            value="JavaScript"
                            checked={skills.includes('JavaScript')}
                            onChange={handleSkillChange}
                          ></Checkbox>}
                />

             </FormGroup>
         </FormControl>
      </Box>
    </div>
  )
}
