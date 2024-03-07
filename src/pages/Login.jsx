import React from 'react'
import { GoogleLogin} from '@react-oauth/google';
import { GoogleLogout } from 'react-google-login';
import { useState } from 'react';


function Login() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    // Function to handle Google login success
    const handleLoginSuccess = (response) => {
    setIsAuthenticated(true);
    // You can perform additional actions after successful login if needed
  };

  // Function to handle Google login failure
  const handleLoginFailure = (response) => {
      console.error('Google login failed:', response);
      // You can perform additional actions for failed login if needed
    };
    
    // Function to handle Google logout
    const handleLogout = () => {
        setIsAuthenticated(false);
        // You can perform additional actions after logout if needed
    };
    
        return (
    <div>
{!isAuthenticated ? (
                <GoogleLogin
                clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
              ) : (
                <GoogleLogout
                  clientId="907017828098-i1iouhd7u88ad7j4d9ic3selsc5f86us.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={handleLogout}
                />
              )}

{!isAuthenticated ? (
                <a href="#" className="text-white bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-2 font-semibold rounded-xl flex items-center justify-center relative transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                  <span>Get Started</span>
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
              ) : (
                <span></span>
              )}
    </div>
  )
}

export default Login