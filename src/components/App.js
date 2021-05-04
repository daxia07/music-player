import React from "react";
import {PageLayout} from "./PageLayout";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { useDispatch, useSelector } from "react-redux";


const App = () => {
    const content = useSelector(state => state);
    console.log(content)
    const dispatch = useDispatch();
    return  ( 
        <PageLayout>
            <AuthenticatedTemplate>
                Hi
            </AuthenticatedTemplate>
    </PageLayout>
)}

export default App