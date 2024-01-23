export const fetchOptions = (method, body) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  return options
}

export const bikeColors = [
  "Red",
  "Blue",
  "Green",
  "Black",
  "Yellow",
  "Silver",
  "Orange",
  "Brown",
  "Gray",
  "Purple",
  "White",
  "Sky Blue",
  "Gold",
  "Bronze",
  "Pink",
]

export const bikeBrands = [
  "VelocityCruiser",
  "AeroBlitzBikes",
  "EcoCommute",
  "UrbanRider",
  "ExtremeThrill",
  "SwiftElectric",
  "FoldMaster",
  "CruiseKing",
  "GravelMaster",
  "CityCommuter",
  "TwoWheels",
  "Bikes-R-Us",
  "DiscountBikes",
  "BigCityJumper",
  "BunnyHopper",
]
