import useToken  from '../custom-hooks/useToken';
import PropTypes from 'prop-types';

export default function Header({ setAddGroupModalDisplay }) {
    const { token, setToken } = useToken();

    const logout = () => {
        setToken("");
        window.location.href = '/login';
    };

    const handleAddGroupButtonClick = (event) => {
        event.preventDefault();
        setAddGroupModalDisplay(true);
    }

    return (
        <div className="w-full border-b-2 border-gray-200 bg-white p-2 lg:p-4 flex justify-between items-center">
            <div className="flex gap-3 lg:gap-4 items-center">
                <p className="block m-0 font-semibold text-gray-700 text-sm xl:text-lg">Product Roadmap</p>
                <button type="button" onClick={ handleAddGroupButtonClick }
                    className="flex gap-1 xl:gap-2 items-center py-1 xl:py-2 pl-1 xl:pl-2 pr-2 xl:pr-4 rounded-lg bg-[#01959F] hover:bg-opacity-75 text-white">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                    </span>
                    <span className="text-xs xl:text-sm font-medium">Add New Group</span>
                </button>
            </div>
            <button type="button" onClickCapture={ logout }
                className="flex gap-1 xl:gap-2 items-center p-1 md:py-1 xl:py-2 md:pl-1 xl:pl-2 md:pr-2 xl:pr-4 rounded-full md:rounded-lg bg-red-500 hover:bg-red-400 text-white">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clipRule="evenodd" />
                    </svg>
                </span>
                <span className="hidden md:inline-block text-sm font-medium">Log out</span>
            </button>
        </div>
    );
}
Header.propTypes = {
    setAddGroupModalDisplay : PropTypes.func.isRequired,
}