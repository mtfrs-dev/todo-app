import React, { useState } from 'react';
import PropTypes from 'prop-types';
import addListItem from '../../api/items/Post';

export default function CreateTaskModal({ 
    display,
    setDisplay,
    todo_id, 
    setMessage,
    updateTimes,
    setUpdateTimes
}) {
    const [name, setName] = useState("");
    const [progress_percentage, setProgress] = useState("");
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleProgressChange = (event) => {
        setProgress(event.target.value);
    };
    const handleCloseButtonClick = () => {
        setName("");
        setProgress("");
        setDisplay(false);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await addListItem({
            name,
            progress_percentage
        }, todo_id);
        setMessage("Task created successfully!");
        setUpdateTimes( updateTimes +1 );
        setName("");
        setProgress("");
        setDisplay(false);
    }
    if(display) {
        return (
            <div className="fixed top-0 z-[100] w-full h-screen bg-gray-300 bg-opacity-50 flex flex-col items-center justify-center">
                <div className="bg-white w-10/15 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-[30%] rounded-lg shadow-md shadow-gray-300 p-5">
                    <div className="flex justify-between items-center text-gray-700 mb-5">
                        <p className="block m-0 text-lg font-medium">
                            Create Task
                        </p>
                        <button type="button" className="hover:text-red-500" onClick={ handleCloseButtonClick }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                    </div>
                    <form onSubmit={ handleSubmit }>
                        <div className="w-full text-gray-700">
                            <label className="block w-full mb-5">
                                <span className="block w-full m-0 mb-3">Task Name</span>
                                <input
                                    name="name"
                                    type="text"
                                    className="block w-full rounded-lg border-gray-200"
                                    placeholder="Type your task name"
                                    autoComplete="off"
                                    value={name}
                                    onChange={handleNameChange} 
                                    />
                            </label>
                            <label className="block w-1/3 mb-5">
                                <span className="block w-full m-0 mb-3">Progress</span>
                                <input
                                    name="progress"
                                    type="number"
                                    className="block w-full rounded-lg border-gray-200"
                                    placeholder="e.g. 70"
                                    min={0} max={100}
                                    value={progress_percentage}
                                    onChange={handleProgressChange} 
                                    />
                            </label>
                            <div className="flex justify-end items-center gap-4">
                                <button type="button" onClick={ handleCloseButtonClick } 
                                    className="py-1 px-3 font-medium rounded-md drop-shadow hover:bg-gray-50 text-gray-700 border border-gray-200">
                                    Cancel
                                </button>
                                <button type="submit" className="py-1 px-3 font-medium rounded-md drop-shadow bg-[#01959F] hover:bg-opacity-75 text-white border border-[#01959F]">
                                    Save Task
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
CreateTaskModal.propTypes = {
    display         : PropTypes.bool.isRequired,
    setDisplay      : PropTypes.func.isRequired,
    todo_id         : PropTypes.number,
    setMessage      : PropTypes.func.isRequired,
    updateTimes     : PropTypes.number.isRequired,
    setUpdateTimes  : PropTypes.func.isRequired,
}