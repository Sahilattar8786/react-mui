import React from 'react'
import {Box,Card,CardActions,CardContent,Typography,Button, CardMedia} from '@mui/material'
export default function CardComponent() {
  return (
    <div>
      <Box width='300px'>
       <Card>
        <CardMedia
         component='img'
         height='140'
         image='https://tse3.mm.bing.net/th?id=OIP.-BpvNzwkSx9w9LdAK1qzcgHaGo&pid=Api&P=0&h=180'
         alt="React-logo"
        />
         <CardContent>
            <Typography gutterBottom variant='h5' component='div'>React</Typography>
             <Typography variant='body2' color='text.secondary'>
                This is a demo card for react js framework
             </Typography>
         </CardContent>
         <CardActions>
             <Button size='small'>Share</Button>
             <Button size='small'>Learn More </Button>
         </CardActions>
       </Card>
      </Box>
    </div>
  )
}
