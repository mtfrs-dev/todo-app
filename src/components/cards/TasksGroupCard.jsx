import React, { useState, useEffect } from "react";
import getListItems from "../../api/items/Get";
import PropTypes from 'prop-types';
import ItemCard from "./ItemCard";

export default function TasksGroupCard({ 
        todo, 
        index, 
        total, 
        setTodoID,
        setItemID,
        setItemData,
        setAddModalDisplay, 
        setEditModalDisplay
    }){

    const [items, setItems] = useState();

    const handleAddTaskButtonClick = (id) => {
        setTodoID(id);
        setAddModalDisplay(true);
    }

    useEffect(() => {
        let mounted = true;
        getListItems(todo.id)
            .then( items => {
                if(mounted) { 
                    setItems(items);
                }
            });
        return () => mounted = false;
    }, [todo])

    

    return (
        <>
        <div className="rounded-md lg:rounded-lg p-4 bg-[#01959F] bg-opacity-10 border border-[#01959F]">
            <p className="block m-0 mb-3 w-fit text-xs text-[#01959F] border border-[#01959F] p-1 rounded">
                { todo.title }
            </p>
            <p className="block m-0 mb-3 text-xs text-gray-700 font-semibold">
                { todo.description }
            </p>
            { items &&
                (
                    items.length > 0 ? 
                    (<> 
                        { items.map( item => 
                            <ItemCard 
                                key={ item.id } 
                                item={ item } 
                                index={ index } 
                                total={ total }
                                todo_id={ todo.id }
                                setTodoID={ setTodoID }
                                setItemID={ setItemID }
                                setItemData={ setItemData }
                                setEditModalDisplay={ setEditModalDisplay }
                            />
                        )} 
                    </>)
                    :
                    (
                        <div className="p-3 bg-gray-50 border border-gray-200 rounded mb-3">
                            <p className="block m-0 text-sm text-gray-500"> No Task </p>
                        </div>
                    )
                )
            }
            <button type="button" className="flex gap-2 text-gray-500 hover:text-gray-400 items-center"
                onClick={ () => { handleAddTaskButtonClick(todo.id) } }>
                <span className="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                    </svg>
                </span>
                <span className="text-sm font-semibold">New Task</span>
            </button>
        </div>
        </>
        
    ); 
}
TasksGroupCard.propTypes = {
    todo                : PropTypes.object.isRequired,
    index               : PropTypes.number.isRequired,
    total               : PropTypes.number.isRequired,
    setTodoID           : PropTypes.func.isRequired,
    setItemID           : PropTypes.func.isRequired,
    setItemData         : PropTypes.func.isRequired,
    setAddModalDisplay  : PropTypes.func.isRequired,
    setEditModalDisplay : PropTypes.func.isRequired,
}