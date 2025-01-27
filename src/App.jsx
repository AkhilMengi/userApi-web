import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Body from "./Body";
import Login from "./Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import AdminProfile from "./AdminProfile";
import UserProfile from "./UserProfile";
import ProtectedRoute from "./ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />

            {/* Admin Profile - Only accessible by admin */}
            <Route
              path="/admin-profile"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminProfile />
                </ProtectedRoute>
              }
            />

            {/* User Profile - Only accessible by requestor */}
            <Route
              path="/user-profile"
              element={
                <ProtectedRoute allowedRoles={["requestor"]}>
                  <UserProfile />
                </ProtectedRoute>
              }
            />

            {/* Default route */}
            <Route
              path="*"
              element={
                <div className="flex justify-center items-center h-screen">
                  <div className="text-center p-4 border rounded bg-gray-100 text-gray-700">
                    <h2 className="text-2xl font-semibold">Not Found</h2>
                    <p>Please contact admin if you believe this is a mistake.</p>
                  </div>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;