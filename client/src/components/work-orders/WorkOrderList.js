import { useState, useEffect } from "react"
import { getWorkOrders } from "../../managers/workOrderManager"
import { WorkOrderCard } from "./WorkOrderCard"

export const WorkOrderList = () => {
  const [allWorkOrders, setAllWorkOrders] = useState([])

  const getAllWorkOrders = () => {
    getWorkOrders().then((woArray) => {
      setAllWorkOrders(woArray)
    })
  }

  useEffect(() => {
    getAllWorkOrders()
  }, [])

  return (
    <>
      <h2>Work Orders</h2>
      {allWorkOrders.map((wo) => (
        <WorkOrderCard key={`wo-${wo.id}`} wo={wo} />
      ))}
    </>
  )
}
