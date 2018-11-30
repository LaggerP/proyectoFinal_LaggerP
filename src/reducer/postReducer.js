const postReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POST':
          return state.concat([action.comment]);
        default:
          break
      }
      return state;
}
export default postReducer;


