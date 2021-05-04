const reducer = (state={accessToken: "", fetchTokenInProcess: false}, action) => {
    switch(action.type) {
        case "UPDATE_DATA": {
            const { data: updates } = action
            return {
                ...state,
                ...updates
            }
        }
        default:
            return state
    }
}

export default reducer