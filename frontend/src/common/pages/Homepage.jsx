import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="img/h1tf.webp" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="img/h2tf.webp" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="img/h3tf.png" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="img/h4tf.png" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  <div className="text-center mb-5">
      <div className="p-5 bg-primary-main text-white rounded-3">
        <h1 className="display-4">Welcome to NKT College</h1>
        <p className="lead">Your Gateway to Excellence in Higher Education</p>
        <a href="#about" className="btn btn-light btn-lg">
          Discover More
        </a>
      </div>
    </div>

    <div id="about" className="py-5">
      <h2 className="text-center mb-4">About NKT College</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="img/college_campus.jpg"
            alt="NKT College Campus"
            className="img-fluid rounded-3 shadow"
          />
        </div>
        <div className="col-md-6">
          <p className="text-muted">
            With over 50 years of academic excellence, NKT College stands as a beacon of knowledge and innovation. We are committed to shaping the future by fostering a culture of learning, leadership, and social responsibility. Our vibrant campus life, expert faculty, and modern facilities ensure a transformative educational experience.
          </p>
          <a href="about.html" className="btn bg-primary-main">
            Learn More About Us
          </a>
        </div>
      </div>
    </div>

    <div className="py-5 bg-light rounded-3">
      <h2 className="text-center mb-4">Why Choose NKT College?</h2>
      <div className="row text-center gy-4">
        <div className="col-md-4">
          <i className="primary-main bi-trophy-fill text-primary" style={{ fontSize: "50px" }}></i>
          <h5 className="mt-3">50+ Years of Excellence</h5>
          <p>Trusted by generations for its legacy of academic rigor and holistic development.</p>
        </div>
        <div className="col-md-4">
          <i className="primary-main bi-people-fill text-primary" style={{ fontSize: "50px" }}></i>
          <h5 className="mt-3">15,000+ Alumni</h5>
          <p>A global network of professionals leading industries and communities.</p>
        </div>
        <div className="col-md-4">
          <i className="primary-main bi-building text-primary" style={{ fontSize: "50px" }}></i>
          <h5 className="mt-3">Modern Campus</h5>
          <p>Advanced infrastructure, state-of-the-art labs, and vibrant campus culture.</p>
        </div>
      </div>
    </div>

    <div className="text-center py-5">
      <h2>Join NKT College Today!</h2>
      <p>
        Start your journey toward a brighter future with us. Experience education that inspires and empowers.
      </p>
      <a href="admissions.html" className="btn btn-primary btn-lg">
        Apply Now
      </a>
    </div>
    </>
  )
}
