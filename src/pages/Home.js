import { useAuth0 } from '@auth0/auth0-react'

function Home() {
  const { isLoading, user } = useAuth0()
  // console.log(user)

  if (isLoading) {
    return <div>Loading</div>
  }

  if (user) {
    return (
      <>
        <h2>Home</h2>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <img src={user.picture} alt={user.name} width="100" height="100" />
      </>
    )
  }

  return (
    <>
      <h2>Home</h2>
    </>
  )
}

export default Home
