import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import "./main.scss";
import heroVideo from "./assets/video/saytbackground.mp4";

function App() {
  const [language, setLanguage] = useState("en");
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const translations = {
    en: {
      about: "About",
      products: "Products",
      history: "History",
      heroTitle: "The Fragrance That Whispers Future",
      heroSubtitle:
        "Experience the essence of sophistication with our exclusive fragrances",
      aboutTitle: "About Goicha",
      aboutText:
        "Welcome to Goicha, where luxury meets heritage. Born in the heart of Azerbaijan, Goicha is more than a perfume brand, it is a celebration of timeless elegance, refined craftsmanship, and the rich cultural tapestry of our homeland. Inspired by the majestic beauty and stories of Azerbaijan, every Goicha fragrance is a journey—a blend of artistry and sophistication designed to awaken your senses and leave an unforgettable impression. Our mission is to redefine luxury, delivering exceptional scents that resonate with the soul. With a bold vision to become the best perfume brand in the world, Goicha stands as a symbol of excellence, innovation, and authenticity. Join us on this aromatic journey as we set new standards in the art of perfumery.",
      historyTitle: "Our Story",
      productsTitle: "Our Collection",
      contactTitle: "Contact Our Team",
      menu: "Menu",
    },
    fr: {
      about: "À Propos",
      products: "Produits",
      history: "Histoire",
      heroTitle: "Découvrez le Luxe",
      heroSubtitle:
        "Découvrez l'essence de la sophistication avec nos parfums exclusifs",
      aboutTitle: "À Propos de Goicha",
      aboutText:
        "Goicha représente le summum de la parfumerie de luxe, créant des fragrances exceptionnelles qui capturent l'essence de la sophistication et de l'élégance. Notre engagement envers l'excellence se reflète dans chaque flacon, où tradition rencontre innovation.",
      historyTitle: "Notre Histoire",
      productsTitle: "Notre Collection",
      contactTitle: "Contactez Notre Équipe",
      menu: "Menu",
    },
    az: {
      about: "Haqqımızda",
      products: "Məhsullar",
      history: "Tarix",
      heroTitle: "Lüksü Kəşf Edin",
      heroSubtitle: "Eksklüziv ətirlər ilə zərifliyin mahiyyətini yaşayın",
      aboutTitle: "Goicha Haqqında",
      aboutText:
        "Goicha lüks ətriyyat sahəsində zirvəni təmsil edir, zəriflik və eleqantlığın mahiyyətini özündə cəmləşdirən müstəsna ətirləri yaradır. Mükəmməlliyə olan sadiqliymiz hər şüşədə əks olunur, burada ənənə innovasiya ilə görüşür.",
      historyTitle: "Bizim Hekayəmiz",
      productsTitle: "Kolleksiyamız",
      contactTitle: "Komandamızla Əlaqə",
      menu: "Menyu",
    },
    ru: {
      about: "О нас",
      products: "Продукция",
      history: "История",
      heroTitle: "Откройте Роскошь",
      heroSubtitle:
        "Почувствуйте сущность изысканности с нашими эксклюзивными ароматами",
      aboutTitle: "О Goicha",
      aboutText:
        "Goicha представляет собой вершину люксовой парфюмерии, создавая исключительные ароматы, которые отражают сущность изысканности и элегантности. Наша приверженность совершенству отражается в каждом флаконе, где традиции встречаются с инновациями.",
      historyTitle: "Наше Наследие",
      productsTitle: "Наша Коллекция",
      contactTitle: "Свяжитесь с Нашей Командой",
      menu: "Меню",
    },
  };

  const products = [
    {
      id: 1,
      name: "Élégance Nocturne",
      description: "A mysterious blend of jasmine and amber",
      price: "€280",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 2,
      name: "L'Aube Dorée",
      description: "Fresh citrus notes with vanilla undertones",
      price: "€245",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 3,
      name: "Mystique Orient",
      description: "Exotic spices and deep woody notes",
      price: "€320",
      image:
        "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const contacts = [
    {
      name: "Sales Team",
      phone: "+33 1 23 45 67 89",
      title: "For product inquiries",
    },
    {
      name: "Customer Service",
      phone: "+33 1 23 45 67 90",
      title: "For support and assistance",
    },
    {
      name: "Corporate Relations",
      phone: "+33 1 23 45 67 91",
      title: "For business partnerships",
    },
  ];

  const t = translations[language];
  return (
    <div className="app">
      <nav className="navbar">
        <Link href="#" className="navbar__brand">
          GOICHA
        </Link>
        <div
          className="navbar__mobile-toggle"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar__right ${showMobileMenu ? "active" : ""}`}>
          <div className="navbar__links">
            <Link href="#about">{t.about}</Link>
            <Link href="#products">{t.products}</Link>
            <Link href="#history">{t.history}</Link>
          </div>
          <div className="navbar__language">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="az">AZ</option>
              <option value="ru">RU</option>
            </select>
          </div>
        </div>
      </nav>

      <section className="hero">
        <video autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero__content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about__content">
          <div className="about__content-text">
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=2574"
            alt="Luxury perfume"
          />
        </div>
      </section>

      <section id="products" className="products">
        <div className="products__content">
          <h2>{t.productsTitle}</h2>
          <div className="products__content-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-card__content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="price">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="history">
        <div className="history__content">
          <h2>{t.historyTitle}</h2>
          <div className="history__content-timeline">
            <div className="milestone">
              <h3>How it started...</h3>
              <p>
                Goicha was born out of a dream—a dream to capture the essence of
                Azerbaijan's soul in a bottle. It all began with a journey to
                Göyçə, the ancient name of a region renowned for its
                breathtaking landscapes, rich culture, and timeless beauty.
                Göyçə is where the whisper of the winds carries stories of love,
                resilience, and heritage—stories that inspired the creation of
                Goicha. Our founder, a passionate connoisseur of fine fragrances
                and a proud native of Azerbaijan, envisioned a brand that would
                weave the spirit of Göyçə into every drop of perfume. After
                years of meticulous research and collaboration with master
                perfumers from around the globe, Goicha emerged—a harmonious
                blend of Eastern traditions and modern luxury. Every Goicha
                fragrance is a masterpiece, crafted with the finest ingredients
                sourced from the world’s most exclusive regions. From the
                delicate florals of the Caucasus mountains to the deep, smoky
                notes reminiscent of ancient caravan trails, each scent tells a
                unique story, honoring the legacy of Azerbaijan while embracing
                global sophistication. Today, Goicha stands as a beacon of
                Azerbaijani pride, celebrated for its artistry, authenticity,
                and commitment to excellence. We invite you to discover our
                world—a world where every fragrance whispers the promise of the
                future while honoring the beauty of the past.
              </p>
            </div>
            {/* <div className="milestone">
            <h3>1950</h3>
            <p>Launch of our iconic first fragrance</p>
          </div>
          <div className="milestone">
            <h3>2023</h3>
            <p>Global expansion & innovation</p>
          </div> */}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__content">
          <div>
            <h3>Goicha</h3>
            <p>
              Luxury Perfumes
              <br />
              Since 1747
            </p>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <MapPin size={16} /> 123 Luxury Ave, Paris
              </li>
              <li>
                <Link href="https://wa.link/pbm13b">
                  <Phone size={16} /> +994 55 492 37 05
                </Link>
              </li>
              <li>
                <Link href="mailto:infogoicha@gmail.com">
                  <Mail size={16} /> infogoicha@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Follow Us</h3>
            <ul>
              <li>
                <Link href="https://www.instagram.com/goichaparfumes/">
                  <Instagram size={16} /> Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/profile.php?id=61572309451527">
                  <Facebook size={16} /> Facebook
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Twitter size={16} /> Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Shipping Info</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2024 Goicha. All rights reserved.</p>
        </div>
      </footer>

      <div
        className="whatsapp-button"
        onClick={() => setShowWhatsAppPopup(!showWhatsAppPopup)}
      >
        <MessageCircle size={24} />
      </div>

      {showWhatsAppPopup && (
        <div className="whatsapp-popup">
          <h3>{t.contactTitle}</h3>
          <ul className="contact-list">
            {contacts.map((contact, index) => (
              <li key={index}>
                <Link
                  href={`https://wa.me/${contact.phone.replace(/\s+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} />
                  <div>
                    <strong>{contact.name}</strong>
                    <p>{contact.title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
