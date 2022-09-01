import { useState } from 'react';

export default function useMessage() {
    const getMessage = () => {
        const message_content = sessionStorage.getItem("message");
        return message_content;
    };

    const [message, setMessage] = useState(getMessage());
    
    const saveMessage = (sessionMessage) => {
        if(sessionMessage == ""){
            sessionStorage.removeItem("message");
            setMessage(sessionMessage);
        }else{
            sessionStorage.setItem("message", sessionMessage);
            setMessage(sessionMessage);
        }
    };

    return {
        setMessage: saveMessage,
        message
    }
}