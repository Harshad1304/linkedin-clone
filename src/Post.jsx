import React, { forwardRef, useState } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendIcon from '@mui/icons-material/Send';


const Post = forwardRef(({name, description, message, photoUrl},ref)=>{

    return (
    <div ref={ref} className='post'>
        <div className="post-header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
             <div className="post-info">
                <h2>{name}</h2>
                <p>{description}</p>
             </div>
        </div>
        <div className="post-body">
            <p>{message}</p>
        </div>

        <div className="post-buttons">
            <InputOption title='Like' color='gray' Icon={ThumbUpOffAltIcon} />
            <InputOption title='Comment' color='gray' Icon={CommentIcon} />
            <InputOption title='Share' color='gray' Icon={ShareOutlinedIcon} />
            <InputOption title='Send' color='gray' Icon={SendIcon} />
        </div>
    </div>
  )
})

export default Post