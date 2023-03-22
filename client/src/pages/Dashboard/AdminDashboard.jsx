import React, { useState } from 'react'
import Sidebar from '../../components/global/sidebar/Sidebar'
import Topbar from '../../components/global/topbar/Topbar'

function AdminDashboard() {
    const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className='app'>
      <Sidebar isSidebar={isSidebar}/>
      <main className='content'>
        <Topbar setIsSidebar={isSidebar}/>
      </main>
    </div>
  )
}

export default AdminDashboard
