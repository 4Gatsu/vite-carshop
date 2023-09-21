const Footer = () => {
  return (
    <footer className="footer gradient">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png"
            alt="Company Logo"
          />
          <div>
            <h4>CarShop</h4>
            <p>We prioritize high-quality cars at affordable prices.</p>
          </div>
        </div>
        <div className="footer-story ">
          <h4>Why Choose Us?</h4>
          <p>
            We have been providing top-notch cars and excellent customer service
            for over a decade. Our team of experts handpicks each vehicle,
            ensuring the highest quality. With our affordable prices, you can
            drive your dream car without breaking the bank.
          </p>
        </div>
        <div>
          <div className="footer-contact-header">
            <h4>Contact Information</h4>
          </div>
          <div className="footer-contact-info">
            <span className="footer-icon">📞</span>
            <p>+1234567890</p>
          </div>
          <div className="footer-contact-info">
            <span className="footer-icon">🏠</span>
            <p>Skrzyszów, Poland</p>
          </div>
          <div className="footer-contact-info">
            <span className="footer-icon">✉️</span>
            <p>info@carshop.com</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright footer-center">
        <p>&copy; 2023 CarShop.com</p>
      </div>
    </footer>
  );
};

export default Footer;
