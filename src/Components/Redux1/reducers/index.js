
import {combineReducers} from 'redux';
import postReducer from "./postReducer";
import counterReducer from '../../Redux/Reducers/counter';
import loggedReducer from '../../Redux/Reducers/isLogged';
import toDoReducer from '../../Redux/Reducers/toDo';

export default combineReducers({
    posts: postReducer,
    counter: counterReducer,
    islogged: loggedReducer,
    todo: toDoReducer,
});