import React from 'react';
import UserGreeting from './UserGreeting.jsx';

function App() {
    return (
        <>
            <UserGreeting isLoggedIn={true} username="Bro" />
        </>
    );
}

export default App;
