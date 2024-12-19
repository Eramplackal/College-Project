import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container py-5">
        {/* Contact Us Heading */}
        <div className="shadow p-3 bg-body rounded-3">
          <div className="text-center mb-4">
            <h2>Contact Us</h2>
            <p className="text-muted">We're here to help. Reach out to us for any inquiries or assistance.</p>
          </div>

          {/* Contact Details */}
          <div className="row gy-4">
            {/* Address */}
            <div className="col-md-4 text-center">
              <i className="bi bi-geo-alt-fill text-primary" style={{ fontSize: "50px" }}></i>
              <h5 className="mt-3">Our Address</h5>
              <p>
                NKT College
                <br />
                123, College Road,
                <br />
                Chennai, Tamil Nadu, India - 600001
              </p>
            </div>
            {/* Phone */}
            <div className="col-md-4 text-center">
              <i className="bi bi-telephone-fill text-primary" style={{ fontSize: "50px" }}></i>
              <h5 className="mt-3">Call Us</h5>
              <p>
                +91 44 1234 5678
                <br />
                +91 98765 43210
              </p>
            </div>
            {/* Email */}
            <div className="col-md-4 text-center">
              <i className="bi bi-envelope-fill text-primary" style={{ fontSize: "50px" }}></i>
              <h5 className="mt-3">Email Us</h5>
              <p>
                info@nktcollege.ac.in
                <br />
                admissions@nktcollege.ac.in
              </p>
            </div>
          </div>
        </div>

        {/* Send Us a Message */}
        <div className="py-5">
          <h3 className="text-center mb-4">Send Us a Message</h3>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Visit Us */}
        <div className="py-5 bg-light rounded-3">
          <h3 className="text-center mb-4">Visit Us</h3>
          <div className="row">
            <div className="col-md-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.228819227968!2d80.270718!3d13.0826801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d74eafbf89%3A0x7b2af67e8eaf38!2sNKT%20College!5e0!3m2!1sen!2sin!4v1678741413670!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center py-5">
          <h3>We'd Love to Hear From You</h3>
          <p>Feel free to reach out with any questions, feedback, or suggestions. Your journey with NKT College starts here.</p>
          <a href="#" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
}
