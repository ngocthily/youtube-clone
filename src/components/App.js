import React from 'react';
import { Route } from 'react-router-dom';
import SearchResultList from 'components/SearchResultList';

const App = () => {
    return (
        <div>
            <Route path="/results" component={SearchResultList}/>
        </div>
    )
}

export default App;