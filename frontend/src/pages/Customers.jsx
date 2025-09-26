import React, { useEffect, useState } from "react";
import API from "../api/api";
import CustomerForm from "../components/CustomerForm";

export default function Customers(){
  const [customers, setCustomers] = useState([]);

  const load = async () => {
    try {
      const { data } = await API.get("/customers");
      setCustomers(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{ load(); }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete?")) return;
    await API.delete(`/customers/${id}`);
    setCustomers(customers.filter(c=>c._id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Customers</h2>
      <CustomerForm onCreated={(c)=>setCustomers([c, ...customers])} />
      <ul>
        {customers.map(c => (
          <li key={c._id}>
            <strong>{c.name}</strong> — {c.contact_info} — {c.status}
            <button onClick={()=>handleDelete(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
