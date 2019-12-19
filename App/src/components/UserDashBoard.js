import React from 'react';

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
        <div className="piechartArea">

            <div className="circleWrapper">

                <div id="attendanceCircle" className="circle">
                    <div className="innerCircle">
                        <div className="circleStat">0%</div>
                        <div className="attendance">Attendance</div>
                    </div>
                </div>

            </div>

        </div>
        <div className="calenderWeek">
            weekview from calendar
        </div>
      </div>
    )
}

export default UserDashBoard 