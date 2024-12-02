import React from 'react'
import "./HeaderOptions.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOptions({avatar ,Icon, title, onClick}) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className='header-options'>
        {Icon && <Icon className='header-options-icon' />}
        {avatar&&(
            <Avatar className="header-options-icon" src={user?.photoUrl||'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'}>{user?.email[0].toUpperCase()}</Avatar>
        )}
        <h3 className='header-options-title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions