import React from "react";
import Project1 from "../../img/project1.png";
import Budget from "../../img/budget.png";
import Employee from "../../img/employee.png";
import Magic from "../../img/magic.png";
import Weather from "../../img/weather.png";


export default function Project() {
  return (
    <div className="make-neat">
      <h1>Project Page</h1>
      <div className="">
        <img src={Project1} className="card-img" alt="..." />
      </div>
      <div className="">
        <img src={Budget} className="card-img" alt="..." />
      </div>
      <div className="">
        <img src={Employee} className="card-img" alt="..." />
      </div>
      <div className="">
        <img src={Magic} className="card-img" alt="..." />
      </div>
      <div className="">
        <img src={Weather} className="card-img" alt="..." />
      </div>
    </div>
  );
}
