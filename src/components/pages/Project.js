import React from "react";
import Project1 from "../../img/project1.png";
import Budget from "../../img/budget.png";
import Employee from "../../img/employee.png";
import Magic from "../../img/magic.png";
import Weather from "../../img/weather.png";
import Team from '../../img/team.png'

export default function Project() {
  return (
    <div className="make-neat">
      <h1>Projects</h1>
      <div className="container-fluid">
        <div className='row'>
          <div className="col col-lg-6  mt-4">
            <img src={Project1} className="card-img mb-0" alt="..." />
            <button className="row justify-content-center"><a href="https://github.com/ZackLai21/real-estate-research" target='_blank'>GitHub Repo</a></button>
          </div>
          <div className="col col-lg-6 mt-4">
            <img src={Budget} className="card-img mb-0" alt="..." />
            <button className="row justify-content-center"><a href="https://github.com/ZackLai21/budget-tracker" target='_blank'>GitHub Repo</a></button>
          </div>
          <div className="col col-lg-6 mt-4 ">
            <img src={Employee} className="card-img mb-0" alt="..." />
            <button className="row justify-content-center"><a href="https://github.com/ZackLai21/employee-tracker" target='_blank'>GitHub Repo</a></button>
          </div>
          <div className="col col-lg-6 mt-4 ">
            <img src={Magic} className="card-img mb-0" alt="..." />
            <button className="row justify-content-center"><a href="https://github.com/Ivo-Gatzinski/magic-8-ball" target='_blank'>GitHub Repo</a></button>
          </div>
          <div className="col col-lg-6 mt-4 ">
            <img src={Weather} className="card-img mb-0" alt="..." />
            <button className="row justify-content-center"><a href="https://github.com/ZackLai21/weather-dashboard" target='_blank'>GitHub Repo</a></button>
          </div>
          <div className="col col-lg-6 mt-4 ">
            <img src={Team} className="card-img mb-0" alt="..." />
            <button className="row justify-content-center"><a href="https://github.com/ZackLai21/team-profile-generator" target='_blank'>GitHub Repo</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}
