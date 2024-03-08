import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleLogout } from 'react-google-login';
import { loginimg } from '../assets';

function Login({ handleGetStarted, handleLogin }) { // Receive handleGetStarted and handleLogin as props
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign up and sign in forms

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

// Toggle between sign up and sign in forms
const toggleForm = () => {
  setIsSignUp(!isSignUp);
};

  return (
    <div className='bg-slate-50 flex px-12 py-2 gap-20 border-slate-500 border-2 mx-60 my-20 rounded-3xl'>
      <div className='h-full w-1/2 items-center justify-between font-normal '>
      {/* Toggle section */}
      <div className='flex justify-center items-center mt-3'>
          <div>
            {isSignUp ? 
              <span>
                <div className='font-bold text-2xl text-black'>
                  Create Your Account
                </div>
                <div className=' ml-6 text-xs flex gap-2'>
                  Already have an Account? 
                  <span 
                    className='text-blue-600 cursor-pointer hover:underline'
                    onClick={toggleForm}
                  >
                    Sign In
                  </span>
                </div>
              </span>       
            :  
            <span>
              <div className='font-bold text-2xl text-black mt-8'>
                Login To Your Account
              </div>
              <div className='ml-6 text-xs flex gap-2'>
                Don't have an Account? 
                <span 
                  className='text-blue-600 cursor-pointer hover:underline'
                  onClick={toggleForm}
                >
                  Sign Up
                </span>
              </div>
            </span>
            }
          </div>
        </div>


        {isSignUp ? (
          // Sign up form
          <div className =" px-5 text-slate-600 text-md">
          {/* for the names  */}
              <div className='m-2'>
              <div className='flex justify-between items-center'>
                {/* first name */}
                <span>
                First Name
                </span>
                {/* Last name */}
                <span>
                  Last Name
                </span>
                </div >
                <div className='flex gap-3 justify-between'>
                  {/* input for first name */}
                        <input className='bg-slate-100 p-1 rounded-md border  border-slate-400 w-1/2' type="text" />
                        {/* input for last name */}
                        <input className='bg-slate-100 p-1 rounded-md border  border-slate-400 w-1/2' type="text" />
                </div>
              </div>
          
          {/* mobile number */}
          <div className='flex flex-col m-2'>
            Mobile Number
            <input className='bg-slate-100 p-1 rounded-md border  border-slate-400' type="text" />

          </div>
          {/* email */}
          <div className='flex flex-col m-2'>
            Email ID
            <input className='bg-slate-100 p-1 rounded-md border  border-slate-400' type="text" />

          </div>
          {/* Password */}
          <div className='flex flex-col m-2'>
            Password
            <input className='bg-slate-100 p-1 rounded-md border  border-slate-400' type="text" />

          </div>
          {/* sign up button */}
          <div className='my-8'>
          <a href="/login" className="  flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-blue-800 mx-4 py-2 font-semibold rounded-xl relative transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Sign Up
          </a>  
          </div>
           {/* or */}
           <div className='m-2 flex items-center justify-center'>
          <span> or </span>
           </div>
        </div>
        ) : (
          // Sign in form
          <div className =" text-slate-600  py-6 px-5">
          
          {/* email */}
          <div className='flex flex-col m-2'>
            Email ID
            <input className='bg-slate-100 p-1 rounded-md border  border-slate-400' type="text" />
          </div>
          <div className='flex flex-col m-2'>
            Password
            <input className='bg-slate-100 p-1 rounded-md border  border-slate-400' type="text" />
          </div>
          {/* sign up button */}
          <div className='py-4'>
          <a href="/login" className="  flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-blue-800 mx-4 py-2 font-semibold rounded-xl relative transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Sign In
          </a>  
          </div>
           {/* or */}
           <div className='flex items-center justify-center'>
          <span> or </span>
           </div>
        </div>
        )}


        {/* Google sign up button */}
        <div className='flex items-center justify-center pb-4'>
          <div className="text-center">
            <GoogleLogin
              clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
              buttonText="Sign Up with Google"
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
              style={{ fontSize: '20px', padding: '15px 30px', borderRadius: '8px' }}
            />
          </div>
        </div>
      </div>

      {/* Image */}
      <div className='w-1/2 py-4 h-auto'>
        <img src={loginimg} alt="login" />
      </div>
    </div>
  );
}

export default Login;
