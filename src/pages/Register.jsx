import React, { useState } from 'react';
import register from '../api/users/Register'
import PropTypes from 'prop-types';
import { useNavigate, Link } from "react-router-dom";
import useMessage  from '../custom-hooks/useMessage';

export default function Register({ setToken }) {
    let navigate = useNavigate();
    
    const { message, setMessage } = useMessage();

    const [name, setName]           = useState();
    const [email, setEmail]         = useState();
    const [password, setPassword]   = useState();
    const [password_confirmation, setPasswordConfirmation]   = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await register({
            name,
            email,
            password,
            password_confirmation
        });
        if (response.message){
            setMessage(response.message);
            setToken(response.auth_token);
            navigate("/", { replace: true });
        }

    }
    return(
        <div className="w-full h-screen flex flex-col items-center justify-center bg-[#01959F] bg-opacity-30 gap-2">
            <p className="text-xl xl:text-2xl uppercase font-bold text-[#01959F]">Rakamin Mini Project</p>
            <p className="mb-4 text-3xl xl:text-4xl uppercase font-bold text-white">Todo App</p>
            <div className="w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 bg-white rounded-lg p-4 xl:p-6">
                <p className="block m-0 w-full text-center text-xl xl:text-2xl font-bold text-[#01959F] tracking-wide mb-4 xl:mb-6">
                    Sign Up Now
                </p>
                <form onSubmit={handleSubmit}>
                    <label className="tex-gray-700 block w-full m-0 mb-4 xl:mb-6">
                        <p className="block w-full m-0 mb-2 xl:mb-3">Full Name</p>
                        <input type="text"
                            className="block w-full rounded border-2 border-gray-200 focus:border-[#01959F] bg-[#01959F] bg-opacity-5 outline-none"
                            onChange={event => setName(event.target.value)}
                        />
                    </label>
                    <label className="tex-gray-700 block w-full m-0 mb-4 xl:mb-6">
                        <p className="block w-full m-0 mb-2 xl:mb-3">Email</p>
                        <input type="email"
                            className="block w-full rounded border-2 border-gray-200 focus:border-[#01959F] bg-[#01959F] bg-opacity-5 outline-none"
                            onChange={event => setEmail(event.target.value)}
                        />
                    </label>
                    <label className="tex-gray-700 block w-full m-0 mb-4 xl:mb-6">
                        <p className="block w-full m-0 mb-2 xl:mb-3">Password</p>
                        <input type="password"
                            className="block w-full rounded border-2 border-gray-200 focus:border-[#01959F] bg-[#01959F] bg-opacity-5 outline-none"
                            onChange={event => setPassword(event.target.value)}
                        />
                    </label>
                    <label className="tex-gray-700 block w-full m-0 mb-4 xl:mb-6">
                        <p className="block w-full m-0 mb-2 xl:mb-3">Password Confirmation</p>
                        <input type="password"
                            className="block w-full rounded border-2 border-gray-200 focus:border-[#01959F] bg-[#01959F] bg-opacity-5 outline-none"
                            onChange={event => setPasswordConfirmation(event.target.value)}
                        />
                    </label>
                    <div className="mb-4">
                        <button type="submit"
                            className="block py-1 px-3 bg-[#01959F] text-white uppercase font-medium rounded-md drop-shadow">
                            Submit
                        </button>
                    </div>
                </form>
                <div className="w-fit flex gap-2 text-xs font-medium">
                    <p className="">Already have account?</p>
                    <Link to="/login" className="text-[#01959F]">Login</Link>
                </div>
            </div>
        </div>
    )
}
Register.propTypes = {
    setToken: PropTypes.func.isRequired,
}