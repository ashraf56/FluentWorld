import React, { useContext } from 'react';
import { AuthService } from '../../AuthProvider/AuthProvider';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    let { setSearch } = useContext(AuthService)
    return (
        <div>
            <div className='my-5 relative flex justify-center'>

                <input
                    type="text"
                    className="input input-bordered rounded-full input-info  w-full max-w-xl uppercase font-bold"
                    placeholder="search Class"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className=' -ml-8'><FaSearch></FaSearch></button>
            </div>
        </div>
    );
};

export default Search;