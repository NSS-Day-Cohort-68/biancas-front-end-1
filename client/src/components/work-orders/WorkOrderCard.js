import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"

export const WorkOrderCard = ({ wo }) => {
  return (
    <Card outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">Work Order #{wo.id}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {wo.description}
        </CardSubtitle>
        <CardText></CardText>
      </CardBody>
    </Card>
  )
}
