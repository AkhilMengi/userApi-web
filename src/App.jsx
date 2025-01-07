import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Body from "./Body"
import Login from "./Login"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import AdminProfile from './AdminProfile'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
