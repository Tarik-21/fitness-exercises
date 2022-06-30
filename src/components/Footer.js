import React from 'react'
import {Box,Stack,Typography} from  '@mui/material'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#e6eefa"> 
    <Stack gap="40px" alignItems="center" px="40px" pt="24px">
      <img src={Logo} alt="logo" width="100px" height="100px" />
      <Typography variant='p' pb="40px" >
        By Mouhouch Tarik
      </Typography>

    </Stack>

    </Box>
  )
}

export default Footer