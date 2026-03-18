import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const services = [
  {
    id: 1,
    num: "01",
    label: "Air Freight",
    banner: "https://hbnlogistics.com/wp-content/uploads/2025/06/air-freight-banner.png",
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/service-img.png",
    title: "Air Freight",
    body: [
      "By Hbn shipping and logistics – transportation systems to deliver fresh produce, seafood, flowers, and other perishable goods to consumers. Air freight plays a vital role in this process, enabling the rapid movement of these temperature-sensitive items.",
      "Guarantees a temperature-controlled transportation from Doha port. Highest quality at competitive rates.",
      "Cool Air cargo express dedicated team Located at airside shipments can be delivered as quickly and as fresh as possible. Temperature-controlled truck transport -for the transport of fresh, frozen or live seafood.",
    ],
  },
  {
    id: 2,
    num: "02",
    label: "Sea Cargo",
    banner: "https://hbnlogistics.com/wp-content/uploads/2025/06/sea-cargo-banner.png",
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/sea-cargo.png",
    title: "Sea Cargo",
    body: [
      "Sea Freight to doha — Sending sea freight to Doha? Rapid Shipping offers a full range of sea freight services for commercial and personal shipments.",
      "We handle FCL and LCL shipments with competitive pricing and reliable schedules to and from all major global ports.",
      "Our experienced team manages all documentation, customs clearance, and last-mile delivery to ensure your cargo arrives safely and on time.",
    ],
  },
  {
    id: 3,
    num: "03",
    label: "Road Transport",
    banner: "https://hbnlogistics.com/wp-content/uploads/2025/06/road-transport-banner.png",
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/road-transport-img-768x583.png",
    title: "Road Transport",
    body: [
      "Land Freight. From Doha To Saudi Arabia | United Arab Emirates — Land Transport From Doha To Jeddah | Dammam | Riyadh | Yanbu | Umij | Al Khobar and more.",
      "Our modern fleet of vehicles ensures timely and secure delivery across GCC countries with full tracking capabilities.",
      "We offer FTL and LTL road freight solutions tailored to your cargo size, budget, and delivery timeline.",
    ],
  },
  {
    id: 4,
    num: "04",
    label: "Warehousing",
    banner: "https://hbnlogistics.com/wp-content/uploads/2025/06/warehouse-banner.png",
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/warehouse-img-768x583.png",
    title: "Warehousing",
    body: [
      "HBN LOGISTICS as a warehousing specialist and agent, provides unparalleled warehousing services for your cargo. With robust data management systems.",
      "Our strategically located warehouses in Qatar offer short-term and long-term storage solutions for all cargo types.",
      "We provide inventory management, pick & pack, cross-docking, and distribution services from our secure facilities.",
    ],
  },
  {
    id: 5,
    num: "05",
    label: "Packers & Movers",
    banner: "https://hbnlogistics.com/wp-content/uploads/2025/06/packers-movers-banner-2.png",
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/packers-movers-1-768x583.png",
    title: "Packers & Movers",
    body: [
      "Experience a Hassle-Free Move with ELEGANT PACKERS AND MOVERS. Our team ensures a seamless transition to your new home.",
      "Full packing, loading, transport, unloading and unpacking services available for residential and corporate relocations.",
      "We handle all types of goods including fragile items, electronics, furniture, and high-value assets with the utmost care.",
    ],
  },
  {
    id: 6,
    num: "06",
    label: "Cool Express Service",
    banner: "https://hbnlogistics.com/wp-content/uploads/2025/06/cool-express-service-banner.png",
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/cool-express-service-img-1-768x583.png",
    title: "Cool Express Service",
    body: [
      "By Hbn shipping and logistics – transportation systems to deliver fresh produce, seafood, flowers, and other perishable goods to consumers.",
      "Our refrigerated vehicles maintain precise temperature control throughout the supply chain, from pickup to final delivery.",
      "We specialize in time-critical cold chain logistics including pharmaceuticals, food products, and temperature-sensitive cargo.",
    ],
  },
  {
    id: 7,
    num: "07",
    label: "Move to Qatar",
    banner: "https://hbnlogistics.com/wp-content/uploads/2025/06/moving-new-house-new.png",
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/moving-new-imgn1-768x583.png",
    title: "Move to Qatar",
    body: [
      "MOVETOQATAR is a Qatar leader in relocation services, offering employee relocation solutions to corporate clients and global moving services.",
      "We help individuals and families settle in Qatar with end-to-end support including visa assistance, housing, and school search.",
      "Our corporate relocation packages are tailored for businesses expanding their operations into Qatar and the wider GCC region.",
    ],
  },
  {
    id: 8,
    num: "08",
    label: "Vechicle Movers",
    banner: "https://hbnlogistics.com/wp-content/uploads/2025/06/service-banner.png",
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/vehicle-movers-1-768x583.png",
    title: "Vechicle Movers",
    body: [
      "NEXT CAR MOVE – Premium Car Export from Doha. We deliver vehicle to your door step! All you need is to choose your car and we handle the rest.",
      "We provide RoRo and container shipping for personal vehicles, commercial fleets, motorcycles, and heavy machinery.",
      "Our vehicle logistics service covers all major destinations worldwide with full insurance coverage and real-time tracking.",
    ],
  },
  {
    id: 9,
    num: "09",
    label: "Scrap logistics",
    banner: "https://hbnlogistics.com/wp-content/uploads/2025/06/service-banner.png",
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/scrap-logistics-1-768x583.png",
    title: "Scrap Logistics",
    body: [
      "Reliable transportation and logistics, ensuring you get an efficient turnaround on all collections. Advanced heavy lifting and specialist equipment.",
      "We manage the complete scrap logistics chain — from collection at your facility to delivery at recycling centers or export terminals.",
      "Our team is certified to handle ferrous, non-ferrous, and electronic scrap with full compliance to local and international regulations.",
    ],
  },
];

const HBNServiceDetail = () => {
  const [activeId, setActiveId] = useState(1);
  const active = services.find((s) => s.id === activeId);

  return (
    <div className="hbn-sd">
      <Navbar />

      {/* ══ Banner ══ */}
      <div
        className="hbn-sd__banner"
        style={{ backgroundImage: `url(${active.banner})` }}
      >
        <div className="hbn-sd__banner-overlay" />
        <h1 className="hbn-sd__banner-title">{active.title}</h1>
      </div>

      {/* ══ Main Layout ══ */}
      <div className="hbn-sd__layout">

        {/* ── Sidebar ── */}
        <aside className="hbn-sd__sidebar">
          <div className="hbn-sd__sidebar-card">
            <h3 className="hbn-sd__sidebar-heading">Our Services</h3>
            <ul className="hbn-sd__nav">
              {services.map((svc) => (
                <li key={svc.id}>
                  <button
                    className={`hbn-sd__nav-item ${activeId === svc.id ? "hbn-sd__nav-item--active" : ""}`}
                    onClick={() => setActiveId(svc.id)}
                  >
                    <span className="hbn-sd__nav-label">
                      {svc.num} {svc.label}
                    </span>
                    <span className="hbn-sd__nav-arrow">↗</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us CTA */}
          <div
            className="hbn-sd__cta"
            style={{
              backgroundImage:
                "url(https://hbnlogistics.com/wp-content/themes/hbn/images/getintouch.png)",
            }}
          >
            <div className="hbn-sd__cta-overlay" />
            <div className="hbn-sd__cta-content">
              <p className="hbn-sd__cta-text">
                Have any Questions?<br />Contact us Today!
              </p>
              <div className="hbn-sd__cta-actions">
                <button className="hbn-sd__cta-btn">Contact Us</button>
                <button className="hbn-sd__cta-icon" aria-label="Go">↗</button>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Detail Content ── */}
        <div className="hbn-sd__detail">
          <img
            src={active.image}
            alt={active.title}
            className="hbn-sd__detail-img"
          />
          <h2 className="hbn-sd__detail-title">{active.title}</h2>
          {active.body.map((para, i) => (
            <p key={i} className="hbn-sd__detail-para">{para}</p>
          ))}
        </div>

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
    </div>
  );
};

export default HBNServiceDetail;