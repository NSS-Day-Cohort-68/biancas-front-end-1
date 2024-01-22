const apiUrl = "http://localhost:8088/bikeTypes"

export const getTypeById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json())
}
