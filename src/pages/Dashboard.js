import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function Dashboard() {
  const { isLoading, user } = useAuth0()
  // console.log(user)

  if (isLoading) {
    return <div>Loading</div>
  }
  return (
    <>
      <h2>Dashboard</h2>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <img src={user.picture} alt={user.name} width="100" height="100" />
    </>
  )
}

export default Dashboard
