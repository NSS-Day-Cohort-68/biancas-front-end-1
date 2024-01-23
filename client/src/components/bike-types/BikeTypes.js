import { useState, useEffect } from "react"
import { AddBikeType } from "./AddBikeType"
import { BikeTypeList } from "./BikeTypeList"
import { getBikeTypes } from "../../managers/bikeManager"

export const BikeTypes = () => {
  const [bikeTypes, setBikeTypes] = useState([])

  const getAllBikeTypes = () => {
    getBikeTypes().then((bikeTypesArr) => setBikeTypes(bikeTypesArr))
  }
  useEffect(() => {
    getAllBikeTypes()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <AddBikeType bikeTypes={bikeTypes} getAllBikeTypes={getAllBikeTypes} />
      </div>
      <div className="row">
        <BikeTypeList bikeTypes={bikeTypes} />
      </div>
    </div>
  )
}
