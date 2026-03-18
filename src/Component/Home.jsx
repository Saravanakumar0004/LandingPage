import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const services = [
  {
    id: 1,
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/services-img-01.png",
    alt: "Road Transport",
    title: "Road Transport Services",
    description:
      "Reliable Qatar & GCC delivery with modern fleet and timely service.",
  },
  {
    id: 2,
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/services-img-02.png",
    alt: "Air Freight",
    title: "Air Freight Services",
    description:
      "Fast, secure air cargo with customs support and tracking.",
  },
  {
    id: 3,
    image: "https://hbnlogistics.com/wp-content/uploads/2025/06/services-img-03.png",
    alt: "Sea Cargo",
    title: "Sea Cargo and Shipping",
    description:
      "Fast, secure, and cost-effective sea freight for all your shipping needs.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "120+", label: "Global Destinations" },
  { value: "5000+", label: "Shipments Delivered" },
  { value: "98%", label: "Customer Satisfaction" },
];


const features = [
  { id: "01", label: "Transparent pricing" },
  { id: "02", label: "Warehouse storage" },
  { id: "03", label: "Real time tracking" },
  { id: "04", label: "Security for cargo" },
  { id: "05", label: "Easy payment method" },
];

const stats2 = [
  {
    value: "15K+",
    title: "Shipments Successfully Delivered",
    description:
      "We've handled millions of shipments across the Qatar and globally, powered by cutting-edge technology and a skilled logistics team.",
    bullets: [
      "Advanced logistics software",
      "Trained and certified staff",
      "Scalable operations",
    ],
  },
  {
    value: "99%",
    title: "On-Time Delivery Rate",
    description:
      "Our optimized routing, real-time tracking, and regional hubs help ensure timely deliveries, even in high-demand periods.",
    bullets: [
      "Smart delivery fleet",
      "Qatar-wide warehouse network",
      "Automated dispatch systems",
    ],
  },
  {
    value: "750K+",
    title: "Cargo Secured with Insurance",
    description:
      "We prioritize the safety of your cargo with top-tier security protocols and insurance coverage tailored to all shipping needs.",
    bullets: [
      "GPS-enabled tracking",
      "Qatar-compliant cargo insurance",
      "24/7 cargo security monitoring",
    ],
  },
];

const HBNHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
    <header className="App-header">
            <Navbar />
          </header>
    <section className="hbn-hero">
      <div className={`hbn-hero__bg ${loaded ? "hbn-hero__bg--loaded" : ""}`} />
      <div className="hbn-hero__overlay" />

      <div className="hbn-hero__content">
        <p className={`hbn-hero__tagline ${loaded ? "hbn-hero__anim--in" : ""}`}>
          Boundless. Seamless. Delivered
        </p>
        <h1 className={`hbn-hero__title ${loaded ? "hbn-hero__anim--in" : ""}`}>
          HBN Shipping and Logistics
        </h1>
        <h2 className={`hbn-hero__subtitle ${loaded ? "hbn-hero__anim--in" : ""}`}>
          From Here to Anywhere, Hassle-Free
        </h2>

        <div className={`hbn-hero__actions ${loaded ? "hbn-hero__anim--in" : ""}`}>
          <button className="hbn-hero__btn-primary">Explore More</button>
          <button className="hbn-hero__btn-icon" aria-label="Explore">
            ↗
          </button>
        </div>
      </div>
    </section>
    
    <section className="hbn-services">
      {/* ── Left ── */}
      <div className="hbn-services__left">
        <span className="hbn-services__label">/services/</span>
        <h2 className="hbn-services__heading">
          Transportation Services Which We Provide to Our Customers
        </h2>
        <div className="hbn-services__actions">
          <button className="hbn-services__btn-primary">All Services</button>
          <button className="hbn-services__btn-icon" aria-label="Go">↗</button>
        </div>
      </div>

      {/* ── Right ── */}
      <div className="hbn-services__right">
        {services.map((service) => (
          <div key={service.id} className="hbn-services__item">
            <div className="hbn-services__icon-wrap">
              <img
                src={service.image}
                alt={service.alt}
                className="hbn-services__icon-img"
              />
            </div>
            <div className="hbn-services__info">
              <h3 className="hbn-services__title">{service.title}</h3>
              <p className="hbn-services__desc">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

     <section className="hbn-about">
      {/* ── Left: Image ── */}
      <div className="hbn-about__image-col">
        <div className="hbn-about__image-wrap">
          <img
            src="https://hbnlogistics.com/wp-content/uploads/2025/06/Free_Shipping_Container.png"
            alt="Shipping Container"
            className="hbn-about__image"
          />
          <div className="hbn-about__image-badge">
            <span className="hbn-about__badge-number">15+</span>
            <span className="hbn-about__badge-text">Years of<br />Experience</span>
          </div>
        </div>
      </div>

      {/* ── Right: Content ── */}
      <div className="hbn-about__content">
        <span className="hbn-about__label">/about us/</span>

        <h2 className="hbn-about__heading">
          We Are Your Trusted Logistics Partner
        </h2>

        <p className="hbn-about__para">
          HBN Shipping and Logistics W.L.L is a premier logistics company
          headquartered in Qatar, delivering seamless freight and transportation
          solutions across the GCC and beyond. With a commitment to reliability,
          speed, and customer-first service, we handle every shipment with care.
        </p>

        <p className="hbn-about__para">
          Our team of experts ensures your cargo reaches its destination safely
          and on time — whether by road, air, or sea. From local deliveries to
          international freight, we make logistics boundless, seamless, and
          delivered.
        </p>

        {/* Stats Grid */}
        <div className="hbn-about__stats">
          {stats.map((stat, i) => (
            <div key={i} className="hbn-about__stat">
              <span className="hbn-about__stat-value">{stat.value}</span>
              <span className="hbn-about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hbn-about__actions">
          <button className="hbn-about__btn-primary">Learn More</button>
          <button className="hbn-about__btn-icon" aria-label="Go">↗</button>
        </div>
      </div>
    </section>

     <section className="hbn-features">
      {/* ── Left: Container Image ── */}
      <div className="hbn-features__image-col">
        <img
          src="https://hbnlogistics.com/wp-content/uploads/2025/06/features_img.png"
          alt="Shipping Container"
          className="hbn-features__image"
        />
      </div>
 
      {/* ── Right: Content ── */}
      <div className="hbn-features__content">
        <span className="hbn-features__label">/services/</span>
        <h2 className="hbn-features__heading">
          Core Features of Our<br />Logistics Advantage
        </h2>
 
        <ul className="hbn-features__list">
          {features.map((feature) => (
            <li key={feature.id} className="hbn-features__item">
              <span className="hbn-features__item-text">
                <span className="hbn-features__item-num">{feature.id}.</span>
                {feature.label}
              </span>
              <span className="hbn-features__item-arrow">↘</span>
            </li>
          ))}
        </ul>
      </div>
    </section>


     <section className="hbn-expertise">
      {/* Background texture image */}
      <div
        className="hbn-expertise__bg"
        style={{
          backgroundImage:
            "url(https://hbnlogistics.com/wp-content/themes/hbn/images/getinTouch_BG.png)",
        }}
      />
 
      {/* Plane image — top right decorative. Replace URL with your actual plane asset */}
      <img
        src="https://hbnlogistics.com/wp-content/uploads/2025/06/plane_expertise.png"
        alt=""
        className="hbn-expertise__plane"
        aria-hidden="true"
        onError={(e) => { e.target.style.display = "none"; }}
      />
 
      <div className="hbn-expertise__inner">
        {/* ── Header ── */}
        <div className="hbn-expertise__header">
          <span className="hbn-expertise__label">/services/</span>
          <h2 className="hbn-expertise__heading">
            Expertise in Our<br />Transportation Services
          </h2>
        </div>
 
        {/* ── Stats Grid ── */}
        <div className="hbn-expertise__grid">
          {stats2.map((stat, i) => (
            <div key={i} className="hbn-expertise__card">
              <span className="hbn-expertise__value">{stat.value}</span>
              <h3 className="hbn-expertise__card-title">{stat.title}</h3>
              <div className="hbn-expertise__divider" />
              <p className="hbn-expertise__card-desc">{stat.description}</p>
              <ul className="hbn-expertise__bullets">
                {stat.bullets.map((bullet, j) => (
                  <li key={j} className="hbn-expertise__bullet">
                    <span className="hbn-expertise__bullet-arrow">↘</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="App-footer">
          <Footer/>
        </div>
    </>
  );
};

export default HBNHero;