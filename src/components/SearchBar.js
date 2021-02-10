import React from 'react';
import { TextField,
    InputAdornment,
    Button } from '@material-ui/core';
import { Search } from '@material-ui/icons'

function SearchBar() {
    return (
        <div>
            <TextField id="outlined-basic" 
                placeholder="Search" 
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button>
                                <Search/>
                            </Button>
                        </InputAdornment>
                    ),
                }}>  
            </TextField>
        </div>
    )
};

export default SearchBar;