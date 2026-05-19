import React from 'react';
import LabeledInput from '../Elements/LabeledInput';
import CheckBox from '../Elements/CheckBox';
import Button from '../Elements/Button';
import { useNavigate } from 'react-router-dom'; 

function FormSignIn() {
  const navigate = useNavigate();


  const handleLogin = (event) => {
    event.preventDefault(); 
    

    navigate("/"); 
  };

  return (
    <div className="mt-16">

      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <LabeledInput
            label="Email"
            type="email"
            placeholder="hello@example.com"
            name='email'
          />
        </div>
        <div className="mb-6">
          <LabeledInput
            label="Password"
            type="password"
            placeholder="••••••••"
            name='password'
          />
        </div>
        <div className="mb-3">
          <CheckBox 
            label="Keep me signed in"
            id="status"
            type="checkbox"
            name="status"
          />
        </div>
        

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default FormSignIn;