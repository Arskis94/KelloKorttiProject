import React from 'react';
import PieChart from "./PieChart"

const UserDashBoard = ({activeUserData}) => {

    return (
    <div className="wrapper">
        <div className="header">
            <div className="logout">Log out</div>
            <div className="settings"></div>
        </div>
        <div className="profile">
            <div className="profileIcon">
            </div>
            <div className="profileInfo">
                <div>USER_NAME</div>
                <div>
                    <p>email</p>
                    <p>050 123 45 67</p>
                </div>
            </div>
        </div>
        <div className="calendar">
            calendar
        </div>
        <PieChart activeUserData={activeUserData} />
        <div className="calenderWeek">
            weekview from calendar
        </div>
      </div>
    )
}

export default UserDashBoard 