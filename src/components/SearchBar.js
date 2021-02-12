import React, { useState } from 'react';
import { TextField,
    InputAdornment} from '@material-ui/core';
import { Search } from '@material-ui/icons'

function SearchBar({ onHandleSubmit }) {
    const [keyword, setKeyword] = useState('');

    const onChange = (event) => {
        setKeyword(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onHandleSubmit(keyword);
        setKeyword('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" 
                    placeholder="Search" 
                    variant="outlined"
                    value={keyword}
                    onChange={onChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search/>
                            </InputAdornment>
                        ),
                    }}>  
                </TextField> 
            </form>
        </div>
    )
};

export default SearchBar;