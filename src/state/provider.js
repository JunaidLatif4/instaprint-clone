import React, { createContext, useContext, useReducer } from 'react'


const contex = createContext()


const GlobalState = ({ reducer, initial, children }) => {
    return (
        <contex.Provider value={useReducer(reducer, initial)}>
            {children}
        </contex.Provider>
    )
}


const useGlobalState = ()=> useContext(contex)


export { contex, GlobalState, useGlobalState };