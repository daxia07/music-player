import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateData} from "../actions";

//TODO: use auth0

export const PageLayout = (props) => {
    const content = useSelector(state => state)
    const dispatch = useDispatch()
    const {accessToken} = content

    useEffect(() => {
        if (!accessToken) {
            dispatch(updateData({accessToken: 'dummy'}))
        }
    });
    return (
        <div>
            {props.children}
        </div>
    )
};
