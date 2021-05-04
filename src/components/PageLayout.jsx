import React, {useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { useMsal } from "@azure/msal-react";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props 
 */
export const PageLayout = (props) => {
    // Redirect to auth page if not authenticated by force
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    useEffect(() => {
        if (!isAuthenticated) {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }, [isAuthenticated, instance])

    return (
        <>
            <Navbar bg="primary" variant="dark">
                { isAuthenticated ? <SignOutButton /> : <div/> }
            </Navbar>
            {props.children}
        </>
    );
};
