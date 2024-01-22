import { useState, useEffect } from "react"
import { Card, CardTitle, CardSubtitle, CardBody, CardText } from "reactstrap"
import { getBikeById } from "../../managers/bikeManager"
import { getUserById } from "../../managers/userManager"
import { getTypeById } from "../../managers/typeManager"

export default function BikeDetails({ detailsBikeId }) {
  const [bike, setBike] = useState(null)
  const [user, setUser] = useState({})
  const [bikeType, setBikeType] = useState({})

  const getBikeDetails = (id) => {
    getBikeById(id).then(setBike)
  }

  useEffect(() => {
    if (detailsBikeId) {
      getBikeDetails(detailsBikeId)
    }
  }, [detailsBikeId])

  useEffect(() => {
    if (!!bike) {
      getUserById(bike.userId).then(setUser)
      getTypeById(bike.bikeTypeId).then(setBikeType)
    }
  }, [bike])

  if (!bike) {
    return (
      <>
        <h2>Bike Details</h2>
        <p>Please choose a bike...</p>
      </>
    )
  }
  return (
    <>
      <h2>Bike Details</h2>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">{bike.brand}</CardTitle>
          <p>
            Owner: {user?.firstName} {user?.lastName}
          </p>
          <p>Address: {user?.address}</p>
          <p>Type: {bikeType?.name}</p>
          <p>Color: {bike.color}</p>
        </CardBody>
      </Card>
      <h4>Work Order History</h4>
      {bike.workOrders &&
        bike.workOrders.map((wo) => (
          <Card outline color="warning" key={wo.id} style={{ marginBottom: "4px" }}>
            <CardBody>
              <CardTitle tag="h5">{wo.dateInitiated.split("T")[0]}</CardTitle>
              <CardSubtitle>
                Completed: {wo.dateCompleted ? wo.dateCompleted.split("T")[0] : "Open"}
              </CardSubtitle>
              <CardText>Description: {wo.description}</CardText>
            </CardBody>
          </Card>
        ))}
    </>
  )
}
