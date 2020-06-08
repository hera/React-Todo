
export default function tasksReducer (state, action) {
    switch (action.type) {
        case 'pull':
            // update the state if payload is truthy, otherwise keep the state unchanged
            return action.payload || state;
        case 'add':
            return [
                ...state,
                {
                    title: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        case 'delete':
            return state.filter((item) => {
                return item.id !== action.task.id;
            });
        case 'reset':
            // delete all tasks
            return [];
        default:
            return state;
    }

}