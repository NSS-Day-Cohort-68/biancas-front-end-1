import { Navigate } from "react-router-dom";

// This component returns a Route that either display the prop element
// or navigates to the login. If admin is provided, the logged in user must be an admin to see the route
export const AuthorizedRoute = ({ children, loggedInUser, admin }) => {
  const authed = !!loggedInUser && (admin ? loggedInUser.isAdmin : true);

  return authed ? children : <Navigate to="/login" />;
};
