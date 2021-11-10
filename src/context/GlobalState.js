import React, { useReducer, createContext, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
   users: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState, () => {
      const localData = localStorage.getItem('users');
      return localData ? { users: JSON.parse(localData) } : { users: [] }
   });

   useEffect(() => {
      localStorage.setItem('users', JSON.stringify(state.users));
   }, [state]);

   const removeUser = (id) => {
      dispatch({ type: 'REMOVE', payload: id });
   };

   const addUser = (item) => {
      dispatch({ type: 'ADD', payload: item });
   };

   const editUser = (user) => {
      dispatch({ type: 'EDIT', payload: user });
   }

   return (
      <GlobalContext.Provider value={{
         users: state.users,
         removeUser,
         addUser,
         editUser
      }}>
         {children}
      </GlobalContext.Provider>
   );
};