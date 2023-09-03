const initialState = {
    markedId: null,
    data: []
};

export const messagesReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "MARK_MESSAGE": {
            return {
                ...state,
                markedId: state.markedId === action.payload ? null : action.payload
            }
        }
        case "MARK_RESET": {
            return {
                ...state,
                markedId: null
            }
        }
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
            return {
                ...state,
                data: state.data.map(item => {
                    // for the sake of simplicity just allowed one marked highlight message
                    if (item.id === action.payload) {
                        return { ...item, star: !item.star }
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