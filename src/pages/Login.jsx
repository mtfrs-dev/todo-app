import React, { useState } from 'react';
import authenticate from '../api/users/Authenticate'
import PropTypes from 'prop-types';
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setToken }) {
    let navigate = useNavigate();

    const [email, setEmail]         = useState();
    const [password, setPassword]   = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await authenticate({
            email,
            password
        });
        setToken(token.auth_token);
        navigate("/", { replace: true });
    }
    return(
        <div className="w-full h-screen flex flex-col items-center justify-center bg-[#01959F] bg-opacity-30 gap-2">
            <p className="text-xl xl:text-2xl uppercase font-bold text-[#01959F]">Rakamin Mini Project</p>
            <p className="mb-4 text-3xl xl:text-4xl uppercase font-bold text-white">Todo App</p>
            <div className="w-5/6 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 bg-white rounded-lg p-4 xl:p-6">
                <p className="block m-0 w-full text-center text-xl xl:text-2xl font-bold text-[#01959F] tracking-wide mb-4 xl:mb-6">
                    Log In
                </p>
                <form onSubmit={handleSubmit}>
                    <label className="tex-gray-700 block w-full m-0 mb-4 xl:mb-6">
                        <p className="block w-full m-0 mb-2 xl:mb-3 text-sm">Email</p>
                        <input type="email"
                            placeholder="Type your email"
                            className="block w-full rounded border-2 border-gray-200 text-sm focus:border-[#01959F] bg-[#01959F] bg-opacity-5 outline-none"
                            onChange={event => setEmail(event.target.value)}
                        />
                    </label>
                    <label className="tex-gray-700 block w-full m-0 mb-4 xl:mb-6">
                        <p className="block w-full m-0 mb-2 xl:mb-3 text-sm">Password</p>
                        <input type="password"
                            placeholder="Type your password"
                            className="block w-full rounded border-2 border-gray-200 text-sm focus:border-[#01959F] bg-[#01959F] bg-opacity-5 outline-none"
                            onChange={event => setPassword(event.target.value)}
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
                    <p className="">Don't have account?</p>
                    <Link to="/register" className="text-[#01959F]">Register</Link>
                </div>
            </div>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}