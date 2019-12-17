import React, { useState } from "react";
import UserDashBoard from "./components/UserDashBoard.js";
import LogInScreen from "./components/LogInScreen.js";

const App = () => {
  const [activeUserData, setActiveUserData] = useState(undefined); // initialize the page with an empty user state

  if (activeUserData) {
    // if there is an active user, render the user Dashboard
    return (
      <div>
        <UserDashBoard activeUserData={activeUserData} />
      </div>
    );
  } else {
    // if there is no active user, render the LogInScreen instead to set an active user
    return (
      <div>
        <LogInScreen
          activeUserData={activeUserData}
          setActiveUserData={setActiveUserData}
        />
      </div>
    );
  }
};

export default App;
