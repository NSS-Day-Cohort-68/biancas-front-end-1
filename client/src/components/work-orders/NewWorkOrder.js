import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Card, CardBody, CardText, CardTitle, Input, Button } from "reactstrap"
import { getBikeById } from "../../managers/bikeManager"
import {
  createWorkOrder,
  findOpenWorkOrder,
} from "../../managers/workOrderManager"

export const NewWorkOrder = ({ user }) => {
  const { bikeId } = useParams()
  const [bike, setBike] = useState(null)
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const getAndSetBike = (id) => {
    getBikeById(id).then(setBike)
  }

  useEffect(() => {
    if (bikeId) {
      getAndSetBike(bikeId)
    }
  }, [bikeId])

  useEffect(() => {
    if (!!bike) {
      if (!!findOpenWorkOrder(bike.workOrders)) {
        navigate("/")
      } else {
        if (!user.isAdmin && user.id !== bike.user.id) {
          navigate("/")
        }
      }
    }
  }, [bike, navigate, user])

  return (
    <Card outline color="warning" style={{ margin: "16px" }}>
      <CardBody>
        <CardTitle tag="h5">
          New work order for {bike?.user.firstName}'s {bike?.brand}.
        </CardTitle>
        <CardText>
          <Input
            type="textarea"
            value={description}
            placeholder={"Short description..."}
            style={{
              height: "100px",
              border: "lightgray solid 2px",
            }}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </CardText>
        <Button
          color="primary"
          onClick={() => {
            if (description !== "") {
              createWorkOrder({
                dateInitiated: new Date().toISOString(),
                dateCompleted: "",
                description,
                bikeId: bike.id,
              })

              navigate("/")
            }
          }}
        >
          Submit Work Order
        </Button>
      </CardBody>
    </Card>
  )
}
