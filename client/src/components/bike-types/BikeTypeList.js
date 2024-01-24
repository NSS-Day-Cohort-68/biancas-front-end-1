import { Card, CardBody, CardTitle } from "reactstrap"

export const BikeTypeList = ({ bikeTypes }) => {
  return (
    <div className="bike-type-list">
      <h2>Bike Types</h2>
      {bikeTypes.map((bikeType) => (
        <Card
          key={`bikeType=${bikeType.id}`}
          color="dark"
          outline
          style={{ marginBottom: "4px" }}
        >
          <CardBody>
            <CardTitle tag="h5">{bikeType.name}</CardTitle>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}
