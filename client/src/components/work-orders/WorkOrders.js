import { useState } from "react"
import BikeDetails from "../bikes/BikeDetails"
import { WorkOrderList } from "./WorkOrderList"
import { getWorkOrders } from "../../managers/workOrderManager"

export const WorkOrders = ({ loggedInUser, getInventory }) => {
  const [woBikeId, setWoBikeId] = useState(null)
  const [allWorkOrders, setAllWorkOrders] = useState([])

  const getAllWorkOrders = () => {
    if (loggedInUser?.isAdmin) {
      getWorkOrders().then((woArray) => {
        setAllWorkOrders(woArray)
      })
    } else {
      getWorkOrders().then((allWoArray) => {
        const userWorkOrders = allWoArray.filter(
          (wo) => wo.bike.userId === loggedInUser?.id
        )
        setAllWorkOrders(userWorkOrders)
      })
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <WorkOrderList
            setWoBikeId={setWoBikeId}
            allWorkOrders={allWorkOrders}
            getAllWorkOrders={getAllWorkOrders}
          />
        </div>
        <div className="col-sm-4">
          <BikeDetails
            detailsBikeId={woBikeId}
            setDetailsBikeId={setWoBikeId}
            user={loggedInUser}
            getAllWorkOrders={getAllWorkOrders}
            getInventory={getInventory}
          />
        </div>
      </div>
    </div>
  )
}
