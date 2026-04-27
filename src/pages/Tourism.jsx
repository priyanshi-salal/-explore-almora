import React from "react";
import "./Tourism.css";

// Viewpoints Images
import brightEndImg from "../assets/bright-end.png";
import zeroPointImg from "../assets/zero-point.png";
import kasarImg from "../assets/kasar.png";
import almoraViewImg from "../assets/almora-viewpoint.png";

// Wildlife & Nature Images
import binsarImg from "../assets/binsar-sanctuary.png";
import deerParkImg from "../assets/deer-park.png";
import pineForestImg from "../assets/pine-forest.png";
import kalimatImg from "../assets/kalimat-village.png";

// Activities Images
import trekkingImg from "../assets/trekking.png";
import campaningkImg from "../assets/campaning.png";
import villageWalkImg from "../assets/village-walk.png";
import meditationImg from "../assets/meditation.png";

// Museums Images
import gbPantImg from "../assets/gb-pant-museum.png";
import kumaonMuseumImg from "../assets/kumaon-museum.png";
import lakhudiyarImg from "../assets/lakhudiyar-caves.png";
import heritageImg from "../assets/heritage-building.png";

// Nearby Destinations Images
import ranikhetImg from "../assets/ranikhet.png";
import kausaniImg from "../assets/kausani.jpg";
import mukteshwarImg from "../assets/mukteshwar.png";
import shitlakhetImg from "../assets/shitlakhet.png";

function Tourism() {
  return (
    <div className="tourism-page">
      
      {/* Hero Section */}
      <div className="tourism-hero">
        <h1>Explore Almora Tourism</h1>
        <p>Discover the beauty of the Himalayas</p>
      </div>

      {/* Viewpoints & Scenic Spots */}
      <div className="tourism-section">
        <div className="tourism-images-grid">
          <img src={brightEndImg} alt="Bright End Corner" />
          <img src={zeroPointImg} alt="Zero Point" />
          <img src={kasarImg} alt="Kasar" />
          <img src={almoraViewImg} alt="Almora Viewpoint" />
        </div>
        <div className="tourism-content">
          <h2>Viewpoints & Scenic Spots</h2>
          <p>
Bright End Corner is one of the most famous viewpoints in Almora, known for its breathtaking sunrise and sunset views. Surrounded by peaceful hills, it offers a perfect spot for nature lovers to relax and enjoy the beauty of the Himalayas.
          </p>
          <p>
Zero Point, located in the Binsar Wildlife Sanctuary, provides a stunning panoramic view of the Himalayan ranges. It is an ideal place for adventure seekers and photographers who want to experience untouched natural beauty.
          </p>
          <p>
            Kasar Devi is a peaceful hilltop destination famous for its scenic beauty and spiritual vibe. The viewpoint offers mesmerizing views of valleys and mountains, making it a perfect place for meditation and relaxation.
          </p>
          <p>
            Almora View showcases the charm of the town with its beautiful hills, traditional houses, and serene surroundings. It gives visitors a glimpse of local life along with stunning natural landscapes.
          </p>
        </div>
      </div>

      {/* Wildlife & Nature */}
      <div className="tourism-section reverse">
        <div className="tourism-images-grid">
          <img src={binsarImg} alt="Binsar Sanctuary" />
          <img src={deerParkImg} alt="Deer Park" />
          <img src={pineForestImg} alt="Pine Forest" />
          <img src={kalimatImg} alt="Kalimat Village" />
        </div>
        <div className="tourism-content">
          <h2>Natural Wonders</h2>
          <p>
Binsar Wildlife Sanctuary is a paradise for nature lovers, known for its rich biodiversity and peaceful environment. Surrounded by dense forests, it is home to various birds, animals, and stunning Himalayan views.
          </p>
          <p>
Deer Park is a calm and green space where visitors can enjoy nature and spot deer in a natural setting. It is a perfect place for families and those looking for a peaceful break from busy life.          </p>
          <p>
The Pine Forests of Almora offer a refreshing escape with their tall trees and fresh mountain air. Walking through these forests gives a relaxing and soothing experience close to nature.
          </p>
          <p>
Kalimat Village is a peaceful tourist village that offers a glimpse of traditional rural life. Surrounded by natural beauty, it is an ideal destination for visitors looking for a calm and authentic village experience.
          </p>
        </div>
      </div>

      {/* Activities & Experiences */}
      <div className="tourism-section">
        <div className="tourism-images-grid">
          <img src={trekkingImg} alt="Trekking" />
          <img src={campaningkImg} alt="campaning" />
          <img src={villageWalkImg} alt="Village Walk" />
          <img src={meditationImg} alt="meditation" />
        </div>
        <div className="tourism-content">
          <h2>Activities & Experiences</h2>
          <p>
Pandukholi Trek is located near Dwarahat in Almora district and is known for both its adventure and mythological significance. It is believed that the Pandavas stayed here during the Mahabharata period. The trek offers scenic forest trails and a unique experience for both trekkers and spiritual visitors.
          </p>
          <p>
Shitlakhet is a beautiful destination for camping, known for its peaceful surroundings and stunning Himalayan views. Spending a night under the stars here creates a memorable outdoor experience.
          </p>
          <p>
            Village Walk is a simple yet enriching experience where visitors can explore local life, culture, and traditions. It allows tourists to connect with nature and the lifestyle of the hills.
          </p>
          <p>
            Kasar Devi is known for its peaceful and spiritual atmosphere, making it an ideal place for meditation and relaxation. Visitors come here to find inner peace while enjoying the serene mountain views.
          </p>
        </div>
      </div>

      {/* Museums & Heritage */}
      <div className="tourism-section reverse">
        <div className="tourism-images-grid">
          <img src={gbPantImg} alt="GB Pant Museum" />
          <img src={kumaonMuseumImg} alt="Kumaon Museum" />
          <img src={lakhudiyarImg} alt="Lakhudiyar Caves" />
          <img src={heritageImg} alt="Heritage Building" />
        </div>
        <div className="tourism-content">
          <h2>Historical Sites</h2>
          <p>
Govind Ballabh Pant Museum showcases the rich cultural and historical heritage of the Kumaon region. It features traditional artifacts, paintings, and exhibits that reflect the lifestyle and history of the area.
          </p>
          <p>
Kumaon Museum is a great place to explore the art, culture, and traditions of the Kumaon region. It displays ancient items, folk art, and historical collections that give insight into local heritage.         
 </p>
<p>
  Lakhudiyar Caves are famous for their prehistoric rock paintings that date back thousands of years. These caves provide a glimpse into ancient human life and are an important archaeological site in the region.
</p>
<p>
  Almora is known for its unique heritage architecture, featuring traditional wooden houses with beautifully carved doors and windows. These structures reflect the rich cultural identity and craftsmanship of the Kumaon region.
</p>
        </div>
      </div>

      {/* Nearby Destinations */}
      <div className="tourism-section">
        <div className="tourism-images-grid">
          <img src={ranikhetImg} alt="Ranikhet" />
          <img src={kausaniImg} alt="Kausani" />
          <img src={mukteshwarImg} alt="Mukteshwar" />
          <img src={shitlakhetImg} alt="Shitlakhet" />
        </div>
        <div className="tourism-content">
          <h2>Beyond Almora</h2>
          <p>
            Ranikhet is a beautiful hill station near Almora, known for its lush greenery and peaceful environment. It offers stunning Himalayan views and is perfect for a relaxing getaway.
          </p>
          <p>
           Kausani is famous for its breathtaking panoramic views of the Himalayas, especially during sunrise and sunset. It is also known for its tea gardens and serene natural beauty.
          </p>
          <p>
            Mukteshwar is a scenic destination known for its temple, adventure activities, and stunning mountain views. It is a perfect place for nature lovers and thrill seekers.
          </p>
          <p>
            Shitlakhet is a quiet and less crowded destination offering beautiful views of the Himalayas. It is ideal for those who want to enjoy peace, nature, and a refreshing environment.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Tourism;