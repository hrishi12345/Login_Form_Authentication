import React, { useState } from 'react'
export const AuthContext=React.createContext({
    token:'',
    isLoggin:false,
    login:(token)=>{},
    logout:()=>{}
})
 
function AuthContextProvider(props){
    const initialToken=localStorage.getItem('token')
    const [token,setToken]=useState(initialToken)
    const userisLoggin=!!token
    const loginHandler=(token)=>{
        localStorage.setItem('token',token)
        setToken(token)
    
    }
    const logoutHandler=()=>{
        localStorage.removeItem('token')
        setToken(null)
    }
    const contextValue={
        token:token,
        isLoggin:userisLoggin,
        login:loginHandler,
        logout:logoutHandler
    }
    return(
        <AuthContext.Provider value={contextValue}>
         {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider