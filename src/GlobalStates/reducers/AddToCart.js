var initialState = [];

const addToCart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            var productID = action.data.id
            var exist = state.find((item) => item.id === productID)
            if (exist) {
                return (
                    state.map((item) => item.id === productID ? { ...item, qty: item.qty + 1 } : item)
                )
            } else {
                return (
                    state = [...state, { ...action.data, qty: 1 }]
                )
            }
        case "REMOVE":
            var productID = action.data.id
            var exist = state.find((item) => item.id === productID)
            if (exist) {
                return (
                    state.map((item) => item.id === productID ? { ...item, qty: item.qty - 1 } : item)
                )
            } else {
                return (
                    state = [...state, { ...action.data, qty: 1 }]
                )
            }
        default: return state
    }
}

export default addToCart;