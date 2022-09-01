import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('auth_token');
        return tokenString;
    };

    const [token, setToken] = useState(getToken());
    
    const saveToken = (authToken) => {
        if(authToken == ""){
            localStorage.removeItem("auth_token");
            setToken(authToken);
        }else{
            localStorage.setItem('auth_token', authToken);
            setToken(authToken);
        }
    };

    return {
        setToken: saveToken,
        token
    }
}