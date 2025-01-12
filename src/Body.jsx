import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "./utils/userSlice";
import NavBar from "./NavBar";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    // If user data already exists in the Redux store, skip fetching
    if (userData) return;

    try {
      const response = await axios.get("http://localhost:3500/profile", {
        withCredentials: true,
      });

      // Add fetched user data to Redux
      dispatch(addUser(response.data));
      console.log("User fetched and added to Redux:", response.data);
    } catch (error) {
      // Redirect to login page if the user is not authenticated
      if (error.response?.status === 401) {
        console.warn("User not authenticated, redirecting to login.");
        navigate("/login");
      } else {
        console.error("Error fetching user data:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // Run only once on component mount

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Body;
