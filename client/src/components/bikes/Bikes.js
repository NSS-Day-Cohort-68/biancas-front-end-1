import { useEffect, useState } from "react"
import BikeList from "./BikeList"
import BikeDetails from "./BikeDetails"
import { Button } from "reactstrap"
import { Link, useNavigate } from "react-router-dom"

export default function Bikes() {
  const [detailsBikeId, setDetailsBikeId] = useState(null)

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <Link to="/newbike">
            <Button>New Bike</Button>
          </Link>
          <BikeList setDetailsBikeId={setDetailsBikeId} />
        </div>
        <div className="col-sm-4">
          <BikeDetails detailsBikeId={detailsBikeId} />
        </div>
      </div>
    </div>
  )
}
