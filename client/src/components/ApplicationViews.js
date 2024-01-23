import { Route, Routes } from "react-router-dom"
import Bikes from "./bikes/Bikes"
import { AuthorizedRoute } from "./auth/AuthorizedRoute"
import Login from "./auth/Login"
import Register from "./auth/Register"
import { NewWorkOrder } from "./workOrders/NewWorkOrder"
import { BikeForm } from "./forms/BikeForm.js"
import { WorkOrders } from "./work-orders/WorkOrders"

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
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
              <WorkOrders loggedInUser={loggedInUser} />
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
          path="neworder/:bikeId"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <NewWorkOrder user={loggedInUser} />
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
        <Route
          path="newbike"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <BikeForm loggedInUser={loggedInUser} />
            </AuthorizedRoute>
          }
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  )
}
