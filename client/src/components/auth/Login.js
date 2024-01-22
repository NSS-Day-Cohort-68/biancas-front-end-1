import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { getUserByEmail } from "../../managers/userManager";

export default function Login({ setLoggedInUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "biancas_user",
          JSON.stringify({
            id: user.id,
            isAdmin: user.isAdmin,
          }),
        );
        setLoggedInUser(user);

        navigate("/");
      } else {
        setFailedLogin(true);
      }
    });
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
      <h3>Login</h3>
      <FormGroup>
        <Label>Email</Label>
        <Input
          invalid={failedLogin}
          type="text"
          value={email}
          onChange={(e) => {
            setFailedLogin(false);
            setEmail(e.target.value);
          }}
        />
        <FormFeedback>Login failed.</FormFeedback>
      </FormGroup>
      <Button color="primary" onClick={handleSubmit}>
        Login
      </Button>
      <p>
        Not signed up? Register <Link to="/register">here</Link>
      </p>
    </div>
  );
}
