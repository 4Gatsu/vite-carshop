import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PickCar from "../components/PickCar";
import FAQ from "../components/FAQ";

const one = "The place for real car enthusiasts";
const two =
  "Rev up your dreams at CarShop, where exceptional service, automotive expertise, and unbeatable prices come together";

function Home() {
  return (
    <>
      <Navbar />
      <div className="thumbnail">
        <img
          src="https://i.imgur.com/5ObWJL1.jpeg"
          alt="chill driver"
          className="home-1st-img"
        />
        <img
          src="https://i.imgur.com/JOPTKIV.jpeg"
          alt="nissan gtr"
          className="home-2nd-img"
        />
        <div className="first-text">
          <h1> {one}</h1>
          <p> {two} </p>
        </div>
        <div />
      </div>
      <div className="services-description">
        <div className="services-text">
          <h5>Plan your trip now</h5>
          <h1>
            Save <span style={{ color: "red" }}>big</span> with our car rental
          </h1>
          <p>
            Choose from a wide range of vehicles and enjoy flexible booking
            options, competitive prices, and exceptional customer service.
          </p>
          <div className="services-buttons">
            <a
              className="btn services-btn btn-danger btn-lg"
              href="#down"
              role="button"
            >
              Book a ride
            </a>
            <a
              className="btn services-btn btn-dark btn-lg"
              href="/vite-carshop/about"
              role="button"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="services-image">
          <img src="https://i.imgur.com/GSPRRes.png" />
        </div>
      </div>
      <div className="services-info-description">
        <h5>Don't hesitate</h5>
        <h1>Quick and easy car rental</h1>
      </div>
      <div className="services-info">
        <div className="object-info">
          <img src="https://i.imgur.com/dGwHCXi.png" alt="object 1" />
          <h4>Pick a car</h4>
          <p>
            We have a wide selection of cars to suit your taste depending on
            needs
          </p>
        </div>
        <div className="object-info">
          <img src="https://i.imgur.com/pfjOkR3.png" alt="object 2" />
          <h4>Professional support</h4>
          <p>Expert staff to help you choose the perfect car</p>
        </div>
        <div className="object-info">
          <img src="https://i.imgur.com/ESlGTtj.png" alt="object 3" />
          <h4>Fast & on time</h4>
          <p>On-time delivery to your exact location</p>
        </div>
      </div>
      <PickCar />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
