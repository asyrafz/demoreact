import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
  return (
    <header style={{ display: 'flex', padding: '10px 0' }}>
        <div>YouTube</div>
        <div style={{ margin: '0 auto' }}>
            <div style={{ padding: '6px', border: '1px solid gray', width: '100%', borderRadius: '40px', display: 'flex', alignItems: 'center' }}>
                <input className='input-search' placeholder='Search' />
                <SearchOutlinedIcon />
            </div>
        </div>
        <div>right</div>
    </header>
  )
}

export default Header