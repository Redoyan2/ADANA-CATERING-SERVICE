import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    return (
        <div>
            
        </div>
    );
};

export default SocialLogin;