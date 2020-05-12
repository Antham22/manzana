import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

// TODO: switch isAuthenticated to false for prod
const initialState = {
  name: '',
  isAuthenticated: true,
};

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'signinUser':
      return {
        ...state,
        name: payload.name,
        isAuthenticated: true,
      };
    case 'signoutUser':
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSignin = (payload) => dispatch({ type: 'signinUser', payload });
  const handleSignout = () => dispatch({ type: 'signoutUser' });

  return (
    <AuthContext.Provider value={{ ...state, handleSignin, handleSignout }}>
      {children}
    </AuthContext.Provider>
  );
};
