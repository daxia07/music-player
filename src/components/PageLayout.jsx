import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useGoogleLogin} from "react-use-googlelogin";
import 'react-jinke-music-player/assets/index.css'


export const PageLayout = (props) => {
    // Redirect to auth page if not authenticated by force
    const content = useSelector(state => state)
    const dispatch = useDispatch();

    const { isSignedIn, isInitialized, signOut, googleUser, grantOfflineAccess } = useGoogleLogin({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID, // Your clientID from Google.
        cookiePolicy: 'single_host_origin',
        scope: "profile email https://www.googleapis.com/auth/drive"
    })

    if (isSignedIn) {
        console.log(googleUser)
    }

    return (
        <div>
            <h2>Content</h2>
            {isInitialized && (
                <>
                    {isSignedIn ? (
                        <>
                            <h1>{googleUser.profileObj.name}</h1>
                            <p>{googleUser.profileObj.email}</p>
                            <img src={googleUser.profileObj.imageUrl} alt={"avatar"} />
                            <button onClick={signOut}>Sign Out</button>
                        </>
                    ) : (
                        <>
                            <div>
                                <button onClick={grantOfflineAccess}>Sign In</button>
                            </div>
                        </>
                    )}
                </>
            )}
            {props.children}
        </div>
    )
};
