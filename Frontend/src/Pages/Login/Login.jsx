import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import React, { useState } from 'react';
import gupshupLogo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSuccess = (response) => {

    console.log(response.credential)
    console.log(response)

    Cookies.set('userToken', response.credential , { expires: 1, secure: true, sameSite: 'Strict' });

    navigate("/")

    // Send the token to your backend
    // fetch('http://localhost:3000/auth/google', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ token: response.credential }),
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log('User authenticated:', data);
    // });
  };



  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 p-8 rounded-lg w-4/5">
        
        <div className="flex flex-col items-center justify-center p-4">
          <img src={gupshupLogo} alt="" className='w-12'/>
          <p className="mt-2 text-2xl">Belzir Interview Challenge</p>
        </div>


        <div className="flex flex-col items-center justify-center p-4 border-l-2 border-gray-300">
          
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <div>
              <h2>Login with Google</h2>
              <GoogleLogin onSuccess={handleSuccess} onError={() => console.log('Login Failed')} />
            </div>
          </GoogleOAuthProvider>

        </div>
      </div>
    </div>
  );
}

export default Login;
