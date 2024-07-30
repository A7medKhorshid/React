import "./Portfolio.css"
import img1 from "./../../assets/images/poert1.png"
import img2 from "./../../assets/images/port2.png"
import img3 from "./../../assets/images/port3.png"


const Portfolio = () => {

  function Fullview(x) {
    document.getElementById("fullImage").src = x;
    document.getElementById("fullViewImage").style.display = "flex";
  }

  function CloseFullview() {
    document.getElementById("fullViewImage").style.display = "none";
  }

  return (
    <>
          <div className="port">
      <div className="container">
        <div className="row g-5">
              <h2 className="pt-4 text-uppercase text-center title">portfolio component</h2>
              <div className="star d-flex flex-row justify-content-center align-items-center g-1 gap-3 text-center">
                <div className="lines"></div>
                  <i class="fa-solid fa-star"></i>
                <div className="lines"></div>
              </div>
          
          <div className="col-lg-4">
            <div className="inner images">
                <div className="img-area" onClick={() => Fullview(img1)} >
                  <img src={img1} alt="" className="w-100"/>
                  <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="inner images ">
            <div className="img-area" onClick={() => Fullview(img2)}>
                  <img src={img2} alt="" className="w-100" />
                  <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="inner images ">
            <div className="img-area" onClick={() => Fullview(img3)}>
                  <img src={img3} alt="" className="w-100" />
                  <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="inner images ">
            <div className="img-area" onClick={() => Fullview(img1)}>
                  <img src={img1} alt="" className="w-100"/>
                  <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="inner images ">
            <div className="img-area" onClick={() => Fullview(img2)}>
                  <img src={img2} alt="" className="w-100"/>
                  <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="inner images ">
            <div className="img-area" onClick={() => Fullview(img3)}>
                  <img src={img3} alt="" className="w-100" />
                  <div className="layer">
                    <i class="fa-solid fa-plus"></i>
                  </div>
              </div>
            </div>
            </div>
        </div>
      </div>
      </div>
      

      <div id="fullViewImage" onClick={CloseFullview}>
          <img alt="" id="fullImage"/>
      </div>

    </>
  )
}

export default Portfolio