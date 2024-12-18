import React from 'react';
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Clear any previous error messages
      setErrorMessage("");
  
      // Basic form validation
      if (!email || !password) {
        setErrorMessage("Both email and password are required.");
        return;
      }
  
      // Set loading state to true when the form is being submitted
      
  
      try {
        // Send POST request to the server
        const response = await fetch("http://localhost/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
  
        // Check if the response is successful
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);
          // You can redirect the user or perform other actions here
          // For example, you might want to store the token or user info in state
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || "Login failed. Please try again.");
        }
      } catch (error) {
        // Handle any errors from the fetch request
        setErrorMessage("An error occurred. Please try again.");
      } 
    };
  
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-6 mx-auto">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-3 text-center">
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </div>
    </form>
              <div className="text-center mt-3">
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>
              <div className="text-center mt-3">
                <p>
                  Don't have an account?{" "}
                  <a href="#" className="text-decoration-none">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 