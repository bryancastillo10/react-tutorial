/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";
import ContextB from "./ContextB.jsx";

/// A Provider Component
/// 1. import {createContext} from "react";
/// 2. export  const MyContext = createContext();
/// 3. <MyContext.Provider value={value}>
//     <Child />
//      </ MyContext.Provider>

/// A Consumer Component
/// 1. import React, {useContext} from 'react';
///    import {MyContext} from './Component A';
//  2. const value = useContext(MyContext);

export const UserContext = createContext();

const ContextA = () => {
  const [user, setUser] = useState("SpongeBob");

  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4 p-4 border-2 bg-gray-500 shadow-md">
      <h1 className="text-center font-bold text-white">Component A</h1>
      <h2 className="text-center  text-white">{`Hello ${user}`}</h2>

      <UserContext.Provider value={user}>
        <ContextB />
      </UserContext.Provider>
    </div>
  );
};

export default ContextA;
