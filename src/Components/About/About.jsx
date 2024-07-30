import "./About.css"
const About = () => {
  return (
    <div className="about text-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="inner d-flex flex-column justify-content-center align-items-center">
              <h2 className="pt-4 text-uppercase text-white text-center title">About component</h2>
              <div className="star d-flex flex-row justify-content-center align-items-center gap-3 pb-2">
                <div className="line"></div>
                <i class="fa-solid fa-star"></i>
                <div className="line"></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                  </div>
                  <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About