export const increment = numbr => {
    return {
        type:'INCREMENT',
        payload: numbr
    }
}

export const decrement = () => {
    return {
        type:'DECREMENT'
    }
}

export const signin = () => {
    return {
        type:'SIGN_IN'
    }
}

export const additem = (thing) => {
    return {
        type: 'ADD_ITEM',
        payload: thing
    }
}