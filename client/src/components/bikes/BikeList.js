import { useState, useEffect } from "react"
import BikeCard from "./BikeCard"
import { getBikes, getBikesByUser } from "../../managers/bikeManager"
import { Link } from "react-router-dom"
import { Button } from "reactstrap"

export default function BikeList({ setDetailsBikeId, user }) {
  const [bikes, setBikes] = useState([])

  const getAndSetBikes = () => {
    if (user.isAdmin) {
      getBikes().then(setBikes)
    } else {
      getBikesByUser(user).then(setBikes)
    }
  }

  const findWorkOrder = (bike) => {
    return bike.workOrders.length > 0
  }

  useEffect(() => {
    getAndSetBikes()
  }, []) //! getAndSetBikes dependency causes infinite loop

  return (
    <>
      <h2>Bikes</h2>

      <Link to="/newbike">
        <Button color="primary" style={{ marginBottom: "12px" }}>
          New Bike
        </Button>
      </Link>

      {bikes.map((bike) => (
        <BikeCard
          bike={bike}
          setDetailsBikeId={setDetailsBikeId}
          key={`bike-${bike.id}`}
          hasWorkOrders={findWorkOrder(bike)}
          getAndSetBikes={getAndSetBikes}
        ></BikeCard>
      ))}
    </>
  )
}
