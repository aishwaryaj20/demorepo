import React from 'react'
import {FaAngular, FaCss3, FaHtml5, FaJava,  FaNodeJs, FaReact} from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
function Courosel() {
    return (
      <div>
        <div className="courosel-parent position-relative" id="courosel">
          <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
            Technologies I use
          </h1>

          <div className="gallery">
            <span style={{ "--i": 1 }}>
              <FaReact color="cyan" />
            </span>
            <span style={{ "--i": 2 }}>
              <FaAngular color="orangered" />
            </span>
            <span style={{ "--i": 3 }}>
              <DiMongodb color="orange" />
            </span>
            <span style={{ "--i": 4 }}>
              <FaNodeJs color="green" />
            </span>
            <span style={{ "--i": 5 }}>
              <FaJava color="orange" />
            </span>

            <span style={{ "--i": 6 }}>
              <SiTailwindcss color="orange" />
            </span>
            <span style={{ "--i": 7 }}>
              <FaHtml5 color="orange" />
            </span>
            <span style={{ "--i": 8 }}>
              <FaCss3 color="blue" />
            </span>
          </div>
        </div>
      </div>
    );
}

export default Courosel
