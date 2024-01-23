import { useState } from "react"
import BikeDetails from "../bikes/BikeDetails"
import { WorkOrderList } from "./WorkOrderList"

export const WorkOrders = () => {
  const [woBikeId, setWoBikeId] = useState(null)

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <WorkOrderList setWoBikeId={setWoBikeId} />
        </div>
        <div className="col-sm-4">
          <BikeDetails detailsBikeId={woBikeId} />
        </div>
      </div>
    </div>
  )
}
