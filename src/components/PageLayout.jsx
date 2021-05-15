import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useGoogleLogin} from "react-use-googlelogin";
import 'react-jinke-music-player/assets/index.css'
import {updateData} from "../actions";


export const PageLayout = (props) => {
    // Redirect to auth page if not authenticated by force
    const content = useSelector(state => state)
    const {accessToken} = content
    const dispatch = useDispatch();
    const { isSignedIn, isInitialized, googleUser, grantOfflineAccess } = useGoogleLogin({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID, // Your clientID from Google.
        cookiePolicy: 'single_host_origin',
        scope: "profile email https://www.googleapis.com/auth/drive"
    })

    useEffect(() => {
        if (isSignedIn && !accessToken) {
            const {accessToken: newToken} = googleUser
            dispatch(updateData({accessToken: newToken}))
        }
    })

    return (
        <div>
            {isInitialized && (
                <>
                    {isSignedIn ? (
                        <>
                            {/*<h1>{googleUser.profileObj.name}</h1>*/}
                            {/*<p>{googleUser.profileObj.email}</p>*/}
                            {/*<img src={googleUser.profileObj.imageUrl} alt={"avatar"} />*/}
                            {/*<button onClick={signOut}>Sign Out</button>*/}
                        </>
                    ) : (
                        <>
                            <div>
                                <button onClick={grantOfflineAccess}>Please Sign In</button>
                            </div>
                        </>
                    )}
                </>
            )}
            {props.children}
        </div>
    )
};
