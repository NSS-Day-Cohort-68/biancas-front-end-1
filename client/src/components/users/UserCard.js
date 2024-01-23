import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    Button,
  } from "reactstrap"
  
  export default function UserCard({ user, setDetailsUserId }) {
    return (
      <Card color="dark" outline style={{ marginBottom: "4px" }}>
        <CardBody>
          <CardTitle tag="h5">{user.id}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            User: {user.firstName} {user.lastName}
          </CardSubtitle>
          <CardText>Admin: {(user.isAdmin).toString()}</CardText>
          <Button
            color="dark"
            onClick={() => {
              setDetailsUserId(user.id)
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }}
          >
            Show Details
          </Button>
        </CardBody>
      </Card>
    )
  }