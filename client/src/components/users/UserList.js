import { useState, useEffect } from "react"
import UserCard from "./UserCard"
import { getUsers, getUserById } from "../../managers/userManager"

export default function UserList({ setDetailsUserId }) {
  const [users, setUsers] = useState([])

  const getAndSetUsers = () => {
      getUsers().then(setUsers)
  }

  useEffect(() => {
    getAndSetUsers()
  }, []) //! getAndSetBikes dependency causes infinite loop

  return (
    <>
      <h2>Users</h2>
      {users.map((user) => (
        <UserCard
          user={user}
          setDetailsUserId={setDetailsUserId}
          key={`user-${user.id}`}
        ></UserCard>
      ))}
    </>
  )
}