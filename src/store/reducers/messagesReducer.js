const initialState = {
    data: []
};

export const messagesReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "SET_MESSAGES": {
            return {
                ...state,
                data : [...action.payload]
            }
        }
        case "ADD_MESSAGE": {
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        }
        case "UPDATE_MESSAGE": {
            // console.log(action.payload)
            return {
                ...state,
                data: state.data.map(item => {
                    // console.log("payload=", action.payload.toString())
                    if (item.id.toString().toLowerCase() === action.payload.toString().toLowerCase()) {
                        return { ...item, marked: !item.marked }
                    } 
                    return item
                })
            }
        }
            
        case "RESET_MESSAGES":
            return {
                data: []
            }
        default:
            return  {
                state
            }
    }
    
}

export default messagesReducer