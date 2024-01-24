import { fetchOptions } from "../helper"

const apiUrl = "http://localhost:8088/workOrders"

export const getWorkOrders = async () => {
  const response = await fetch(`${apiUrl}?_expand=bike`)
  return await response.json()
}

export const createWorkOrder = async (workOrder) => {
  return await fetch(apiUrl, fetchOptions("POST", workOrder)).then((res) =>
    res.json()
  )
}

export const updateWorkOrder = async (workOrder) => {
  return await fetch(
    `${apiUrl}/${workOrder.id}`,
    fetchOptions("PUT", workOrder)
  ).then((res) => res.json())
}

export const findOpenWorkOrder = (workOrders) => {
  for (const wo of workOrders) {
    if (wo.dateCompleted === "") {
      return wo
    }
  }
  return null
}
