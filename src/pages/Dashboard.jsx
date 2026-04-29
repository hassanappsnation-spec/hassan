import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/loginSlice";

const Dashboard = ({ setIsLoggedIn }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login?.user);

  const handleLogout = () => {
    dispatch(logout());

    // safe check
    if (setIsLoggedIn) {
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 mt-25">

      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4 border-b">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold">
          Welcome 👋 {user?.name || "User"}
        </h2>
      </div>

    </div>
  );
};

export default Dashboard;