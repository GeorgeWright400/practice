const ToDoReducer = (state = false, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return !state;
        default:
            return state;
    }
}

export default ToDoReducer;