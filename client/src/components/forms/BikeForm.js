import { useEffect, useState } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"
import { getUsers } from "../../managers/userManager.js"
import { addBike, getBikes } from "../../managers/bikeManager.js"
import { useNavigate } from "react-router-dom"

export const BikeForm = ({ loggedInUser }) => {
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "Yellow",
    "Silver",
    "Orange",
    "Brown",
    "Gray",
    "Purple",
    "White",
    "Sky Blue",
    "Gold",
    "Bronze",
    "Pink",
  ]

  const brands = [
    "VelocityCruiser",
    "AeroBlitzBikes",
    "EcoCommute",
    "UrbanRider",
    "ExtremeThrill",
    "SwiftElectric",
    "FoldMaster",
    "CruiseKing",
    "GravelMaster",
    "CityCommuter",
    "TwoWheels",
    "Bikes-R-Us",
    "DiscountBikes",
    "BigCityJumper",
    "BunnyHopper",
  ]

  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const [bikes, setBikes] = useState([])

  const [newUser, setNewUser] = useState("")
  const [newType, setNewType] = useState("")
  const [newColor, setNewColor] = useState("")
  const [newBrand, setNewBrand] = useState("")

  useEffect(() => {
    getUsers().then((usersArray) => setUsers(usersArray))
  }, [])

  useEffect(() => {
    getBikes().then((bikesArray) => setBikes(bikesArray))
  }, [])

  const handleClick = (e) => {
    e.preventDefault()

    let newBike = {}

    if (loggedInUser.isAdmin) {
      newBike = {
        brand: newBrand,
        color: newColor,
        userId: parseInt(newUser),
        bikeTypeId: parseInt(newType),
      }
    } else {
      newBike = {
        brand: newBrand,
        color: newColor,
        userId: parseInt(loggedInUser.id),
        bikeTypeId: parseInt(newType),
      }
    }
    addBike(newBike).then(() => navigate("/bikes"))
  }

  const handleChange = () => {}

  let colorCount = 1
  let brandCount = 1

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <Form>
            <FormGroup>
              {loggedInUser.isAdmin ? (
                <Input
                  id="user-select"
                  name="user"
                  type="select"
                  required
                  onChange={(event) => {
                    setNewUser(event.target.value)
                  }}
                >
                  <>
                    <option value="" key={0}>
                      Select a User...
                    </option>
                    {users.map((user) => {
                      return (
                        <option value={user.id} key={user.id}>
                          {user.firstName} {user.lastName}
                        </option>
                      )
                    })}
                  </>
                </Input>
              ) : (
                <Input id="user-select" name="user" type="select" disabled>
                  <>
                    <option>
                      {loggedInUser.firstName} {loggedInUser.lastName}
                    </option>
                  </>
                </Input>
              )}
            </FormGroup>
            <FormGroup>
              <Input
                id="bike-type-select"
                name="bike-type"
                type="select"
                required
                onChange={(event) => setNewType(event.target.value)}
              >
                <option value="" key={0}>
                  Select a Bike Type
                </option>
                {bikes.map((bike) => {
                  return (
                    <option value={bike.bikeType.id} key={bike.bikeType.id}>
                      {bike.bikeType.name}
                    </option>
                  )
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Input
                id="bike-color-select"
                name="bike-color"
                type="select"
                required
                onChange={(event) => setNewColor(event.target.value)}
              >
                <option value="" key={0}>
                  Select a Bike Color
                </option>
                {colors.map((color) => {
                  return (
                    <option value={color} key={colorCount++}>
                      {color}
                    </option>
                  )
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Input
                id="bike-brand-select"
                name="bike-brand"
                type="select"
                required
                onChange={(event) => setNewBrand(event.target.value)}
              >
                <option value="" key={0}>
                  Select a Bike Brand
                </option>
                {brands.map((brand) => {
                  return (
                    <option value={brand} key={brandCount++}>
                      {brand}
                    </option>
                  )
                })}
              </Input>
            </FormGroup>
            <Button color="primary" onClick={handleClick}>
              Submit Bike
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}