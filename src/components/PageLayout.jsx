import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateData} from "../actions";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </button>
    );
};

export const PageLayout = (props) => {
    const content = useSelector(state => state)
    const dispatch = useDispatch()
    const {accessToken} = content
    const {isAuthenticated, user, isLoading} = useAuth0()

    useEffect(() => {
        if (!accessToken) {
            dispatch(updateData({accessToken: 'dummy'}))
        }
    });

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div>
            { isAuthenticated ?
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    {props.children}
                    <LogoutButton />
                </div>
                : <LoginButton /> }
        </div>
    )
}
