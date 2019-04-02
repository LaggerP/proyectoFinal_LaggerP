const postReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POST':
          return state.concat([action.comment]);
        case 'DELETE_POST':
          return state.filter((post)=>post.id !== action.id);
        default:
          break
      }
      return state;
}
export default postReducer;


