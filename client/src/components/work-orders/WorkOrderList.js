import { useState, useEffect } from "react"
import { WorkOrderCard } from "./WorkOrderCard"

export const WorkOrderList = ({
  setWoBikeId,
  allWorkOrders,
  getAllWorkOrders,
}) => {
  const [incompleteWorkOrders, setIncompleteWorkOrders] = useState([])

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
