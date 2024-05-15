import React ,{useState} from 'react'
import { Accordion,AccordionSummary,AccordionDetails, Typography ,Box } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
export default function AccordionComponent() {
   const[expanded,setExpanded]=useState< string | false>(false)
   
   const handleChange=(isExapanded:boolean, panel:string) =>{
    setExpanded(isExapanded?panel:false)
   }
  return (
    <div>
        <Box margin={10}>
        <Accordion expanded={expanded === 'panel1'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
         <AccordionSummary 
         id='panel1-header'
         aria-controls='panel1-content'
         expandIcon={<ExpandMore/>}
         
         >
           <Typography>Accordian 1</Typography>
         </AccordionSummary>
         <AccordionDetails>
             Accordion Details
         </AccordionDetails>
       </Accordion>
       <Accordion expanded={expanded === 'panel2'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
         <AccordionSummary 
         id='panel2-header'
         aria-controls='panel2-content'
         expandIcon={<ExpandMore/>}
         
         >
           <Typography>Accordian 2</Typography>
         </AccordionSummary>
         <AccordionDetails>
             Accordion Details
         </AccordionDetails>
       </Accordion>
       <Accordion expanded={expanded === 'panel3'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
         <AccordionSummary 
         id='panel2-header'
         aria-controls='panel2-content'
         expandIcon={<ExpandMore/>}
         
         >
           <Typography>Accordian 3</Typography>
         </AccordionSummary>
         <AccordionDetails>
             Accordion Details
         </AccordionDetails>
       </Accordion>
       
        </Box>
       
    </div>
  )
}
