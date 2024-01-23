import { useState } from "react"
import BikeList from "./BikeList"
import BikeDetails from "./BikeDetails"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"

export default function Bikes({ loggedInUser }) {
  const [detailsBikeId, setDetailsBikeId] = useState(null)

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <Link to="/newbike">
            <Button>New Bike</Button>
          </Link>
          <BikeList setDetailsBikeId={setDetailsBikeId} user={loggedInUser} />
        </div>
        <div className="col-sm-4">
          <BikeDetails detailsBikeId={detailsBikeId} />
        </div>
      </div>
    </div>
  )
}
