import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../ItemActionDropdown';

export default function ItemCard({ 
    item, 
    index, 
    total,
    todo_id,
    setTodoID,
    setItemID,
    setItemData,
    setEditModalDisplay,
    setDeleteModalDisplay
}) {

    const handleEditTaskButtonClick = (id, edit_name, edit_progress) => {
        setItemData({name: edit_name, progress_percentage: edit_progress})
        setTodoID(todo_id);
        setItemID(id);
        setEditModalDisplay(true);
    }

    const handleDeleteTaskButtonClick = (id) => {
        setTodoID(todo_id);
        setItemID(id);
        setDeleteModalDisplay(true);
    }

    return (
        <div key={ item.id } className="p-3 bg-gray-50 border border-gray-200 rounded mb-3">
            <p className="block m-0 mb-3 pb-3 text-sm text-gray-700 font-semibold border-b-2 border-gray-200 border-dashed">
                { item.name }
            </p>
            <div className="grid grid-cols-5 items-center gap-2 text-gray-500">
                <div className="col-span-3 bg-gray-300 rounded-full h-4 relative overflow-hidden">
                    { (item.progress_percentage < 100) ?
                        (<div className={ `absolute top-0 left-0 h-full w-[${item.progress_percentage}%] bg-[#01959F]` }></div>)
                        :
                        (<div className="absolute top-0 left-0 h-full w-full bg-[#43936C]"></div>)
                    }
                </div>
                <div className="flex justify-center">
                    { (item.progress_percentage < 100) ? 
                        (<p className="block m-0 text-xs">
                            { item.progress_percentage }%
                        </p>)
                        :
                        (<span className="block m-0 text-[#43936C]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                        </span>)
                    }
                </div>
                <Dropdown color="gray" outline={false} size="2xs">
                    { index > 0 && 
                    (<button type="button" className="flex gap-3 text-gray-700 mx-3 hover:text-[#01959F] items-center w-36 whitespace-nowrap mb-3">
                        <span className="block m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="block m-0 text-sm">
                            Move Left
                        </span>
                    </button>)
                    }
                    { total-1 > index && 
                    (<button type="button" className="flex gap-3 text-gray-700 mx-3 hover:text-[#01959F] items-center w-36 whitespace-nowrap mb-3">
                        <span className="block m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="block m-0 text-sm">
                            Move Right
                        </span>
                    </button>)
                    }
                    <button type="button" 
                        onClick={ () => { handleEditTaskButtonClick(item.id, item.name, item.progress_percentage) } }
                        className="flex gap-3 text-gray-700 mx-3 hover:text-[#01959F] items-center w-36 whitespace-nowrap mb-3">
                        <span className="block m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                            </svg>
                        </span>
                        <span className="block m-0 text-sm">
                            Edit
                        </span>
                    </button>
                    <button type="button" 
                        onClick={ () => { handleDeleteTaskButtonClick(item.id) } }
                        className="flex gap-3 text-gray-700 mx-3 hover:text-red-500 items-center w-36 whitespace-nowrap">
                        <span className="block m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="block m-0 text-sm">
                            Delete
                        </span>
                    </button>
                </Dropdown>
            </div>
        </div>
    );
}

ItemCard.propTypes = {
    item                    : PropTypes.object.isRequired,
    index                   : PropTypes.number.isRequired,
    total                   : PropTypes.number.isRequired,
    todo_id                 : PropTypes.number.isRequired,
    setTodoID               : PropTypes.func.isRequired,
    setItemID               : PropTypes.func.isRequired,
    setEditModalDisplay     : PropTypes.func.isRequired,
    setDeleteModalDisplay   : PropTypes.func.isRequired,
}