import React from "react";

export default function Courses() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/h1tf.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="img/h2tf.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="img/h3tf.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="img/h4tf.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container py-5">
        <div className="shadow p-3 bg-body rounded-3">
          <div className="text-center mb-4">
            <h2>Our Academic Programs</h2>
            <p className="text-muted">
              Explore a range of undergraduate, postgraduate, and doctoral programs designed to foster academic
              excellence and professional growth.
            </p>
          </div>

          <div className="row gy-4">
            <div className="col-md-4 col-6">
              <div className="card text-center border-0 h-100">
                <img
                  src="img/undergraduate.png"
                  style={{ maxWidth: "100px", margin: "auto" }}
                  className="card-img-top"
                  alt="Undergraduate Programs"
                />
                <div className="card-body">
                  <h4 className="card-title">Undergraduate Programs</h4>
                  <p className="card-text">
                    Bachelor's degree programs in Engineering, Arts, Science, Business Administration, and more. Build
                    a strong academic foundation for your future.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Explore Programs
                  </a>
                </div>
              </div>
            </div>

            {/* Repeat for other academic program cards */}

          </div>
        </div>

        <div className="py-5">
          <h3 className="text-center mb-4">Why Choose Our College?</h3>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="bi bi-book-fill text-primary" style={{ fontSize: "50px" }}></i>
              <h5 className="mt-3">World-Class Faculty</h5>
              <p>
                Learn from highly qualified professors and researchers who bring real-world experience to the classroom.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-laptop-fill text-primary" style={{ fontSize: "50px" }}></i>
              <h5 className="mt-3">State-of-the-Art Facilities</h5>
              <p>
                Our campus features advanced labs, libraries, and collaborative spaces to foster learning and
                innovation.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-globe text-primary" style={{ fontSize: "50px" }}></i>
              <h5 className="mt-3">Global Opportunities</h5>
              <p>
                Participate in exchange programs, internships, and research collaborations with international
                universities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
