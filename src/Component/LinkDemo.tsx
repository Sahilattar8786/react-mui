import React from 'react'
import { Link, Stack } from '@mui/material'

export default function LinkDemo() {
  return (
    <div>
      <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary' underline='none'>Secondary</Link>
        <Link href='#' color='secondary' underline='hover' >
            Third
        </Link>
        <Link 
        href='#'
        color='secondary' 
        underline='always'>
            Link 4
        </Link>
      </Stack>
    </div>
  )
}
