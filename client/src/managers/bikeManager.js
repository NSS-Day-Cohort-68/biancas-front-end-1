import { fetchOptions } from "../helper"

const apiUrl = "http://localhost:8088/bikes"

export const getBikes = () => {
  return fetch(
    `${apiUrl}?_embed=workOrders&_expand=user&_expand=bikeType`
  ).then((res) => res.json())
}

export const getBikeById = (id) => {
  return fetch(
    `${apiUrl}/${id}?_embed=workOrders&_expand=user&_expand=bikeType`
  ).then((res) => res.json())
}

export const getBikesInShopCount = () => {
  return fetch(`http://localhost:8088/workOrders/?dateCompleted=`).then((res) =>
    res.json()
  )
}

export const getBikesByUser = (user) => {
  return fetch(
    `${apiUrl}?userId=${user.id}&_embed=workOrders&_expand=user&_expand=bikeType`
  ).then((res) => res.json())
}

export const getBikeTypes = () => {
  return fetch("http://localhost:8088/bikeTypes").then((res) => res.json())
}

export const addBike = (bike) => {
  return fetch(apiUrl, fetchOptions("POST", bike))
}

export const addBikeType = async (bikeType) => {
  return await fetch(
    "http://localhost:8088/bikeTypes",
    fetchOptions("POST", bikeType)
  )
}

export const deleteBike = async (bike) => {
  return await fetch(`${apiUrl}/${bike.id}`, fetchOptions("DELETE")).then(
    (res) => res.json()
  )
}
