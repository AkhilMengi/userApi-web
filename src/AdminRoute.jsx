import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const user = useSelector((store) => store.user);

  // Redirect to login if user is not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Restrict access if the user is not an admin
  if (user.role !== "admin") {
    return <Navigate to="/user-profile" />;
  }

  return children;
};

export default AdminRoute;
