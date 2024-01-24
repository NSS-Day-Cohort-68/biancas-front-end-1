import { useState } from "react"
import UserList from "./UserList"
import UserDetails from "./UserDetails"

export default function Users({ loggedInUser }) {
  const [detailsUserId, setDetailsUserId] = useState(null)

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <UserList setDetailsUserId={setDetailsUserId} user={loggedInUser} />
        </div>
        <div className="col-sm-4">
          <UserDetails detailsUserId={detailsUserId} />
        </div>
      </div>
    </div>
  )
}
