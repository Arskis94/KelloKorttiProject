import React from 'react';

const LogInScreen = ({activeUserData, setActiveUserData}) => {

    return (
        <div>
            <h1>Welcome, please log in</h1>
            <div>
                <form>
                    Username<input />
                    Password<input />
                </form>
            </div>
        </div>
    )
}

export default LogInScreen