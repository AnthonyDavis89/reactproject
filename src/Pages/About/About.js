import React from "react";

const About = () => {
  return (
    <div>
      <main className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-10 col-lg-8 mt-5">
            <div className="jumbotron">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-4">Anthony Davis</h1>
                  <hr className="my-6" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    I have over 10 years of expertise IT expeirence. Ive worked for large compaines to small start-ups Throughout the years I've overseen and managed the development of complex IT applications with a significant focus on implementing solutions and improving application processing performance. Im constantly learning new technologies.
                  </p>

                </div>

              </div>
              <div className="row">
                <div className="col-lg-12">
                  <img class="coding" src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" alt="" />
                  <h1 class="skills-heading">A few of my skills</h1>
                  <h5 class="feature-heading">MERN Stack</h5>
                  <h5 class="feature-heading">MEAN Stack</h5>
                  <h5 class="feature-heading">API's</h5>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;