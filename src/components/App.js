import React from "react";
import {PageLayout} from "./PageLayout";
import { AuthenticatedTemplate } from "@azure/msal-react";
import MusicPlayer from "./MusicPlayer";


const App = () => {
    return  ( 
        <PageLayout>
            <AuthenticatedTemplate>
                <MusicPlayer/>
            </AuthenticatedTemplate>
    </PageLayout>
)}

export default App