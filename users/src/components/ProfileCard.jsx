import React from 'react'

const ProfileCard = ({user}) => {
  return (
    <div className='card user'>
      <h2>{user.name}</h2>
      <p>{user.email.toLowerCase()}</p>
    </div>
  )
}

export default ProfileCard