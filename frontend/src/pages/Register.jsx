import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/users/register", { username, password });
      localStorage.setItem("token", data.token);
      nav("/");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)} /><br/>
        <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
        <button>Register</button>
      </form>
    </div>
  );
}
