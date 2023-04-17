import React, { useState } from 'react'
export const AuthContext=React.createContext({
    token:'',
    isLoggin:false,
    login:(token)=>{},
    logout:()=>{}
})
 
function AuthContextProvider(props){
    const [token,setToken]=useState(null)
    const userisLoggin=!!token
    const loginHandler=(token)=>{
        setToken(token)
    
    }
    const logoutHandler=()=>{
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