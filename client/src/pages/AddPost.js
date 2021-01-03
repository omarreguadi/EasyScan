import React, { useState } from 'react'
import PostForm from '../components/PostForm'
import API from '../helpers/API'
import { notify } from '../helpers/Notify'

export default function AddPost(props) {
  const [formData, setFormData] = useState({ title: "", content: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const savePost = async (e) => {
    e.preventDefault()
    try {
      const { title, body } = formData
      const config = { headers: { "Content-Type": "application/json" } }
      const bodys = { title, body }
      const res = await API.post(`/posts`, bodys, config)
      notify({ error: res.data.error, msg: res.data.message })
      props.history.push('/dashboard')
    } catch (e) {
      notify({ error: "Error" + e });
      console.log(e);
    }
  };

  return (
    <div className="container">
      <PostForm post handleChange={handleChange} handleSubmit={savePost} />
    </div>
  )
}
