import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOptions from './HeaderOptions';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch,  } from 'react-redux';
import { logout,  } from './features/userSlice';
import { getAuth } from 'firebase/auth';

function Header() {
  const auth = getAuth();
  const dispatch = useDispatch();
  

  const logoutOfApp = ()=>{
      dispatch(logout());
      auth.signOut();
  }
  return (
    <div className='header'>
        <div className="header-left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

            <div className="header-search">
                <SearchIcon />
                <input placeholder='Search' type="text" />
            </div>
        </div>

        <div className="header-right">
            <HeaderOptions Icon={HomeIcon}  title ='Home' />
            <HeaderOptions Icon={SupervisorAccountIcon} title ='My Network' />
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOptions Icon={ChatIcon} title="Messaging" />
            <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
            <HeaderOptions onClick={logoutOfApp} avatar={true} title="me" />
            
        </div>
    </div>
  )
}

// https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg
export default Header