// import React from "react";
// import one from "../website_assets/images/one.jpg";
// import "./Events.css";

// const Events = () => {
//   return (
//     <div className="d-flex">
//       <div className="cardparent d-flex justify-content-evenly flex-wrap align-items-center border">
//         <div class="card bg-dark p-1 text-dark bg-opacity-10 ">
//           <div
//             id="carouselExampleInterval"
//             className="carousel slide"
//             data-bs-ride="carousel"
//           >
//             <div class="carousel-inner">
//               <div class="carousel-item active" data-bs-interval="1000">
//                 <img src={one} class="d-block w-100" alt="..." />
//               </div>
//               <div class="carousel-item" data-bs-interval="1000">
//                 <img src={one} class="d-block w-100" alt="..." />
//               </div>
//               <div class="carousel-item" data-bs-interval="1000">
//                 <img src={one} class="d-block w-100" alt="..." />
//               </div>
//             </div>
//             <button
//               class="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExampleInterval"
//               data-bs-slide="prev"
//             >
//               <span
//                 class="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Previous</span>
//             </button>
//             <button
//               class="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExampleInterval"
//               data-bs-slide="next"
//             >
//               <span
//                 class="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Next</span>
//             </button>
//           </div>
//           <h1 className="p-3 text-center text-light fw-bold">COMING SOON</h1>
//         </div>

//         <div class="card bg-dark p-1 text-dark bg-opacity-10 ">
//           <div
//             id="carouselExampleInterval"
//             className="carousel slide"
//             data-bs-ride="carousel"
//           >
//             <div class="carousel-inner">
//               <div class="carousel-item active" data-bs-interval="1000">
//                 <img src={one} class="d-block w-100" alt="..." />
//               </div>
//               <div class="carousel-item" data-bs-interval="1000">
//                 <img src={one} class="d-block w-100" alt="..." />
//               </div>
//               <div class="carousel-item" data-bs-interval="1000">
//                 <img src={one} class="d-block w-100" alt="..." />
//               </div>
//             </div>
//             <button
//               class="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExampleInterval"
//               data-bs-slide="prev"
//             >
//               <span
//                 class="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Previous</span>
//             </button>
//             <button
//               class="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExampleInterval"
//               data-bs-slide="next"
//             >
//               <span
//                 class="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Next</span>
//             </button>
//           </div>
//           <h1 className="p-3 text-center text-light fw-bold">LIVE NOW</h1>
//         </div>

//         <div class="card bg-dark p-1 text-dark bg-opacity-10">
//           <div
//             id="carouselExampleInterval"
//             className="carousel slide"
//             data-bs-ride="carousel"
//           >
//             <div class="carousel-inner">
//               <div class="carousel-item active" data-bs-interval="1000">
//                 <img src={one} class="d-block w-100" alt="..." />
//               </div>
//               <div class="carousel-item" data-bs-interval="1000">
//                 <img src={one} class="d-block w-100" alt="..." />
//               </div>
//               <div class="carousel-item" data-bs-interval="1000">
//                 <img src={one} class="d-block w-100" alt="..." />
//               </div>
//             </div>
//             <button
//               class="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExampleInterval"
//               data-bs-slide="prev"
//             >
//               <span
//                 class="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Previous</span>
//             </button>
//             <button
//               class="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExampleInterval"
//               data-bs-slide="next"
//             >
//               <span
//                 class="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Next</span>
//             </button>
//           </div>
//           <h1 className="p-3 text-center text-light fw-bold">
//             PREVIOUS EVENTS
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;

import React from "react";
import one from "../website_assets/images/one.jpg";
import "./Events.css";

const Events = () => {
  return (
    <div className="d-flex">
      <div className="cardparent d-flex justify-content-evenly flex-wrap align-items-center border">
        <div className="card bg-dark p-1 text-dark bg-opacity-10 ">
          <div
            id="carouselExampleInterval1"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1000">
                <img src={one} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src={one} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src={one} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <h1 className="p-3 text-center text-light fw-bold">COMING SOON</h1>
        </div>

        <div className="card bg-dark p-1 text-dark bg-opacity-10 ">
          <div
            id="carouselExampleInterval1"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1000">
                <img src={one} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src={one} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src={one} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <h1 className="p-3 text-center text-light fw-bold">LIVE NOW</h1>
        </div>

        <div className="card bg-dark p-1 text-dark bg-opacity-10">
          <div
            id="carouselExampleInterval1"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1000">
                <img src={one} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src={one} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src={one} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <h1 className="p-3 text-center text-light fw-bold">
            PREVIOUS EVENTS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Events;
