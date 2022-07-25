import React from 'react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { useSignInWithFacebook, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);
    if (Gerror || Ferror) {
        return (
          <>
          {
            toast.error(Gerror?.message || Ferror?.message)
          }
          </>
          )
    }
      if (Gloading || Floading) {
        return <div className='h-40 mt-10'>{<Loading />}</div>
        
      };
     if(Guser || Fuser){
        return(
          <>
            {
              toast.success('Thank You! Login SuccessFull')
            }
          </>
          )
     }
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