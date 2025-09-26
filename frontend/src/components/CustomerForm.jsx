import React, { useState } from "react";
import API from "../api/api";

export default function CustomerForm({ onCreated }){
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/customers", { name, contact_info: contact });
      setName(""); setContact("");
      onCreated && onCreated(data);
    } catch (err) { alert("Error creating customer"); }
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Contact" value={contact} onChange={e=>setContact(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
