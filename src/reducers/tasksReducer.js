
export default function tasksReducer (state, action) {
    switch (action.type) {
        case 'pull':
            // update the state if payload is truthy, otherwise keep the state unchanged
            return action.payload || state;
        case 'add':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        default:
            return state;
    }

}