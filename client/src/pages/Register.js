import React, { useState } from "react"
import Form from "../components/Form"
import API from "../helpers/API"
import { notify } from '../helpers/Notify'

export default function Register(props) {

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { name, lastName, email, password } = formData;
      const config = { headers: { "Content-Type": "application/json" } };
      const body = { name, lastName, email, password };
      const response = await API.post("/register", body, config);

      notify({ error: response.data.error });
      response.data.success && props.history.push(`/signin`)
    } catch (e) {
      console.log("Error", e);
      notify({ error: e });
    }
  };
  const handleUser = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container">
      <Form
        register={true}
        handleSubmit={handleRegister}
        handleChange={handleUser}
      />
    </div>
  );
}
