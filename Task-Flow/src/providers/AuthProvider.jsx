import React, { useEffect, useState } from 'react'
import { AuthContext } from '../context'

export default function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(() => {
      return JSON.parse(localStorage.getItem('isAuth')) || false;
    });

    const [users, setUsers] = useState(() => {
        return JSON.parse(localStorage.getItem('users')) || [];
    });
  
    useEffect(() => {
      localStorage.getItem('isAuth', JSON.stringify(isAuth))
    }, [isAuth]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);
  
    return (
      <AuthContext.Provider value={{ isAuth, setIsAuth, users, setUsers }}>
        {children}
      </AuthContext.Provider>
    );
  }
  