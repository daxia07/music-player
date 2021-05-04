import React from "react";
import {PageLayout} from "./components/PageLayout";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";


const App = () => {
    const { instance, accounts } = useMsal();
    console.log(accounts)
    console.log(instance)
    return  ( 
        <PageLayout>
            <AuthenticatedTemplate>
                Hi
            </AuthenticatedTemplate>
    </PageLayout>
)}

export default App