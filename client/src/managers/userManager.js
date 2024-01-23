import { fetchOptions } from "../helper"

const apiUrl = "http://localhost:8088/users"

export const getUserByEmail = (email) => {
  return fetch(`${apiUrl}?email=${email}`).then((res) => res.json())
}
export const getUserById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json())
}

export const getUsers = () => {
  return fetch(`${apiUrl}`).then((res) => res.json())
}

export const createUser = (user) => {
  return fetch(apiUrl, fetchOptions("POST", user)).then((res) => res.json())
}
