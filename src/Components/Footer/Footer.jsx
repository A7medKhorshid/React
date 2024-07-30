import "./Footer.css"

const Footer = () => {
  return (
    <>
        <div className="footer text-center text-white pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="inner">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <div className="inner">
                            <h3>AROUND THE WEB</h3>
                            <div className="icons">
                                <span><i class="fa-brands fa-facebook fa-1x"></i></span>
                                <span><i class="fa-brands fa-twitter fa-1x"></i></span>
                                <span><i class="fa-brands fa-linkedin-in fa-1x"></i></span>
                                <span><i class="fa-solid fa-globe fa-1x"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="text-center footer-bottom text-white p-3">
              <div className="container">
                  <p>Copyright © Your Website 2021</p>
              </div>
          </div>
    </>
      
      
  )
}

export default Footer