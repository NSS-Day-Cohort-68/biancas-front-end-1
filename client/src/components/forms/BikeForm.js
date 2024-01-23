import { Form, FormGroup } from "reactstrap"

export const BikeForm = ({ loggedInUser }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <Form>
            <FormGroup>
              {loggedInUser.isAdmin ? (
                <select>
                  <option>admin is "loggedInUser"</option>
                </select>
              ) : (
                <select disabled>
                  <option>
                    {loggedInUser.firstName} {loggedInUser.lastName}
                  </option>
                </select>
              )}
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  )
}
