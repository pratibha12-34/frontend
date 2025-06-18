import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post('http://localhost:8000/register', [{ name: name, email: email }])
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={name} onChange={handleName} required />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" name="email" value={email} onChange={handleEmail} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App
