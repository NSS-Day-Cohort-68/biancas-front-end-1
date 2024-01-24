import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap"
import { changeAdminStatus } from "../../managers/userManager"

export default function UserCard({ user, setDetailsUserId, getAndSetUsers }) {
  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">User #{user.id}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          User: {user.firstName} {user.lastName}
        </CardSubtitle>
        <CardText>Admin: {user.isAdmin.toString()}</CardText>
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
        {user.isAdmin ? (
          <Button
            color="danger"
            style={{ float: "right" }}
            onClick={() => {
              user.isAdmin = false
              changeAdminStatus(user).then(() => getAndSetUsers())
            }}
          >
            Demote
          </Button>
        ) : (
          <Button
            color="success"
            style={{ float: "right" }}
            onClick={() => {
              user.isAdmin = true
              changeAdminStatus(user).then(() => getAndSetUsers())
            }}
          >
            Promote
          </Button>
        )}
      </CardBody>
    </Card>
  )
}
