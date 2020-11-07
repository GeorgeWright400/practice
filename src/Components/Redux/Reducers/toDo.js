const ToDoReducer = (state = false, action) => {
    switch(action.type){
        case 'ItemOne':
            return !state;
        default:
            return state;
    }
}

export default ToDoReducer;