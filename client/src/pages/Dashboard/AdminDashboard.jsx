import { Box, Button } from '@mui/material'
import React from 'react'
import Global from '../Global'
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

  return (
    <div className='app'>
      <Global />
      <Box m='20px'>
      <Button sx={{
        backgroundColor: colors.blueAccent[700],
        color: colors.grey[100],
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
      }}
      >
        <Link to='/addstudent'>Add New Student</Link>
        </Button>
    </Box>
    </div>  
  )
}

export default AdminDashboard
