export const getWorkOrders = async () => {
  const response = await fetch("http://localhost:8088/workOrders?_expand=bike")
  return await response.json()
}
