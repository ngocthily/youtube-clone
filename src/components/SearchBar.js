import React, { useState } from 'react';
import { TextField,
    InputAdornment,
    Button} from '@material-ui/core';
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
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button onClick={handleSubmit} 
                                    style={{minHeight: 0, minWidth: 0}}>
                                    <Search/>
                                </Button>
                            </InputAdornment>
                        )
                    }}>  
                </TextField> 
            </form>
        </div>
    )
};

export default SearchBar;