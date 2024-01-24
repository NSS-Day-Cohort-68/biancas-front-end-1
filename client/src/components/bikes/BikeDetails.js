import { useState, useEffect } from "react"
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Button,
} from "reactstrap"
import { getBikeById } from "../../managers/bikeManager"
import { useNavigate } from "react-router-dom"
import {
  findOpenWorkOrder,
  updateWorkOrder,
} from "../../managers/workOrderManager"

export default function BikeDetails({ detailsBikeId, user, getAllWorkOrders }) {
  const [bike, setBike] = useState(null)
  const navigate = useNavigate()

  const getBikeDetails = (id) => {
    getBikeById(id).then(setBike)
  }

  const showButtons = () => {
    const openWorkOrder = findOpenWorkOrder(bike.workOrders)

    if (!!openWorkOrder) {
      // if the bike has an open work order
      if (user.isAdmin) {
        // and the user is an admin
        return (
          // display the "Complete Work Order" button
          <Button
            color="primary"
            style={{ marginTop: "4px", marginBottom: "4px" }}
            onClick={() => {
              updateWorkOrder({
                ...openWorkOrder,
                dateCompleted: new Date().toISOString(),
              }).then(() => {
                if (detailsBikeId) {
                  getBikeDetails(detailsBikeId)
                  if (!!getAllWorkOrders) {
                    getAllWorkOrders()
                  }
                }
              })
            }}
          >
            Complete Work Order
          </Button>
        )
      }
    } else {
      // if the bike does not have an open work order
      return (
        // display the "Open Work Order" button
        <Button
          color="primary"
          style={{ marginTop: "4px", marginBottom: "4px" }}
          onClick={() => {
            navigate(`/neworder/${detailsBikeId}`)
          }}
        >
          Open Work Order
        </Button>
      )
    }
  }

  useEffect(() => {
    if (detailsBikeId) {
      getBikeDetails(detailsBikeId)
    }
  }, [detailsBikeId])

  if (!bike || !detailsBikeId) {
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
      <Card color="dark" inverse style={{ marginBottom: "4px" }}>
        <CardBody>
          <CardTitle tag="h4">{bike.brand}</CardTitle>
          <p>
            Owner: {bike.user.firstName} {bike.user.lastName}
          </p>
          <p>Address: {bike.user.address}</p>
          <p>Type: {bike.bikeType.name}</p>
          <p>Color: {bike.color}</p>
        </CardBody>
      </Card>

      {showButtons()}

      <h4>Work Order History</h4>
      {bike.workOrders &&
        bike.workOrders.map((wo) => (
          <Card
            outline
            color="warning"
            key={wo.id}
            style={{ marginBottom: "4px" }}
          >
            <CardBody>
              <CardTitle tag="h5">{wo.dateInitiated.split("T")[0]}</CardTitle>
              <CardSubtitle>
                Completed:{" "}
                {wo.dateCompleted ? wo.dateCompleted.split("T")[0] : "Open"}
              </CardSubtitle>
              <CardText>Description: {wo.description}</CardText>
            </CardBody>
          </Card>
        ))}
    </>
  )
}
