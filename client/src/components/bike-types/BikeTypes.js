import { AddBikeType } from "./AddBikeType"
import { BikeTypeList } from "./BikeTypeList"

export const BikeTypes = () => {
  return (
    <div className="container">
      <div className="row">
        <AddBikeType />
      </div>
      <div className="row">
        <BikeTypeList />
      </div>
    </div>
  )
}
