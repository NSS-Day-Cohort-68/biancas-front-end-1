import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { createUser, getUserByEmail } from "../../managers/userManager";

export default function Register({ setLoggedInUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [registrationFailure, setRegistrationFailure] = useState(false);

  const navigate = useNavigate();

  const registerNewUser = () => {
    const user = {
      firstName,
      lastName,
      userName,
      email,
      address,
      isAdmin,
    };
    createUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "biancas_user",
          JSON.stringify({
            id: createdUser.id,
            isAdmin: createdUser.isAdmin,
          }),
        );
        setLoggedInUser(createdUser);

        navigate("/");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserByEmail(email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        setRegistrationFailure(true);
      } else {
        // Good email, create user.
        registerNewUser();
      }
    });
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
      <h3>Sign Up</h3>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          invalid={registrationFailure}
          type="email"
          value={email}
          onChange={(e) => {
            setRegistrationFailure(false);
            setEmail(e.target.value);
          }}
        />
        <FormFeedback>
          Registration Failure - email already registered
        </FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label>User Name</Label>
        <Input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label>Address</Label>
        <Input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => {
              setIsAdmin(e.target.checked);
            }}
          />{" "}
          Admin User
        </Label>
      </FormGroup>
      <Button color="primary" onClick={handleSubmit}>
        Register
      </Button>
      <p>
        Already signed up? Log in <Link to="/login">here</Link>
      </p>
    </div>
  );
}
