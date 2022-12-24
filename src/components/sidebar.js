import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


function Sidebar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <MenuIcon style={{ width: '40px', height: '40px' }} />
        <HomeOutlinedIcon style={{ width: '40px', height: '40px' }} />
    </div>
  )
}

export default Sidebar
