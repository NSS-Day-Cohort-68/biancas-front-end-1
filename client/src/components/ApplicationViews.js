import { Route, Routes } from "react-router-dom"
import Bikes from "./bikes/Bikes"
import { AuthorizedRoute } from "./auth/AuthorizedRoute"
import Login from "./auth/Login"
import Register from "./auth/Register"
import { useState } from "react"
import Users from "./users/Users"

export default function ApplicationViews({ loggedInUser, setLoggedInUser}) {


  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Bikes loggedInUser={loggedInUser} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="bikes"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Bikes loggedInUser={loggedInUser} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="workorders"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <p>Work Orders</p>
            </AuthorizedRoute>
          }
        />
        <Route
          path="employees"
          element={
            <AuthorizedRoute admin={true} loggedInUser={loggedInUser}>
              <p>Employees</p>
            </AuthorizedRoute>
          }
        />
        <Route
          path="users"
          element={
            <AuthorizedRoute admin={true} loggedInUser={loggedInUser}>
              <Users/> 
            </AuthorizedRoute>
          }
        />
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  )
}
