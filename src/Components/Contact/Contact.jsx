
import "./Contact.css"
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="inner">
              <h2 className="pt-4 text-uppercase text-center title">contact section</h2>
              <div className="star d-flex flex-row justify-content-center align-items-center gap-3 pb-2 text-center">
                <div className="lines"></div>
                <i class="fa-solid fa-star"></i>
                <div className="lines"></div>
              </div>

              <form >
                <div class="forma pt-4 m-auto" id="form">
                  <input type="Name"  id="exampleFormControlInput1" placeholder="userName"/>
                  <input type="number"  id="exampleFormControlInput1" placeholder="userAge" />
                  <input type="email"  id="exampleFormControlInput1" placeholder="userEmail" />
                  <input type="password"  id="exampleFormControlInput1" placeholder="userPassword" />
                  <div class="send">
                    <button className="send-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact