import React, { useState } from 'react';
import PropTypes from 'prop-types';
import deleteListItems from '../../api/items/Delete';

export default function DeleteTaskModal({ 
    display,
    setDisplay, 
    todo_id,
    item_id,
    setMessage,
    updateTimes,
    setUpdateTimes
}) {
    const handleCloseButtonClick = () => {
        setDisplay(false);
    }
    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await deleteListItems(todo_id, item_id);
        setMessage("Task deleted successfully!");
        setUpdateTimes( updateTimes +1 );
        setDisplay(false);
    }
    if(display) {
        return (
            <div className="fixed top-0 z-[100] w-full h-screen bg-gray-300 bg-opacity-50 flex flex-col items-center justify-center">
                <div className="bg-white w-10/15 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-[30%] rounded-lg shadow-md shadow-gray-300 p-5">
                    <div className="flex justify-between items-center text-gray-700 mb-5">
                        <div className="flex gap-3 items-center">
                            <span className="block m-0 text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </span>
                            <p className="block m-0 text-lg font-medium">
                                Delete Task
                            </p>
                        </div>
                        <button type="button" className="hover:text-red-500" onClick={ handleCloseButtonClick }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full text-gray-700">
                        <p className="block m-0 py-3">
                            Are you sure you want to delete this task? Your action can't be reverted.
                        </p>
                        <div className="flex justify-end items-center gap-4">
                            <button type="button" onClick={ handleCloseButtonClick } 
                                className="py-1 px-3 font-medium rounded-md drop-shadow hover:bg-gray-50 text-gray-700 border border-gray-200">
                                Cancel
                            </button>
                            <button type="button" onClick={ handleDelete }
                                className="py-1 px-3 font-medium rounded-md drop-shadow bg-red-600 hover:bg-opacity-75 text-white border border-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
DeleteTaskModal.propTypes = {
    display         : PropTypes.bool.isRequired,
    setDisplay      : PropTypes.func.isRequired,
    todo_id         : PropTypes.number,
    item_id         : PropTypes.number,
    setMessage      : PropTypes.func.isRequired,
    updateTimes     : PropTypes.number.isRequired,
    setUpdateTimes  : PropTypes.func.isRequired,
}