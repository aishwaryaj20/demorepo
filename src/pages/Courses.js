import React from "react";
import Header from "../components/Header";
import courseslist from "./coursesdata";
function Courses() {
  return (
    <div>
      <Header />
      <div
        className="courses-intro"
        style={{ backgroundImage: `url('./courses.svg')` }}
      >
        <div className="courses-intro-content">
          <h1>MY LEARNINGS</h1>

          <div>
            <p>
              “Result-driven full-stack web developer, passionate about
              developing user-friendly software applications. Excellent
              problem-solving skills and ability to perform well in a team.
              Seeking to develop software applications in a growing
              organization, as well as enhance and develop individual skills as
              a coder. .”
            </p>

            <button className="primary-button">
              <a href="#courses-list">GET STARTED</a>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="why-shey-parent">
        <div className="why-shey n-box1 flex-with-center">
          <h1>Why Shey ?</h1>
          <div className="why-shey-content">
            <p>Simple..</p>

            <p>I know how to kiss..</p>

            <p>No No No....Not that kiss</p>

            <p>I know how to</p>

            <p>Keep It Straight , Simple</p>
          </div>
        </div>
      </div> */}

      <div className="container courses-list mb-5" id="courses-list">
        <h3 className="font-bold">Take a look to my learnings</h3>
        <hr />

        <div className="row mt-5">
          {courseslist.map((course) => {
            return (
              <div className="col-md-4">
                <div className="position-relative course">
                  <img src={course.image} alt="" className="w-100" />
                  <div className="course-content w-100">
                    <h3>{course.title}</h3>
                    <hr />
                    <p>{course.description}</p>
                
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
