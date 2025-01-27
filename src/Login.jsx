import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("ajay1234@google.com");
  const [password, setPassword] = useState("Abracadabra!123!");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      console.error("Both email and password are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3500/login",
        { email, password },
        { withCredentials: true }
      );

      const userData = response.data; // The data returned from the server
      // console.log("Login successful:", userData);

      // Add the user to Redux state
      dispatch(addUser(userData));
      // console.log("User added to Redux:", userData);

      // Navigate based on user role
      if (userData.user.role === "admin") {
        navigate("/admin-profile"); // Redirect to admin profile
      } else if (userData.user.role === "requestor") {
        navigate("/user-profile"); // Redirect to user profile
      } else {
        console.error("Unknown role:", userData.user.role);
      }
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                value={email}
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                placeholder="**********"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
