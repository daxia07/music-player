import React, {useEffect} from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../utils/authConfig";
import { useMsal } from "@azure/msal-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../actions";
import {SignOutButton} from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props 
 */
export const PageLayout = (props) => {
    // Redirect to auth page if not authenticated by force
    const { instance, accounts } = useMsal()
    const isAuthenticated = useIsAuthenticated()
    const content = useSelector(state => state)
    const dispatch = useDispatch();
    const { accessToken, fetchTokenInProcess } = content
    
    useEffect(() => {
        if (!isAuthenticated && !fetchTokenInProcess) {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        } 
    }, [isAuthenticated, instance, fetchTokenInProcess])
    
    useEffect(() => {
        if (isAuthenticated && !accessToken && !fetchTokenInProcess) {
            dispatch(fetchToken(instance, accounts, loginRequest))
        }
    })

    return (
        <>
            { isAuthenticated ? <SignOutButton /> : <div/> }
            {props.children}
        </>
    );
};
