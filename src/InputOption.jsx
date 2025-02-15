import React from 'react'
import './InputOption.css'

function InputOption({Icon, title,color,onClick}) {
  return (
    <div onClick={onClick} className='input-option'>
        <Icon style={{color:color}}/>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption