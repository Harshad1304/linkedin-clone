import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic)=>(
        <div className="sidebar-recent-item">
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <img src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <Avatar src={user.photoUrl} className='sidebar-avatar'>{user.email[0].toUpperCase()}</Avatar> 
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p>Who viewed you</p>
                <p className='sidebar-statNum'>2,423</p>
            </div>
            <div className="sidebar-stat">
                <p>Views on post</p>
                <p className='sidebar-statNum'>3,323</p>    
            </div>
        </div>

        <div className="sidebar-bottom">
            <p>Recent</p>
            {recentItem('reatJs')}
            {recentItem('programming')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar