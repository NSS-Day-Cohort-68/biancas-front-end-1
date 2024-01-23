import { useState, useEffect } from "react"
import BikeCard from "./BikeCard"
import { getBikes, getBikesByUser } from "../../managers/bikeManager"

export default function BikeList({ setDetailsBikeId, user }) {
  const [bikes, setBikes] = useState([])

  const getAndSetBikes = () => {
    if (user.isAdmin) {
      getBikes().then(setBikes)
    } else {
      getBikesByUser(user).then(setBikes)
    }
  }

  useEffect(() => {
    getAndSetBikes()
  }, []) //! getAndSetBikes dependency causes infinite loop

  return (
    <>
      <h2>Bikes</h2>
      {bikes.map((bike) => (
        <BikeCard
          bike={bike}
          setDetailsBikeId={setDetailsBikeId}
          key={`bike-${bike.id}`}
        ></BikeCard>
      ))}
    </>
  )
}
