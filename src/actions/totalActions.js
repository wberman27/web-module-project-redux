export const ADD_PRICE = 'ADD_PRICE'
export const REMOVE_PRICE = 'REMOVE_PRICE'

export const addPrice = price =>{
    return{type:ADD_PRICE, payload: price}
}

export const removePrice = price =>{
    return{type:REMOVE_PRICE, payload: price}
}