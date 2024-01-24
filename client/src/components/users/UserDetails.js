import { useState, useEffect } from "react"
import { Card, CardTitle, CardSubtitle, CardBody, CardText } from "reactstrap"
import { getUserById } from "../../managers/userManager"

export default function UserDetails({ detailsUserId }) {
  const [user, setUser] = useState(null)

  const getUserDetails = (id) => {
    getUserById(id).then(setUser)
  }

  useEffect(() => {
    if (detailsUserId) {
      getUserDetails(detailsUserId)
    }
  }, [detailsUserId])

  if (!user) {
    return (
      <>
        <h2>User Details</h2>
        <p>Please choose a user...</p>
      </>
    )
  }
  return (
    <>
      <h2>User Details</h2>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">{user.firstName} {user.lastName}</CardTitle>
          <p>
            Username: {user.userName} 
          </p>
          <p>Address: {user.address}</p>
          <p>Email: {user.email}</p>
        </CardBody>
      </Card>
    </>
  )
}
