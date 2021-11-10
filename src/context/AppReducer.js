const AppReducer = (state, action) => {
   switch (action.type) {
      case "REMOVE":
         return { users: state.users.filter(user => user.id !== action.payload) };
      case "ADD":
         return { users: [...state.users, action.payload] };

      case "EDIT":
         const updateUser = action.payload;

         const updateUsers = state.users.map(user => {
            if (user.id === updateUser.id) {
               return updateUser
            }
            return user;
         });

         return {
            users: updateUsers
         }

      default:
         return state
   }
};

export default AppReducer;