import { useState } from "react"
import { Button, FormFeedback, FormGroup, Input } from "reactstrap"
import { addBikeType } from "../../managers/bikeManager"

export const AddBikeType = ({ bikeTypes, getAllBikeTypes }) => {
  const [newBikeType, setNewBikeType] = useState("")
  const [duplicateInput, setDuplicateInput] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!newBikeType) {
      window.alert("Please enter a new bike type before clicking submit")
    } else if (
      bikeTypes.find(
        (type) => type.name.toLowerCase() === newBikeType.toLowerCase()
      )
    ) {
      setDuplicateInput(true)
    } else {
      const bikeTypeObject = { name: newBikeType }
      addBikeType(bikeTypeObject).then((res) => {
        getAllBikeTypes()
      })
      setNewBikeType("")
    }
  }

  return (
    <div className="add-bike-form">
      <h2>Add New Bike Type</h2>
      <FormGroup>
        <Input
          id="bike-type-input"
          invalid={duplicateInput}
          name="bike-type-input"
          style={{ marginBottom: "4px" }}
          type="text"
          value={newBikeType}
          onChange={(event) => {
            setDuplicateInput(false)
            setNewBikeType(event.target.value)
          }}
        />
        <Button onClick={handleSubmit} color="success">
          Add
        </Button>
        <FormFeedback>That bike type is already in the database.</FormFeedback>
      </FormGroup>
    </div>
  )
}
