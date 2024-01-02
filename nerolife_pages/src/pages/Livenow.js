import React from "react";
import defaultvideo from "../website_assets/videos/default_bg_video.mp4";
import one from "../website_assets/images/one.jpg";
import "./Livenow.css";

const Livenow = () => {
  return (
    <div>
      <h1 className="text-center text-light pb-3 fw-bold">LIVE NOW</h1>
      <div className="relative" style={{ height: "600px" }}>
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source
              src={defaultvideo} // Replace with your video file path
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 text-white"></div>
      </div>

      <div className="mt-5 mb-5 d-flex flex-wrap justify-content-evenly">
        <div className="eachevent">
          <img src={one} alt="single event poster" />
        </div>

        <div className="eachevent border">
          <div className="d-flex justify-content-start text-light p-2">
            <h1>EVENT NAME : </h1> <p>Some name </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1>VENUE : </h1> <p>Some name </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1>ARTIST : </h1> <p>Some name </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1>DATE : </h1> <p>Some name </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1>START : </h1> <p>Some name </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1>END : </h1> <p>Some name </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1>MUSIC CATEGORY : </h1> <p>Some name </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1>EVENT CATEGORY : </h1> <p>Some name </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1>RESERVATION : </h1>{" "}
            <p className="border border-light text-center pt-1 ps-5 pe-5 pb-1 ms-5">
              CLOSED
            </p>
          </div>

          <div className="d-flex justify-content-start text-light p-2">
            <h1>GUEST LIST : </h1>{" "}
            <p className="border border-light text-center pt-1 ps-5 pe-5 pb-1 ms-5">
              CLOSED
            </p>
          </div>

          <div className="d-flex justify-content-start text-light p-2">
            <h1>TICKETS : </h1>{" "}
            <p className="border border-light text-center pt-1 ps-5 pe-5 pb-1 ms-5">
              CLOSED
            </p>
          </div>
        </div>
        <div className="eachevent border d-flex align-items-center justify-content-center">
          <div className="">
            <div>
              <h1 className="text-center text-light fw-bold ">GALLERY</h1>
            </div>

            <div>
              <h1 className="text-center text-light fw-bold">
                IMAGES | VIDEOS
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="disclamer">
        <h1 className="text-decoration-underline text-light fw-bold p-3">
          DISCLAMERS:
        </h1>

        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link text-light" href="#">
              &rarr; Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">
              &rarr; Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">
              &rarr; Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">
              &rarr; Active
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Livenow;
