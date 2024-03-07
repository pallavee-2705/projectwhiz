import React from 'react'
import { GoogleLogin} from '@react-oauth/google';
import { GoogleLogout } from 'react-google-login';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { loginimg } from '../assets';

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
    <div className='bg-slate-50 flex px-12 py-10 gap-20 border-slate-500 border-2 mx-60 my-24 rounded-3xl'>
          <div className='h-full w-1/2 items-center justify-between font-normal text-slate-600 text-lg'>
      {/* for the form  */}
            <div className>
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
              {/* sign up button */}
              <div className='my-8'>
              <a href="/login" className="  flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-2 font-semibold rounded-xl relative transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Sign Up
              </a>  
              </div>
               {/* or */}
               <div className='m-2 flex items-center justify-center'>
              <span> or </span>
               </div>
            </div>
            <div className='m-2 gap-2 flex'>

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

         
            </div>
            </div>

  {/* for the image */}
  <div className='w-1/2'>
          <img src={loginimg} alt="" />
  </div>
</div>
  )
}

export default Login