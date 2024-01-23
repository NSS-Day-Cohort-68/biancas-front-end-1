import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap"

export const WorkOrderCard = ({ wo, setWoBikeId }) => {
  return (
    <Card outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">Work Order #{wo.id}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {wo.description}
        </CardSubtitle>
        <CardText>Date Initiated: {wo.dateInitiated.split("T")[0]}</CardText>
        <Button
          color="dark"
          onClick={() => {
            setWoBikeId(wo.bikeId)
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }}
        >
          Show Bike Details
        </Button>
      </CardBody>
    </Card>
  )
}
