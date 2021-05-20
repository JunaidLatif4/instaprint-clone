

const initial = {
    profile : null,
    address : null,
}

const reducer = (state , action) =>{
    switch (action.type) {
        case "ADD_PROFILE" :
            return{
                ...state,
                profile : action.profile
            }

        case "ADDRESS" :
            return{
                ...state,
                address : action.address
            }

        default :
            return state;
    }
}


export default reducer;
export {initial};