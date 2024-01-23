import { useState, useEffect } from "react"
import { getWorkOrders } from "../../managers/workOrderManager"
import { WorkOrderCard } from "./WorkOrderCard"

export const WorkOrderList = ({ setWoBikeId }) => {
  const [allWorkOrders, setAllWorkOrders] = useState([])
  const [incompleteWorkOrders, setIncompleteWorkOrders] = useState([])

  const getAllWorkOrders = () => {
    getWorkOrders().then((woArray) => {
      setAllWorkOrders(woArray)
    })
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
