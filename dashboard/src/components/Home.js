import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:5000/auth/verify", {
          withCredentials: true,
        });

        setAuthorized(true);
      } catch (err) {
        window.location.href = "http://localhost:3000/login";
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    authorized && (
      <>
        <TopBar />
        <Dashboard />
      </>
    )
  );
};

export default Home;
