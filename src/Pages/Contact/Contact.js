import React from "react";

const Contact = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-8 mt-5">
          <div className="jumbotron">
            <div className="row">
              <div className="col-12">
                <h1 className="display-4">Ready for any project!</h1>
                <hr className="my-4" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="text-muted">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/in/anthony-davis-29344bb8/
"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Click Here</p>
                </a>
                <h2 className="text-muted">GitHub</h2>
                <a
                  href="https://github.com/AnthonyDavis89/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Click Here</p>
                </a>

                <h2 className="text-muted">Email</h2>
                <a
                  href="mailto:Anthony_Davis89@icloud.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Email Me</p>
                </a>

                <h2 className="text-muted">Resume</h2>
                <a button class=" contact-btn btn btn-outline-secondary" type="button" href="./assets/images/AD_Resume_TPM.pdf"
                  download>Resume</a>


                <h2>Fill out this form</h2>
                <div class="input-group">
                  <span class="input-group-text">First and last name</span>
                  <input type="text" aria-label="First name" class="form-control" />
                  <input type="text" aria-label="Last name" class="form-control" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;