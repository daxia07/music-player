import React from "react";
import {PageLayout} from "./PageLayout";
import MusicPlayer from "./MusicPlayer";
import { Auth0Provider } from "@auth0/auth0-react";
const {REACT_APP_DOMAIN, REACT_APP_AUTH0_CLIENT_ID} = process.env


const App = () => {
    return  (
        <Auth0Provider
            domain={REACT_APP_DOMAIN}
            clientId={REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
        >
            <PageLayout>
                <MusicPlayer/>
            </PageLayout>
        </Auth0Provider>
)}

export default App