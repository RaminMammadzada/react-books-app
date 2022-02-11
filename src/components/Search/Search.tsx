import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store/actions";

const Search = () => {
    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        const query = e.target.value
        dispatch(setSearchQuery(query))

        // Data.filter(post => {
        //     if (query === "") {
        //       //if query is empty
        //       return post;
        //     } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
        //       //returns filtered array
        //       return post;
        //     }
        // });
    }

    return (
        <div className='block'>
            <input
                placeholder="Enter a topic to search"
                name='title'
                type='text'
                onChange={e => handleChange(e)}
            />
        </div>
    );
}

export default Search;