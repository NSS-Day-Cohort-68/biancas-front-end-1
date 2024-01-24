import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap"
import { deleteBike } from "../../managers/bikeManager"

export default function BikeCard({
  bike,
  setDetailsBikeId,
  hasWorkOrders,
  getAndSetBikes,
}) {
  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">{bike.brand}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Owner: {bike.user?.firstName} {bike.user?.lastName}
        </CardSubtitle>
        <CardText>Color: {bike.color}</CardText>
        <Button
          color="dark"
          onClick={() => {
            setDetailsBikeId(bike.id)
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }}
        >
          Show Details
        </Button>

        {!hasWorkOrders && (
          <Button
            color="danger"
            style={{ float: "right" }}
            onClick={() => {
              deleteBike(bike).then(() => {
                setDetailsBikeId(null)
                getAndSetBikes()
              })
            }}
          >
            Delete
          </Button>
        )}
      </CardBody>
    </Card>
  )
}
