import { useEffect, useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Spinner } from "reactstrap"
import NavBar from "./components/NavBar"
import ApplicationViews from "./components/ApplicationViews"
import { getUserById } from "./managers/userManager"
import { getBikesInShopCount } from "./managers/bikeManager"

function App() {
  const [loggedInUser, setLoggedInUser] = useState()
  const [inventory, setInventory] = useState(0)

  const getInventory = () => {
    getBikesInShopCount().then((bikeArray) => setInventory(bikeArray))
  }

  useEffect(() => {
    const user = localStorage.getItem("biancas_user")
    if (user) {
      getUserById(JSON.parse(user).id).then(setLoggedInUser)
    } else {
      setLoggedInUser(null)
    }
  }, [])

  // wait to get a definite logged-in state before rendering
  if (loggedInUser === undefined) {
    return <Spinner />
  }

  return (
    <>
      <NavBar
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        inventory={inventory}
        getInventory={getInventory}
      />
      <ApplicationViews
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        getInventory={getInventory}
      />
    </>
  )
}

export default App
