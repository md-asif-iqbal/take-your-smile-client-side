import React from 'react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { useSignInWithFacebook, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);
    return (
        <div className="social-media">
        <button className="social-icon" onClick={() => signInWithFacebook()}>
          <BsFacebook />
        </button>
      
        <button className="social-icon" onClick={() => signInWithGoogle()}>
          <BsGoogle />
        </button>
      
      </div>
    );
};

export default SocialLogin;