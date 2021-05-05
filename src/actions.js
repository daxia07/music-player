// import axios from "axios";
import {getSongs} from "./utils/funcs";

// const { REACT_APP_API_URI, REACT_APP_PAGE_LIMIT } = process.env;

export const updateData = data => {
    console.log(`Update data`)
    return dispatch => {
        dispatch({
            type: "UPDATE_DATA",
            data: {
                ...data
            }
        })
    }
}

export const fetchToken = (instance, accounts, loginRequest) => {
    console.log(`Fetching token for user`)
    return dispatch => {
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        }).then((response) => {
            console.log('access Token')
            const {accessToken} = response
            console.log(accessToken)
            // TODO: send to the API
            dispatch({
                type: "UPDATE_DATA",
                data: {
                    accessToken,
                    fetchTokenInProcess: false
                }
            })
        }).catch(err => console.log(err));  //TODO: deal with exceptions
        dispatch({
            type: "UPDATE_DATA",
            data: {
                fetchTokenInProcess: true
            }
        })
    }
}

export const fetchSongs = accessToken => {
    // console.log(`Fetching data for page ${page}`)
    return dispatch => {
        dispatch({
            type: "UPDATE_DATA",
            data: {
                fetchSongsInProcess: true
            }
        })
        getSongs(accessToken).then( songs => {
            dispatch({
                type: "UPDATE_DATA",
                data: {
                    songs
                }
            })
        })
    };
}
