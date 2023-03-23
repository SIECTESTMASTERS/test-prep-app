import { useTheme } from '@emotion/react';
import React, { useState } from 'react'
import Sidebar from '../components/global/sidebar/Sidebar'
import Topbar from '../components/global/topbar/Topbar'
import { tokens } from '../theme';
import { Button, Box, Typography} from '@mui/material';
import HeaderDash from '../components/DashboardComponents/HeaderDash';
import AdminDashboard from './Dashboard/AdminDashboard';
import { Routes, Route } from 'react-router';

function Global() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className='app'>
      <Sidebar isSidebar={isSidebar}/>
    </div>
  )
}

export default Global;
