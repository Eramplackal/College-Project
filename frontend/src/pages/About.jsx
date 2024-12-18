import React from 'react'

export default function About() {
  return (
    <>
      {/* Legacy Section */}
      <div className="container py-5">
        <div className="shadow p-3 bg-body rounded-3">
          <div className="text-center mb-4">
            <h2>36+ Years of Legacy</h2>
          </div>
          <div className="row">
            {/* Coaching Centers */}
            <div className="col-md-4 col-6">
              <div className="card text-center border-0">
                <img
                  src="img/oai1.png"
                  style={{ maxWidth: "100px", margin: "auto" }}
                  className="card-img-top"
                  alt="Coaching centers"
                />
                <div className="card-body">
                  <h2 className="card-title">200+</h2>
                  <p className="card-text">Coaching centers in India</p>
                </div>
              </div>
            </div>
            {/* Qualified Students */}
            <div className="col-md-4 col-6">
              <div className="card text-center border-0">
                <img
                  src="img/oai2.png"
                  style={{ maxWidth: "100px", margin: "auto" }}
                  className="card-img-top"
                  alt="Qualified Students"
                />
                <div className="card-body">
                  <h2 className="card-title">231,700+</h2>
                  <p className="card-text">
                    Aakashians qualified NEET & JEE in 2024
                  </p>
                </div>
              </div>
            </div>
            {/* Expert Faculty */}
            <div className="col-md-4 col-6">
              <div className="card text-center border-0">
                <img
                  src="img/oai3.png"
                  style={{ maxWidth: "100px", margin: "auto" }}
                  className="card-img-top"
                  alt="Expert Faculty"
                />
                <div className="card-body">
                  <h2 className="card-title">4000+</h2>
                  <p className="card-text">Expert Faculty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container py-5">
        <div className="shadow p-3 bg-body rounded-3">
          {/* About Heading */}
          <div className="text-center mb-4">
            <h2>About NKT College</h2>
            <p className="text-muted">
              Empowering students through excellence in education, innovation,
              and holistic development since our inception.
            </p>
          </div>

          {/* Mission, Vision, and History */}
          <div className="row gy-4">
            {/* Mission */}
            <div className="col-md-4">
              <div className="card text-center border-0 h-100">
                <div className="card-body">
                  <h4 className="card-title">Our Mission</h4>
                  <p className="card-text">
                    To nurture globally competent individuals by providing a
                    robust academic foundation, fostering innovation, and
                    instilling ethical values.
                  </p>
                </div>
              </div>
            </div>
            {/* Vision */}
            <div className="col-md-4">
              <div className="card text-center border-0 h-100">
                <div className="card-body">
                  <h4 className="card-title">Our Vision</h4>
                  <p className="card-text">
                    To be a leading institution recognized for academic
                    excellence, research, and community impact, empowering
                    students to shape a better future.
                  </p>
                </div>
              </div>
            </div>
            {/* History */}
            <div className="col-md-4">
              <div className="card text-center border-0 h-100">
                <div className="card-body">
                  <h4 className="card-title">Our History</h4>
                  <p className="card-text">
                    Established in 1969, NKT College has a legacy of over five
                    decades in transforming education, with a strong focus on
                    academic excellence and societal contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="py-5">
        <h3 className="text-center mb-4">Why Choose NKT College?</h3>
        <div className="row">
          {/* Academic Excellence */}
          <div className="col-md-4 text-center">
            <i
              className="bi bi-mortarboard-fill text-primary"
              style={{ fontSize: "50px" }}
            ></i>
            <h5 className="mt-3">Academic Excellence</h5>
            <p>
              Ranked among the top colleges in the region for delivering
              quality education with a focus on holistic growth.
            </p>
          </div>
          {/* Diverse Community */}
          <div className="col-md-4 text-center">
            <i
              className="bi bi-people-fill text-primary"
              style={{ fontSize: "50px" }}
            ></i>
            <h5 className="mt-3">Diverse Community</h5>
            <p>
              A vibrant and inclusive campus life where students from
              different backgrounds come together to learn and grow.
            </p>
          </div>
          {/* Modern Infrastructure */}
          <div className="col-md-4 text-center">
            <i
              className="bi bi-building text-primary"
              style={{ fontSize: "50px" }}
            ></i>
            <h5 className="mt-3">Modern Infrastructure</h5>
            <p>
              State-of-the-art facilities including well-equipped labs,
              libraries, and innovation centers to support student success.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-5 bg-light rounded-3">
        <h3 className="text-center mb-4">Meet Our Leadership</h3>
        <div className="row">
          {/* Principal */}
          <div className="col-md-4 text-center">
            <img
              src="img/principal.jpg"
              className="rounded-circle mb-3"
              style={{ width: "120px", height: "120px" }}
              alt="Principal"
            />
            <h5>Dr. S. Ramachandran</h5>
            <p className="text-muted">Principal</p>
            <p>
              With over 20 years of experience in academia, Dr. Ramachandran
              leads NKT College with a vision of innovation and inclusivity in
              education.
            </p>
          </div>
          {/* Vice Principal */}
          <div className="col-md-4 text-center">
            <img
              src="img/vice_principal.jpg"
              className="rounded-circle mb-3"
              style={{ width: "120px", height: "120px" }}
              alt="Vice Principal"
            />
            <h5>Prof. Meera Iyer</h5>
            <p className="text-muted">Vice Principal</p>
            <p>
              A dedicated educator and mentor, Prof. Iyer is committed to
              student development and academic excellence.
            </p>
          </div>
          {/* Administrator */}
          <div className="col-md-4 text-center">
            <img
              src="img/administrator.jpg"
              className="rounded-circle mb-3"
              style={{ width: "120px", height: "120px" }}
              alt="Administrator"
            />
            <h5>Mr. Arjun Menon</h5>
            <p className="text-muted">Administrator</p>
            <p>
              Ensuring smooth operations and a student-centric approach, Mr.
              Menon oversees the college's administrative functions.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-5">
        <h3 className="text-center mb-4">What Our Alumni Say</h3>
        <div className="row">
          {/* Testimonial 1 */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-3 mb-4">
              <p className="text-muted">
                "NKT College provided me with the skills and confidence to
                pursue my dream career. The supportive faculty and excellent
                resources made all the difference."
              </p>
              <h5 className="text-end">- Priya Ramesh, Class of 2015</h5>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-3 mb-4">
              <p className="text-muted">
                "The diverse campus culture and emphasis on extracurriculars
                helped me develop both professionally and personally. I'm proud
                to be an alumnus of NKT College."
              </p>
              <h5 className="text-end">- Karthik Sharma, Class of 2018</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center py-5">
        <h3>Join Our Legacy</h3>
        <p>
          Be a part of an institution dedicated to empowering students and
          shaping the leaders of tomorrow.
        </p>
        <a href="#" className="btn btn-primary btn-lg">
          Get in Touch
        </a>
      </div>
    </>
  )
}
