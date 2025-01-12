import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// ProtectedRoute component to restrict access based on roles
const ProtectedRoute = ({ allowedRoles, children }) => {
  const userState = useSelector((store) => store.user);
  const user = userState?.user; // Get user from Redux state
  const location = useLocation(); // Current location of the route

  // Check if user exists and if their role is allowed
  if (!user) {
    // Redirect to login if no user is found
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Show "Not Authorized" message if the role is not allowed
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center p-4 border rounded bg-red-100 text-red-600">
          <h2 className="text-2xl font-semibold">Not Authorized</h2>
          <p>You do not have permission to access this page.</p>
        </div>
      </div>
    );
  }

  // If user is authorized, render the children (protected content)
  return children;
};

export default ProtectedRoute;
