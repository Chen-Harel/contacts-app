import React from 'react'

const Avatar = (props) => {
  return (
    <div><img className="circle-img" src={props.img} alt="img" /></div>
  )
}

export default Avatar