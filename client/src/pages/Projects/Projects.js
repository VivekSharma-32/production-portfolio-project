import React from "react";
import "./projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top recent projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          exercitationem, animi perspiciatis aliquid nihil ducimus dolorum ex,
          laboriosam quae reprehenderit libero explicabo corporis magni minus
          non! Reiciendis, laborum?
        </p>
        <div className="row" id="ads">
          <Spin>
            {/* card design  */}
            <div className="col-md-4 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aIIQyF-Y08HimBLcCt5u14-Epj8I86xgkA&usqp=CAU"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">Shopping website</h5>
                  </div>
                  <a href="#" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aIIQyF-Y08HimBLcCt5u14-Epj8I86xgkA&usqp=CAU"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">Shopping website</h5>
                  </div>
                  <a href="#" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aIIQyF-Y08HimBLcCt5u14-Epj8I86xgkA&usqp=CAU"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">Shopping website</h5>
                  </div>
                  <a href="#" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
