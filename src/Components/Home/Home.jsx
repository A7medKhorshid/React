import homeImg from "./../../assets/images/avataaars.svg"
import "./Home.css"
const Home = () => {
  return (
    <div className="text-center home text-white pb-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="inner">
              <img src={homeImg} alt="" className="avatar" />
              <h3 className="pt-4">START FRAMEWORK</h3>
              <div className="star d-flex flex-row justify-content-center align-items-center gap-3 pb-2">
                <div className="line"></div>
                <i class="fa-solid fa-star"></i>
                <div className="line"></div>
              </div>
              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home