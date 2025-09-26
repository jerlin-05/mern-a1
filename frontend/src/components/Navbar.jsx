import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    nav("/login");
  };

  return (
    <nav style={{ padding: 10, borderBottom: "1px solid #ddd", background: "#f8f9fa" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/customers">Customers</Link> |{" "}
      {!token ? (
        <>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
}
