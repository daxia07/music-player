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