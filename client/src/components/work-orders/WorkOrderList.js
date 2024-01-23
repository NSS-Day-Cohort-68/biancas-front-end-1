import { useState, useEffect } from "react"
import { getWorkOrders } from "../../managers/workOrderManager"
import { WorkOrderCard } from "./WorkOrderCard"

export const WorkOrderList = ({ setWoBikeId, loggedInUser }) => {
  const [allWorkOrders, setAllWorkOrders] = useState([])
  const [incompleteWorkOrders, setIncompleteWorkOrders] = useState([])

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

  useEffect(() => {
    getAllWorkOrders()
  }, [])

  useEffect(() => {
    const incompleteWOs = allWorkOrders.filter((wo) => !wo.dateCompleted)
    setIncompleteWorkOrders(incompleteWOs)
  }, [allWorkOrders])

  return (
    <>
      <h2>Open Work Orders</h2>
      {incompleteWorkOrders.map((wo) => (
        <WorkOrderCard key={`wo-${wo.id}`} wo={wo} setWoBikeId={setWoBikeId} />
      ))}
    </>
  )
}
