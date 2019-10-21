const initialState = {
  taskList: ['update UI', 'Change submit Method'],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'add-task':
      return {
        ...state,
        taskList: [...state.taskList, action.payload]
      }
    default:
      return state;
  }
}
