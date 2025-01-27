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
    // Show "Not Found" message for unauthorized access
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center p-4 border rounded bg-gray-100 text-gray-700">
          <h2 className="text-2xl font-semibold">Not Found</h2>
          <p>Please contact admin if you believe this is a mistake.</p>
        </div>
      </div>
    );
  }

  // If user is authorized, render the children (protected content)
  return children;
};

export default ProtectedRoute;
