import React from "react";
import { FaReact } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import "./workExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  return (
    <>
      <div className="workExp" id="workExperience">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />

        <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid #138781)" }}
            date="2023 - Present"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<FaReact />}
          >
            <h2 className="vertical-timeline-element-title">Web developer</h2>
            <h4 className="vertical-timeline-element-subtitle">
              The Madras Branding Company, Chennai
            </h4>
            <p>
              Tech Stack: HTML, CSS, Javascript, REACT, Nodejs, Firebase,
              Nextjs, Ant Design, Gitlab, REST APIs.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid #138781)" }}
            date="2022 - 2022"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<FaReact />}
          >
            <h2 className="vertical-timeline-element-title">React Developer</h2>
            <h4 className="vertical-timeline-element-subtitle">
              Addval Solutions, Mohali
            </h4>
            <p>
              Tech Stack: HTML, CSS, Javascript, REACT, Ant Design, Gitlab, REST
              APIs.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid #138781)" }}
            date="2021 - 2022"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdDeveloperMode />}
          >
            <h2 className="vertical-timeline-element-title">Web Developer</h2>
            <h4 className="vertical-timeline-element-subtitle">
              Devscope IT, Jammu
            </h4>
            <p>
              Tech Stack: HTML, CSS, Javascript, jQuery, AJAX, PHP, MySQL,
              Wordpress CMS.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExperience;
