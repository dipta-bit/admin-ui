import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [goals, setGoals] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Optional: Log the inputs before sending
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("-");

    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        { email, password }
      );
      
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

const fetchGoals = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get("https://jwt-auth-eight-neon.vercel.app/goals", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
    setGoals(response.data.data[0]);
  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  fetchGoals();
}, []);

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="border ml-2 mb-2" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <br />
        
        <label htmlFor="password">Password :</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          className="border ml-2 mb-4" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <br />
        
        <input 
          type="submit" 
          value="send" 
          className="bg-gray-200 p-2 cursor-pointer" 
        />
      </form>
      <hr className="py-4" />
            Present amount : {goals.present_amount}
            <br />
            Target Amount : {goals.target_amount}
    </div>
  );
};


export default Form;