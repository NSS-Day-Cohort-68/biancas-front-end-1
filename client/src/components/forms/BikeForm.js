import { Form, FormGroup } from "reactstrap"

export const BikeForm = ({ admin, loggedInUser }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <Form>
            <FormGroup>
              {admin ? (
                <select>
                  <option>admin is "loggedInUser"</option>
                </select>
              ) : (
                <select>
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
