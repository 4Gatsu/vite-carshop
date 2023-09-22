import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Employee_Links from "../components/Employee_Links";

const aboutText =
  "At CarShop, we believe that convenience and reliability are the driving forces behind every successful journey. As a premier car rental service, we are dedicated to providing you with an exceptional experience, whether you're traveling for business or pleasure. We take pride in offering a diverse fleet of high-quality vehicles and a customer-centric approach that sets us apart from the rest.Experience the convenience, comfort, and freedom that comes with renting a top-quality vehicle from a trusted provider. Book your next adventure with CarShop today!";
const aboutTextMobile =
  "At CarShop, we believe that convenience and reliability are the driving forces behind every successful journey. As a premier car rental service, we are dedicated to providing you with an exceptional experience.";

function About() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="about-us">
        <div className="content-wrapper">
          <div className="image-container">
            <img
              src="https://assets.autobuzz.my/wp-content/uploads/2017/03/08164009/2017-Vanda-Electrics-Dendrobium-5.jpg"
              alt="Car Rental"
            />
          </div>
          <div className="text-container remove-text-blur">
            <h1>About Us</h1>
            <p className="aboutText">{aboutText}</p>
            <p className="aboutTextMobile">{aboutTextMobile}</p>
          </div>
        </div>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <p className="team-section-description">
          Our team is composed of dedicated professionals with a passion for
          providing the best service to our customers. We strive to give an
          excellent shopping experience and provide helpful advice on choosing
          the perfect car. With years of hands-on experience, we're confident
          that you will find exactly what you are looking for at our store.
        </p>
        <div className="employee-container">
          <div className="employee">
            <img
              src="https://img2.hocoos.com/cache/img-pack/963/w-190/h-190/ww-190/wh-190/img-pack/963/pexels-cottonbro-5971254.jpg"
              alt="Employee 1"
            />
            <h3>Olivia Don</h3>
            <p>Customer Service Representative</p>
            <Employee_Links />
          </div>
          <div className="employee">
            <img
              src="https://img2.hocoos.com/cache/img-pack/963/w-190/h-190/ww-190/wh-190/img-pack/963/pexels-anthony-shkraba-7144180.jpg"
              alt="Employee 1"
            />
            <h3>Olivier Leclerc</h3>
            <p>Rental Agent</p>
            <Employee_Links />
          </div>
          <div className="employee">
            <img
              src="https://img2.hocoos.com/cache/img-pack/963/w-190/h-190/ww-190/wh-190/img-pack/963/pexels-cottonbro-5990130.jpg"
              alt="Employee 1"
            />
            <h3>David Smith</h3>
            <p>Fleet Manager</p>
            <Employee_Links />
          </div>
          <div className="employee">
            <img
              src="https://img2.hocoos.com/cache/img-pack/963/w-190/h-190/ww-190/wh-190/img-pack/963/pexels-cottonbro-6538857.jpg"
              alt="Employee 1"
            />
            <h3>Madison Parker</h3>
            <p>Reservation Specialist</p>
            <Employee_Links />
          </div>
        </div>
      </div>
      <div className="testimonial-section ">
        <h4 className="testimonial-heading">Testimonials</h4>
        <h1 className="testimonial-description">What out clients say</h1>
        <p className="testimonial-description-p">
          Our car store testimonials page is a celebration of the many voices
          that make up our community. We invite you to read through these
          stories and experiences, from customers of all lifestyles and
          backgrounds, to learn more about how they use our cars in their
          everyday lives.
        </p>
        <div
          id="testimonial-carousel"
          className="carousel slide about-us-carousel"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#testimonial-carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#testimonial-carousel" data-slide-to="1"></li>
            <li data-target="#testimonial-carousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/17395536/pexels-photo-17395536/free-photo-of-the-waves-are-calling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100 carousel-blur"
                alt="Testimonial 1"
              />
              <div className="carousel-caption">
                <h5>John D.</h5>
                <p>
                  FastWheels Car Rentals made my trip a breeze. Highly
                  recommended!"
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100 carousel-blur"
                alt="Testimonial 2"
              />
              <div className="carousel-caption">
                <h5>Daniel H.</h5>
                <p>
                  "The staff was friendly, the rates were affordable, and the
                  vehicle was in excellent condition"
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/11495258/pexels-photo-11495258.jpeg"
                className="d-block w-100 carousel-blur"
                alt="Testimonial 3"
              />
              <div className="carousel-caption">
                <h5>Michael S.</h5>
                <p>
                  "FastWheels Car Rentals provided exceptional service from
                  start to finish. A definite go-to for my car rental needs."
                </p>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#testimonial-carousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#testimonial-carousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
