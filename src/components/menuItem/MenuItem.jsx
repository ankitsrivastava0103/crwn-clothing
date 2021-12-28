import React from 'react'
import './MenuItem.scss'
import { useNavigate } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const navigate = useNavigate()
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`hats`)}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='background-image'
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  )
}

export default MenuItem
