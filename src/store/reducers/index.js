import { combineReducers } from 'redux'
<<<<<<< HEAD
import searchReducer from "./searchReducer";
import messagesReducer from "./messagesReducer"
const rootReducer = combineReducers({
    search: searchReducer,
    messages: messagesReducer,
=======
import search from "./search";

const rootReducer = combineReducers({
    search: search,
>>>>>>> e5ed6fd (first commit)
})

export default rootReducer