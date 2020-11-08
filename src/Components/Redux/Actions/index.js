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

export const additem = () => {
    return {
        type: 'ADD_ITEM'
    }
}