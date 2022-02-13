import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../store/actions/books";
import { RootState } from "../../store/reducers";

const Search = () => {
    const dispatch = useDispatch();
    const { searchQuery } = useSelector((state: RootState) => state);

    const handleChange = (e: any) => {
        const query = e.target.value
        dispatch(setSearchQuery(query))
    }

    return (
        <div className='block'>
            <input
                placeholder="Enter a topic to search"
                name='title'
                type='text'
                value={searchQuery}
                onChange={e => handleChange(e)}
            />
        </div>
    );
}

export default Search;