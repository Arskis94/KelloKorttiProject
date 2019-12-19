import React, { useEffect } from 'react';
import $ from "jquery";

const PieChart = ({activeUserData}) => {



useEffect(() => {
    
    function circle($el, end, i) {
        if (end < 0) end = 0;
        else if (end > 100) end = 100;
        if (typeof i === "undefined") i = 0;
        var curr = (100 * i) / 360;
        $el.find(".circleStat").html(Math.round(curr) + "%");
        if (i <= 180) {
          $el.css(
            "background-image",
            "linear-gradient(" +
              (90 + i) +
              "deg, transparent 50%, rgb(255, 170, 0) 50%),linear-gradient(90deg, rgb(255, 170, 0) 50%, transparent 50%)"
          );
        } else {
          $el.css(
            "background-image",
            "linear-gradient(" +
              (i - 90) +
              "deg, transparent 50%, rgb(0, 136, 152) 50%),linear-gradient(90deg, rgb(255, 170, 0) 50%, transparent 50%)"
          );
        }
        if (curr < end) {
          setTimeout(function() {
            circle($el, end, ++i);
          }, 0.5);
        }
      }
      circle($("#attendanceCircle"), 75); // change the number here to a variable indicating attendance percentage I.E."activeUserData.AttendancePercentage"

},[]); // place the variable inside the array here as well

    return(
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
    )
}

export default PieChart