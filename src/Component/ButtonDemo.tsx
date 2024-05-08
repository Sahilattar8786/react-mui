import React ,{useState} from 'react';
import { FormatUnderlined,FormatBold,FormatItalic } from '@mui/icons-material';
import { Stack, TextField, ToggleButton, ToggleButtonGroup,InputAdornment} from '@mui/material';

export const ToggleButtonDemo =()=>{
   const [formats,setFormats]=useState<string[]>([]) ;

   const handleFormatChange=(e:React.MouseEvent<HTMLElement>,updatedFormats:string[])=>{
          setFormats(updatedFormats)
   }
   console.log(formats);
 return(
    <>
     <Stack margin={5}>
       <ToggleButtonGroup value={formats} onChange={handleFormatChange} size='small' color='success'>
         <ToggleButton value="underlined" aria-label='underlined'>
             <FormatUnderlined/>
         </ToggleButton>
         <ToggleButton  value="bold" aria-label='bold'>
            <FormatBold />
         </ToggleButton>
         <ToggleButton value ="italic" aria-label="italic">
             <FormatItalic/>
         </ToggleButton>
       </ToggleButtonGroup>
     </Stack>
    </>
 )
}

export const MuiTextFieldDemo=()=>{
    const[value,setValue]=useState('')
    return(
        <>
         <Stack spacing={4} margin={5} direction='row'>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
         </Stack>
         <Stack spacing={4} margin={5} direction='row'>
            <TextField label='Name' size='small'></TextField>
            <TextField label='Name' size="medium"></TextField>
         </Stack>
         <Stack spacing={4} margin={5} direction='row'>
            <TextField label="Form Input" required></TextField>
            <TextField label="Password" type="password" helperText="Dont Share Your Password With Anyone"></TextField>
            <TextField label="ReadOnly" InputProps={{readOnly:true}}></TextField>
         </Stack>
         <Stack spacing={4} margin={5} direction='row'>
            <TextField
             label="Amount"
             InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
             }}
            >
            </TextField>
            <TextField
             label="Weight"
             InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>
             }}
            >
            </TextField>
            <TextField label='form Input' required value={value} onChange={(e)=>setValue(e.target.value)} error={!value} helperText={!value ? 'Required':'Dont Share your Password'}></TextField>
         </Stack>
        </>
    )
}

