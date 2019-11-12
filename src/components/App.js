import React from 'react';
import TopNavBar from './TopNavBar';
import Main from './Main';

import '../styles/App.css';

const App = () => {
    return (
        <div className="App">
          <TopNavBar />
          <Main />
        </div>
    )
}

export default App;
