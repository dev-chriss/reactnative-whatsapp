const markMessage = (id) => {
    return {
        type: "MARK_MESSAGE",
        payload: id
    }
}

const markReset = () => {
    return {
        type: "MARK_RESET",
    }
}

const setMessages = (messages) => {
    return {
        type: "SET_MESSAGES",
        payload: messages
    }
}

const addMessage = (message) => {
    return {
        type: "ADD_MESSAGE",
        payload: message
    }
}

const updateMessage = (id) => {
    return {
        type: "UPDATE_MESSAGE",
        payload: id
    }
}

const resetMessages = () => {
    return {
        type: "RESET_MESSAGES"
    }
}

export default {
    markMessage,
    markReset,
    setMessages,
    addMessage,
    updateMessage,
    resetMessages
}