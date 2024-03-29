import { useState } from "react"
import BikeList from "./BikeList"
import BikeDetails from "./BikeDetails"

export default function Bikes({ loggedInUser, getInventory }) {
  const [detailsBikeId, setDetailsBikeId] = useState(null)

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <BikeList setDetailsBikeId={setDetailsBikeId} user={loggedInUser} />
        </div>
        <div className="col-sm-4">
          <BikeDetails
            detailsBikeId={detailsBikeId}
            user={loggedInUser}
            getInventory={getInventory}
          />
        </div>
      </div>
    </div>
  )
}
