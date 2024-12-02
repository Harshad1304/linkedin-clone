import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {

  const newsArticle = (heading,subtitle)=>(
    <div className='widgets-article'>
      <div className="widgets-article-left">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets-article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  
  return (
    <div className='widgets'>
      <div className="widgets-header">
        <h2 className='widgets-header'>LinkdIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("The Future of Tech", "AI is revolutionizing industries worldwide.")}
      {newsArticle("Breaking: Market Soars", "Stocks hit record highs amid optimistic forecasts.")}
      {newsArticle("Sports Update", "The underdogs claim a historic victory in the finals.")}
      {newsArticle("The Future of Tech", "AI is revolutionizing industries worldwide.")}
      {newsArticle("Breaking: Market Soars", "Stocks hit record highs amid optimistic forecasts.")}
      {newsArticle("Sports Update", "The underdogs claim a historic victory in the finals.")}
      {newsArticle("The Future of Tech", "AI is revolutionizing industries worldwide.")}
      
    </div>
  )
}

export default Widgets