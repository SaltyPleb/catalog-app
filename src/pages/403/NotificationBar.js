import React from 'react'

const NotificationBar = () => {
  return (
    <div className="bar-wrapper">
        <div className="bar-wrapper__type">WARNING: </div>
        <div className="bar-wrapper__message"> This site is required authorization, to access all pages and functionality, please login</div>
    </div>
  )
}

export default NotificationBar