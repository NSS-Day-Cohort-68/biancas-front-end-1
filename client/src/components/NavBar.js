import { useEffect, useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";
import { getBikesInShopCount } from "../managers/bikeManager";

export default function NavBar({ loggedInUser, setLoggedInUser }) {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);

  const getInventory = () => {
    //implement functionality here....
    getBikesInShopCount().then((bikeArray) => setInventory(bikeArray))
  }; 

  useEffect(() => {
    loggedInUser && getInventory();
  }, [loggedInUser]);

  return (
    <div>
      <Navbar color="light" light fixed="true" expand="lg">
        <NavbarBrand className="mr-auto" tag={RRNavLink} to="/">
          <img
            src="./bike.png"
            alt="bike"
            height={50}
            style={{ marginRight: "8px" }}
          />
          Bianca's Bike Shop
        </NavbarBrand>
        {loggedInUser ? (
          <>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={open} navbar>
              <Nav navbar>
                <NavItem onClick={() => setOpen(false)}>
                  <NavLink tag={RRNavLink} to="/bikes">
                    Bikes
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => setOpen(false)}>
                  <NavLink tag={RRNavLink} to="/workorders">
                    Work Orders
                  </NavLink>
                </NavItem>
                {loggedInUser.isAdmin && (
                  <NavItem onClick={() => setOpen(false)}>
                    <NavLink tag={RRNavLink} to="/employees">
                      Employees
                    </NavLink>
                  </NavItem>) &&
                  (<NavItem>
                    <NavLink>
                      <NavbarText style={{ marginRight: "4px" }}>
                        Bikes in Garage: {inventory.length}
                      </NavbarText>
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
           
            <Button
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                setLoggedInUser(null);
                localStorage.removeItem("biancas_user");
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/login">
                <Button color="primary">Login</Button>
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
}
