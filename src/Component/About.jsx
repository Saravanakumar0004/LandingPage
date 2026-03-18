import Navbar from "./Navbar";
import Footer from "./Footer";

const sections = [
  {
    id: 1,
    title: "Our mission",
    text: "To become the best Supply Chain Logistics—Suppliers Experience, Service Quality, Innovation to growth for business and Society",
  },
  {
    id: 2,
    title: "Our Brand Promise",
    text: "To become the leading logistics and supply chain partner in the Middle East, recognized for operational excellence, customer-centric innovation, and a trusted global network that moves businesses forward. We envision a future where technology, transparency, and sustainability redefine logistics at every step",
  },
  {
    id: 3,
    title: "Chairman's Message",
    text: "All praise to Allah, the Benefactor. Since 2006, HBN Shipping and Logistics has grown steadily, serving key sectors and supporting national progress. In shā' Allāh, our vision is to become a top regional and global supply chain partner—driven by experience, quality service, and innovation. We thank Allah for His mercy and pray for continued strength and growth.",
  },
];

const HBNAboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="hbn-about-page">

      {/* ══ Hero Banner ══ */}
      <div
        className="hbn-about-page__banner"
        style={{
          backgroundImage:
            "url(https://hbnlogistics.com/wp-content/uploads/2025/06/about-banner.jpg)",
        }}
      >
        <div className="hbn-about-page__overlay" />
        <div className="hbn-about-page__banner-content">
          <p className="hbn-about-page__eyebrow">HBN SHIPPING AND LOGISTICS W.L.L</p>
          <h1 className="hbn-about-page__title">
            About HBN Shipping &amp; Logistics
          </h1>
          <p className="hbn-about-page__subtitle">
            Customized Logistics Solutions Worldwide.
          </p>
        </div>
      </div>

      {/* ══ Subsidiaries Image ══ */}
      <section className="hbn-about-page__subs">
        <img
          src="https://hbnlogistics.com/wp-content/uploads/2025/06/our-subsidaries.png"
          alt="Our Subsidiaries"
          className="hbn-about-page__subs-img"
        />
      </section>

       <section className="hbn-mission">
      {/* ── Heading ── */}
      <h2 className="hbn-mission__heading">
        From Start to Destination Area
      </h2>
 
      <div className="hbn-mission__body">
        {/* ── Left: Image ── */}
        <div className="hbn-mission__image-col">
          <img
            src="https://hbnlogistics.com/wp-content/uploads/2025/06/about_img.png"
            alt="HBN Team"
            className="hbn-mission__image"
          />
        </div>
 
        {/* ── Right: Content ── */}
        <div className="hbn-mission__content">
          {sections.map((section) => (
            <div key={section.id} className="hbn-mission__item">
              <div className="hbn-mission__item-header">
                <h3 className="hbn-mission__item-title">{section.title}</h3>
                <img
                  src="http://hbnlogistics.com/wp-content/uploads/2025/06/icon-1.png"
                  alt=""
                  className="hbn-mission__icon"
                  aria-hidden="true"
                />
              </div>
              <p className="hbn-mission__item-text">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
   

    <div className="hbn-footer__bottom">

        {/* Brand */}
        <div className="hbn-footer__brand">

          {/* Logo Image */}
          <img
            src="https://hbnlogistics.com/wp-content/themes/hbn/images/logo.png"
            alt="HBN Shipping and Logistics"
            className="hbn-footer__logo-img"
          />

          <p className="hbn-footer__managed">
            Managed By: hbn@hbngroup.com.qa
          </p>
          <p className="hbn-footer__copy">
            © HBN Logistics 2025. All Rights Reserved.
          </p>

          <div className="hbn-footer__socials">
            <a href="#" aria-label="Instagram" className="hbn-footer__social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.856-.085 3.698-.601 5.038-1.942 1.341-1.34 1.857-3.182 1.942-5.038C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.667-.072-4.947-.085-1.857-.601-3.699-1.942-5.04C20.646.673 18.804.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hbn-footer__social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="hbn-footer__social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Menu */}
        <div className="hbn-footer__col">
          <h4 className="hbn-footer__col-title">Menu</h4>
          <ul className="hbn-footer__list">
            <li><a href="#" className="hbn-footer__link">Home</a></li>
            <li><a href="#" className="hbn-footer__link">Services</a></li>
            <li><a href="#" className="hbn-footer__link">About Us</a></li>
            <li><a href="#" className="hbn-footer__link">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="hbn-footer__col">
          <h4 className="hbn-footer__col-title">Services</h4>
          <ul className="hbn-footer__list">
            <li><a href="#" className="hbn-footer__link">Air Freight</a></li>
            <li><a href="#" className="hbn-footer__link">Sea Cargo and Shipping</a></li>
            <li><a href="#" className="hbn-footer__link">Road Transport</a></li>
            <li><a href="#" className="hbn-footer__link">Warehouse Service</a></li>
          </ul>
        </div>

        {/* Office */}
        <div className="hbn-footer__col">
          <h4 className="hbn-footer__col-title">Office</h4>
          <ul className="hbn-footer__list hbn-footer__list--office">
            <li className="hbn-footer__office-item">
              <span className="hbn-footer__office-icon">✉</span>
              <a href="mailto:sales@hbnlogistics.com" className="hbn-footer__link">
                sales@hbnlogistics.com
              </a>
            </li>
            <li className="hbn-footer__office-item">
              <span className="hbn-footer__office-icon">📞</span>
              <a href="tel:+97451473330" className="hbn-footer__link">
                +974 51473330
              </a>
            </li>
            <li className="hbn-footer__office-item">
              <span className="hbn-footer__office-icon">📍</span>
              <span className="hbn-footer__office-addr">
                Doha, State of Qatar,<br />
                Al Muntazah,<br />
                24 Rawdat Al-Khail,<br />
                840 Al-Rawabi Street,<br />
                Namco Building,<br />
                P.O. Box: 55913
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HBNAboutPage;