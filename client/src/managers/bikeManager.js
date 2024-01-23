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
  // add implementation here...
  return fetch(
    `http://localhost:8088/workOrders/?dateCompleted=`
  ).then((res) => res.json())
 };



export const getBikesByUser = (user) => {
  return fetch(
    `${apiUrl}?userId=${user.id}&_embed=workOrders&_expand=user&_expand=bikeType`
  ).then((res) => res.json())
}

export const addBike = (bike) => {
  return fetch(`http://localhost:8088/bikes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bike),
  })
}
