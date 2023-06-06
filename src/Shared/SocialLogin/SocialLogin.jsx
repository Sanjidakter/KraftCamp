import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
        <div className="divider"></div>
        <div className="w-full text-center my-4">
          <button
            // onClick={handleGoogleSignIn}
            className="btn btn-circle btn-outline"
          >
            <FaGoogle></FaGoogle>
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;