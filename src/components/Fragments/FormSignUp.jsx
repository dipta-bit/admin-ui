import React from 'react';
import LabeledInput from '../Elements/LabeledInput';
import Button from '../Elements/Button';
import { useNavigate } from 'react-router-dom'; 

function FormSignUp() {
  const navigate = useNavigate(); 

  const handleSignUp = (event) => {
    event.preventDefault(); 
    
    navigate("/login"); 
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSignUp}>
        <div className="mb-4">
          <LabeledInput
            label="Name"
            type="text"
            placeholder="Tanzir Rahman"
            name="name"
          />
        </div>

        <div className="mb-4">
          <LabeledInput
            label="Email Address"
            type="email"
            placeholder="hello@example.com"
            name="email"
          />
        </div>

        <div className="mb-6">
          <LabeledInput
            label="Password"
            type="password"
            placeholder="••••••••••••"
            name="password"
          />
        </div>

        <p className="text-xs text-slate-500 mb-4">
          By continuing, you agree to our <span className="text-primary font-bold cursor-pointer hover:underline">terms of service</span>.
        </p>

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
}

export default FormSignUp;