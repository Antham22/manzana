import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = {
  name: '',
  isAuthenticated: false,
};

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'signinUser':
      console.log(payload);
      return {
        ...state,
        name: payload.name,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSignin = (payload) => dispatch({ type: 'signinUser', payload });

  return <AuthContext.Provider value={{ ...state, handleSignin }}>{children}</AuthContext.Provider>;
};
