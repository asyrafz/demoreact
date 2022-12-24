import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import utubeLogo from '../youtube.png';
import {BsBell} from 'react-icons/bs';
import {BiVideoPlus} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';

function Header() {
  return (
    <header style={{ display: 'flex', padding: '10px 0'}}>
     
        <img style={{ width: 100, height: 25}} src={utubeLogo} alt="Youtube" />
        
        <div style={{ margin: '0 auto' }}>
            <div style={{ padding: '6px', border: '1px solid gray', width: '100%', borderRadius: '40px', display: 'flex', alignItems: 'center' }}>
                <input className='input-search' placeholder='Search' />
                <SearchOutlinedIcon/>
            </div>
        </div>

        <div style={{ display: 'flex', margin:'0 10px', padding: '0 5px'}}>
          <BiVideoPlus style={{ width: '25px', height: '25px', padding: '0 5px'}}/>
          <BsBell style={{ width: '25px', height: '25px', padding: '0 5px'}}/>
          
          <CgProfile style={{ width: '25px', height: '25px', padding: '0 5px'}}/>
        </div>
    </header>
  )
}

export default Header