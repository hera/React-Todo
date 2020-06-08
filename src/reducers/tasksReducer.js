
export default function tasksReducer (state, action) {
    switch (action.type) {

        case 'PULL':
            // update the state if payload is truthy, otherwise keep the state unchanged
            return action.payload || state;

        case 'ADD':
            return [
                ...state,
                {
                    title: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];

        case 'TOGGLE_COMPLETED':
            return state.map((item) => {
                if (item.id === action.task.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item;
                }
            })

        case 'DELETE':
            return state.filter((item) => {
                return item.id !== action.task.id;
            });

        case 'RESET':
            // delete all tasks
            return [];

        default:
            return state;

    }

}