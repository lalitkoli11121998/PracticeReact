import React, { Component } from 'react';

const UserContext = React.createContext('hello kavi'); // create context and hello kavita is defalult value

const  UserProvider = UserContext.Provider; // create provider 

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}
export default UserContext;

