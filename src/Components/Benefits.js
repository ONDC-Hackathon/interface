import React from 'react'

function Benefits(props) {
  return (
    <div
      style={{ width: 'max-content', marginBottom: '20px' }}
      className="text-left text-white flex flex-row gap-3"
    >
      <div className="flex items-center">
        {' '}
        <img style={{}} src={props.icon} alt="" />{' '}
      </div>
      <div>
        <h1 className="font-extrabold">{props.heading}</h1>
        <p style={{ fontSize: '0.7rem' }}>{props.desc}</p>
      </div>
    </div>
  )
}

export default Benefits
