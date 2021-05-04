import React, {useEffect} from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { loginRequest, graphConfig } from "../utils/authConfig";
import { useMsal } from "@azure/msal-react";
import { SignOutButton } from "./SignOutButton";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../actions";
import axios from "axios";


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
    const { accessToken, fetchTokenInProcess, songs } = content
    
    useEffect(() => {
        if (!isAuthenticated && !fetchTokenInProcess) {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        } 
    }, [isAuthenticated, instance, fetchTokenInProcess])
    
    useEffect(() => {
        if (isAuthenticated && !accessToken && !fetchTokenInProcess) {
            instance.acquireTokenSilent({
                ...loginRequest,
                account: accounts[0]
            }).then((response) => {
                console.log('access Token')
                console.log(response.accessToken)
                dispatch(updateData({accessToken: response.accessToken, fetchTokenInProcess:false}))
            }).catch(err => console.log(err));
            dispatch(updateData({fetchTokenInProcess: true}))
        }
    })

    useEffect(() => {
        if (!songs.length && accessToken) {
            // fetch data with API
            const bearer = `Bearer ${accessToken}`
            const headers = { 
                'Content-Type': 'application/json', 'Authorization': bearer
             }
             // TODO: send token and request song list with API
             axios.get(graphConfig.graphMeEndpoint, { headers }).then( res => {
                 const { data: { value } } = res
                 // singers -> abums -> songs & cover
                 for (let i=0; i < value.lenth; i++) {
                     // fetch 
                 }
                 console.log(res)
                 // dispatch data
             }).catch(err => console.log(err))
        } 
    })

    return (
        <>
            { isAuthenticated ? <SignOutButton /> : <div/> }
            {props.children}
        </>
    );
};
