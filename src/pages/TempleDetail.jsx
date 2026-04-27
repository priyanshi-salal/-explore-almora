import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./TempleDetail.css";

// Images import
import jageshwarImg from "../assets/Jageshwar.jpg";
import jageshwar1Img from "../assets/Jageshwar1.png";
import jageshwar2Img from "../assets/Jageshwar2.jpeg";
import jageshwar3Img from "../assets/Jageshwar3.jpeg";
import jageshwar4Img from "../assets/Jageshwar4.jpeg";

import chitaiImg from "../assets/Chitai.jpg";
import chitai1Img from "../assets/Chitai1.png";
import chitai2Img from "../assets/Chitai2.png";
import chitai3Img from "../assets/Chitai3.png";

import kasardeviImg from "../assets/KasarDevi.jpg";
import kasardevi2Img from "../assets/KasarDevi2.png";
import kasardevi3Img from "../assets/KasarDevi3.png";
import kasardevi4Img from "../assets/KasarDevi4.png";

import nandadeviImg from "../assets/NandaDevi.jpg";
import nandadevi1Img from "../assets/NandaDevi1.jpg";
import nandadevi2Img from "../assets/NandaDevi2.jpg";
import nandadevi3Img from "../assets/NandaDevi3.jpeg";

import banardeviImg from "../assets/BanarDevi.jpeg";
import banardevi1Img from "../assets/BanarDevi1.jpg";
import banardevi2Img from "../assets/BanarDevi2.png";
import banardevi3Img from "../assets/BanarDevi3.png";

import dolashramImg from "../assets/DolAshram.jpg";
import dolashram1Img from "../assets/DolAshram1.png";
import dolashram2Img from "../assets/DolAshram2.png";
import dolashram3Img from "../assets/DolAshram3.png";

import katarmal1Img from "../assets/Katarmal1.png";
import katarmal2Img from "../assets/Katarmal2.png";
import katarmal3Img from "../assets/Katarmal3.png";
import katarmal4Img from "../assets/Katarmal4.png";

// Temple data - Properly structured
const templeData = {
  jageshwar: {
    name: "Jageshwar Temple",
    tagline: "One of the Twelve Jyotirlingas",
    mainImage: jageshwarImg,
    about:
      "Jageshwar is a sacred Hindu pilgrimage site located in a scenic valley surrounded by dense deodar forests in Almora district. The complex houses over 125 stone temples, making it one of the most important centers of Shaivism in India.",
    history:
      "The temples were built between the 7th and 14th centuries by the Katyuri and Chand dynasties. The main temple is dedicated to Lord Shiva and is considered one of the twelve Jyotirlingas. The complex showcases exquisite stone architecture with intricate carvings that reflect the artistic excellence of ancient Kumaon.",
    tourism:
      "The Archaeological Survey of India maintains this protected monument. The complex includes famous shrines like Mrityunjaya, Kuber, and Nanda Devi temples. Located at 1,870 meters altitude, visitors enjoy breathtaking mountain views and the spiritual atmosphere. The Jageshwar Monsoon Festival (July-August) and Maha Shivaratri attract thousands of devotees annually.",
    location: "36 km from Almora town",
    timings: "6:00 AM - 8:00 PM",
    entry: "Free Entry",
    galleryImages: [jageshwar1Img, jageshwar3Img, jageshwar2Img, jageshwar4Img],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2!2d79.85!3d29.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a49d556aaaab%3A0x43bab0a3b19e97c4!2sJageshwar%20Dham!5e0!3m2!1sen!2sin!4v1234567890",
  },

  chitai: {
    name: "Chitai Golu Devta Temple",
    mainImage: chitaiImg,
    tagline: "Temple of Thousands of Bells",
    about:
      "Chitai Temple is dedicated to Golu Devta, revered as the 'God of Justice' in Kumaon. The temple is famous for thousands of brass bells hanging throughout the premises, creating a unique spiritual atmosphere.",
    history:
      "Golu Devta is believed to be an incarnation of Lord Shiva's Ganapati avatar. The tradition of writing petitions and offering bells dates back centuries. Devotees write their problems on stamped papers, and when wishes are fulfilled, they return to tie bells as gratitude.",
    tourism:
      "The temple walls and ceiling are covered with bells offered by grateful devotees, creating a mesmerizing sight. Located amidst pine forests, the temple attracts visitors year-round. It is especially approached for legal disputes and justice-related matters. Golu Devta Jayanti sees special celebrations with thousands of devotees gathering to seek blessings.",
    location: "8 km from Almora (Binsar Road)",
    timings: "5:00 AM - 9:00 PM",
    entry: "Free Entry",
    galleryImages: [chitaiImg, chitai1Img, chitai2Img, chitai3Img],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.5!2d79.65!3d29.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a6c0f77f8f25%3A0x8b3c5e8d8e8e8e8e!2sChitai%20Golu%20Devta%20Temple!5e0!3m2!1sen!2sin!4v1234567890",
  },

  kasardevi: {
    name: "Kasar Devi Temple",
    mainImage: kasardeviImg,
    tagline: "Spiritual Energy Center",
    about:
      "Kasar Devi Temple is an ancient hilltop shrine offering panoramic Himalayan views including Nanda Devi and Trishul peaks. The temple is internationally famous for its unique geomagnetic properties and spiritual significance.",
    history:
      "Dating back to the 2nd century CE, the temple is dedicated to Kasar Devi, a local deity. During the 1960s-70s, the area became known as 'Crank's Ridge' when it attracted spiritual seekers like Swami Vivekananda, Bob Dylan, George Harrison, and Cat Stevens. The region has a Van Allen Belt similar to Machu Picchu and Stonehenge.",
    tourism:
      "The temple hosts the annual Kasar Devi Fair during Kartik Purnima. The area offers spectacular sunrise and sunset views and has become a hub for yoga retreats and meditation centers. The peaceful environment and cosmic energy attract spiritual seekers from around the world. Several cafes and guesthouses cater to visitors seeking long-term spiritual stays.",
    location: "8 km from Almora",
    timings: "6:00 AM - 7:00 PM",
    entry: "Free Entry",
    galleryImages: [kasardeviImg, kasardevi2Img, kasardevi3Img, kasardevi4Img],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8!2d79.66!3d29.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a0a0a0a0a0a0%3A0x5f5f5f5f5f5f5f5f!2sKasar%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1234567890",
  },

  nandadevi: {
    name: "Nanda Devi Temple",
    mainImage: nandadeviImg,
    tagline: "Patron Deity of Uttarakhand",
    about:
      "Nanda Devi Temple is dedicated to Goddess Nanda (Parvati), the patron deity of Uttarakhand. This ancient temple is the spiritual heart of Almora and showcases beautiful traditional Kumaoni architecture.",
    history:
      "The temple features distinctive Kumaoni architectural style with a curved roof and ornate wooden doors with intricate carvings. Goddess Nanda is revered as the daughter of the Himalayas and protector of the region. The temple has been a center of worship for centuries and holds deep cultural significance for local communities.",
    tourism:
      "The temple is the starting point for the legendary Nanda Devi Raj Jat Yatra, a UNESCO-recognized pilgrimage held every twelve years covering 280 km through the Himalayas. The annual Nanda Devi Fair in September features traditional dances, music, and a grand procession, transforming Almora into a vibrant celebration of Kumaoni culture. Thousands of devotees visit year-round to seek blessings.",
    location: "Almora town center (Mall Road)",
    timings: "5:00 AM - 9:00 PM",
    entry: "Free Entry",
    galleryImages: [nandadeviImg, nandadevi1Img, nandadevi2Img, nandadevi3Img],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4!2d79.65!3d29.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a5f5f5f5f5f5%3A0x1a1a1a1a1a1a1a1a!2sNanda%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1234567890",
  },

  banardevi: {
    name: "Vindhyavasini Banari Devi Temple",
    mainImage: banardeviImg,
    tagline: "Sacred Abode of Goddess Vindhyavasini",
    about:
      "Banari Devi Temple is dedicated to Goddess Vindhyavasini Banari, a powerful incarnation of Shakti. The temple holds immense spiritual significance in the Kumaon region and is revered by devotees seeking blessings and divine protection.",
    history:
      "The temple has been a center of Shakti worship for generations. The goddess is honored with 108 sacred names, each representing her divine powers and manifestations. Local communities have maintained deep devotion to Banari Devi through centuries of tradition.",
    tourism:
      "The temple witnesses maximum devotion during Navratri, when special nine-day prayers and rituals are performed. Devotees offer flowers, prasad, and prayers seeking the goddess's blessings. The serene hilltop location surrounded by forests provides a peaceful atmosphere for spiritual contemplation and worship.",
    location: "15 km from Almora (trekking required)",
    timings: "6:00 AM - 6:00 PM",
    entry: "Free Entry",
    galleryImages: [banardeviImg, banardevi3Img, banardevi2Img, banardevi1Img],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6!2d79.70!3d29.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b0b0b0b0b0b0%3A0x2b2b2b2b2b2b2b2b!2sBanar%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1234567890",
  },

  dolashram: {
    name: "Dol Ashram",
    mainImage: dolashramImg,
    tagline: "Spiritual Retreat and Cultural Center",
    about:
      "Dol Ashram is a vibrant spiritual complex featuring uniquely colorful temples and meditation centers. The ashram has become a prominent center for spiritual learning, yoga practice, and preservation of traditional Kumaoni culture.",
    history:
      "Established in the 20th century, the ashram was founded to promote spiritual education and cultural preservation. The distinctive architecture features bright colors and intricate traditional designs that make it visually striking. The institution houses ancient scriptures and religious texts in its library.",
    tourism:
      "The complex includes multiple colorfully decorated temples, a large meditation hall, and beautifully landscaped gardens. Daily yoga sessions, meditation classes, and spiritual discourses are conducted. The ashram celebrates major festivals with elaborate decorations and cultural performances, particularly Janmashtami and Holi. Visitors can opt for short-term residential stays and participate in programs teaching Sanskrit, Vedic studies, and traditional arts.",
    location: "12 km from Almora (Ranikhet Road)",
    timings: "6:00 AM - 8:00 PM",
    entry: "Free Entry (Donations welcome)",
    galleryImages: [dolashram1Img, dolashramImg, dolashram2Img, dolashram3Img],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.2!2d79.67!3d29.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0c0c0c0c0c0c0%3A0x3c3c3c3c3c3c3c3c!2sDol%20Ashram!5e0!3m2!1sen!2sin!4v1234567890",
  },

  katarmal: {
    name: "Katarmal Sun Temple",
    tagline: "Second Oldest Sun Temple in India",
    mainImage: katarmal1Img,
    about:
      "Katarmal Sun Temple is the second most important sun temple in India after Konark. This 9th century architectural marvel is dedicated to Surya (Sun God) and showcases the advanced skills of ancient Kumaon artisans.",
    history:
      "Built by Katyuri king Katarmalla in the 9th century CE, the temple originally featured 45 smaller shrines surrounding the main sanctum. The complex displays intricate stone carvings and detailed panels depicting Hindu deities. The original central idol was moved to the National Museum in Delhi in 1960 for preservation, but the temple structure remains an impressive monument.",
    tourism:
      "Located at 2,116 meters altitude, the temple offers stunning valley and Himalayan views. The temple faces east to catch the first rays of sunrise, incorporating advanced astronomical alignments. The site attracts history enthusiasts, architecture students, and spiritual seekers. Local worship continues especially during Makar Sankranti and solar festivals. The trek through traditional Kumaoni villages provides insights into rural Himalayan life. Conservation efforts are ongoing to preserve this ASI-protected ancient heritage site.",
    location: "17 km from Almora (trekking required)",
    timings: "6:00 AM - 6:00 PM",
    entry: "Free Entry (ASI monument)",
    galleryImages: [katarmal1Img, katarmal2Img, katarmal3Img, katarmal4Img],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.3!2d79.69!3d29.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0d0d0d0d0d0d0%3A0x4d4d4d4d4d4d4d4d!2sKatarmal%20Sun%20Temple!5e0!3m2!1sen!2sin!4v1234567890",
  },
};

function TempleDetail() {
  const { templeName } = useParams();

  if (!templeName) {
    return (
      <div
        style={{ display: "flex", minHeight: "100vh", background: "#e8e8f0" }}
      >
        <Sidebar />
        <div style={{ flex: 1, padding: "40px" }}>
          <h1>Invalid temple page</h1>
        </div>
      </div>
    );
  }

  const temple = templeData[templeName.toLowerCase()];

  if (!temple) {
    return (
      <div
        style={{ display: "flex", minHeight: "100vh", background: "#e8e8f0" }}
      >
        <Sidebar />
        <div style={{ flex: 1, padding: "40px" }}>
          <h1>Temple not found: {templeName}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="temple-detail-container">
      <Sidebar />

      <div className="temple-content">
        {/* Hero Section - Fixed Image + Scrollable Info */}
        <div className="temple-hero">
          <div className="hero-image">
            <img src={temple.mainImage} alt={temple.name} />
          </div>

          <div className="hero-info">
            <h1>{temple.name}</h1>
            <p className="tagline">{temple.tagline}</p>

            <div className="info-block">
              <h3>About Temple</h3>
              <p>{temple.about}</p>
            </div>

            <div className="info-block">
              <h3>History</h3>
              <p>{temple.history}</p>
            </div>

            <div className="info-block">
              <h3>Tourism</h3>
              <p>{temple.tourism}</p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="temple-details-grid">
          <div className="detail-card">
            <div className="card-icon">📍</div>
            <h3>Location</h3>
            <p>{temple.location}</p>
          </div>

          <div className="detail-card">
            <div className="card-icon">🕐</div>
            <h3>Timings</h3>
            <p>{temple.timings}</p>
          </div>

          <div className="detail-card">
            <div className="card-icon">🎫</div>
            <h3>Entry Fee</h3>
            <p>{temple.entry}</p>
          </div>
        </div>

        {/* Small Images Gallery */}
        <div className="temple-gallery-section">
          <h2>Temple Gallery</h2>
          <div className="small-images-grid">
            {temple.galleryImages.map((img, index) => (
              <div className="gallery-small-item" key={index}>
                <img src={img} alt={`${temple.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="temple-map-section">
          <h2>Location & Directions</h2>
          <div className="map-container">
            <iframe
              src={temple.mapEmbed}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              title={`${temple.name} map`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempleDetail;
