import React from "react";
import "./Home.css";
import heroImg from "../assets/Almora.png";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <img src={heroImg} alt="Almora" />
        <div className="hero-text">
          <h1>Explore Almora</h1>
          <p>Discover the beauty of hills, temples and culture</p>
        </div>
      </div>

      {/*  Welcome Section */}
      <div className="welcome">
        <h2>Welcome to Almora</h2>
        <p>
          Almora is a beautiful hill town in Uttarakhand known for its scenic
          beauty, rich culture, and ancient temples. It offers a peaceful
          environment with breathtaking views of the Himalayas.
        </p>
      </div>

      {/* Temples Section */}
      <div className="temples">
        <h2>Famous Temples of Almora</h2>

        <div className="temple-cards">
          <div className="card">
            <img src="/src/assets/NandaDevi.jpg" alt="Nanda Devi" />
            <h3>Nanda Devi Temple</h3>
            <p>Dedicated to Goddess Nanda Devi.</p>
          </div>

          <div className="card">
            <img src="/src/assets/Chitai.jpg" alt="Chitai" />
            <h3>Chitai Golu Devta</h3>
            <p>Famous for thousands of bells.</p>
          </div>

          <div className="card">
            <img src="/src/assets/KasarDevi.jpg" alt="Kasar Devi" />
            <h3>Kasar Devi Temple</h3>
            <p>Known for peaceful Himalayan views.</p>
          </div>

          <div className="card">
            <img src="/src/assets/Katarmal.jpg" alt="Katarmal" />
            <h3>Katarmal Sun Temple</h3>
            <p>Ancient temple with unique architecture.</p>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="culture">
        <h2>Culture & Tradition</h2>

        <div className="culture-box">
          <img src="/src/assets/Cholliyar.jpg" alt="culture" />

          <div className="culture-content">
            <p>
              Explore the rich Kumaoni culture and the traditional lifestyle of
              Almora. The region is known for its vibrant festivals, folk music,
              and unique customs. The peaceful environment and cultural values
              make Almora a truly special place.
            </p>
          </div>
        </div>
      </div>

      {/* Tourism in Almora */}
      <div className="almora-tourism">
        <h2>Tourism in Almora</h2>

        <div className="almora-tourism-box">
          <img src="/src/assets/Tourism.png" alt="tourism" />

          <div className="almora-tourism-content">
            <p>
              Almora is a beautiful hill town known for its scenic views,
              peaceful environment, and famous tourist attractions. It offers a
              perfect blend of nature and culture, making it an ideal
              destination for travelers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
