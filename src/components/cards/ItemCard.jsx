import React from 'react';

export default function ItemCard({ item }) {
    return (
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
    );
}