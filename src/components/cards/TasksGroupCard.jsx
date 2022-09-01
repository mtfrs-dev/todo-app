import React, { useState, useEffect } from "react";
import getListItems from "../../api/items/Get";
import PropTypes from 'prop-types';

export default function TasksGroupCard({ todo }){
    const [items, setItems] = useState();
    useEffect(() => {
        let mounted = true;
        getListItems(todo.id)
            .then( items => {
                if(mounted) { 
                    setItems(items);
                }
            });
        return () => mounted = false;
    }, [])

    return (
        <div className="rounded-md lg:rounded-lg p-4 bg-[#01959F] bg-opacity-10 border border-[#01959F]">
            <p className="block m-0 mb-3 w-fit text-xs text-[#01959F] border border-[#01959F] p-1 rounded">
                { todo.title }
            </p>
            <p className="block m-0 mb-3 text-xs text-gray-700 font-semibold">
                { todo.description }
            </p>
            { items ? 
                (<> {  
                    items.map( item => 
                        <div key={ item.id } className="p-3 bg-gray-50 border border-gray-200 rounded mb-3">
                            <p className="block m-0 mb-3 pb-3 text-sm text-gray-700 font-semibold border-b-2 border-gray-200 border-dashed">
                                { item.name }
                            </p>
                            <div className="grid grid-cols-5 items-center gap-2 text-gray-500">
                                <div className="col-span-3 bg-gray-300 rounded-full h-4 relative overflow-hidden">
                                    <div className={ `absolute top-0 left-0 h-full w-[${item.progress_percentage}%] bg-[#01959F]` }></div>
                                </div>
                                <div className="flex justify-center">
                                    <p className="block m-0 text-xs">
                                        { item.progress_percentage }%
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )
                } </>)
                : 
                (
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded mb-3">
                        <p className="block m-0 text-sm text-gray-500"> No Task </p>
                    </div>
                )
            }
            <button type="button" className="flex gap-2 text-gray-500 hover:text-gray-400 items-center">
                <span className="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                    </svg>
                </span>
                <span className="text-sm font-semibold">New Task</span>
            </button>
        </div>
    ); 
}
TasksGroupCard.propTypes = {
    todo: PropTypes.object.isRequired
}