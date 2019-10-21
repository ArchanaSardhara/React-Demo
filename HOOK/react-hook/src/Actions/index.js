export const addTask = (task) => dispatch => {
    return dispatch({ type: 'add-task', payload: task });
}