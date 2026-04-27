import React from "react";
import "./Culture.css";

// Images
import chholiyaDanceImg from "../assets/chholiya-dance.png";
import balMithaiImg from "../assets/bal-mithai.png";
import copperImg from "../assets/copper.png";
import festivalImg from "../assets/festivals.png";
import houseImg from "../assets/house.png";
import dressImg from "../assets/dress.png";

function Culture() {
  return (
    <div className="culture-page">
      {/* Hero Section */}
      <div className="culture-hero">
        <h1>Kumaoni Culture & Heritage</h1>
        <p>Discover the timeless traditions of Almora</p>
      </div>

      {/* Music & Dance */}
      <div className="culture-section">
        <div className="section-image">
          <img src={chholiyaDanceImg} alt="Chholiya Dance" />
        </div>
        <div className="section-content">
          <h2>Folk Music & Dance</h2>
          <p>
            The Kumaon region is renowned for vibrant folk traditions passed
            down through generations. Chholiya is the iconic sword dance of
            Kumaon, originally performed by warriors during wedding processions
            to protect the bride and groom. This energetic dance features
            skilled performers wielding swords in synchronized movements,
            showcasing strength, agility, and cultural pride. The rhythmic beats
            and powerful formations make it a spectacular sight during
            celebrations. Jhora and Chancheri are beloved community dances where
            people of all ages join hands in circles, celebrating unity and joy
            during festivals like Diwali, Holi, and Basant Panchami. Jhumailo is
            a graceful dance performed by newly married women during their first
            visit to their maternal homes, expressing emotions of happiness and
            longing through delicate movements. Traditional music comes alive
            through indigenous instruments like Dhol and Damau (powerful drums),
            Turi and Ransingha (brass horns once used in battles), and Hurka
            (hand drum for romantic songs). The famous folk song "Bedu Pako Baro
            Masa" by legendary singer Mohan Upreti has become Uttarakhand's
            cultural anthem, celebrating the beauty of mountain life, changing
            seasons, and the simplicity of nature.
          </p>
        </div>
      </div>

      {/* Cuisine */}
      <div className="culture-section reverse">
        <div className="section-image">
          <img src={balMithaiImg} alt="Bal Mithai" />
        </div>
        <div className="section-content">
          <h2>Traditional Cuisine</h2>
          <p>
            Kumaoni cuisine reflects the simplicity and richness of mountain
            life, using locally grown ingredients and traditional cooking
            methods passed down through generations. The food is wholesome,
            nutritious, and deeply connected to the land and seasons. Bal Mithai
            and Singodi are the most beloved sweets of Almora. Bal Mithai, a
            fudge-like brown sweet made from roasted khoya and coated with white
            sugar balls, is the signature delicacy found in every sweet shop.
            Singodi is a cone-shaped sweet made from khoya wrapped in maalu
            leaves, offering a unique flavor that melts in the mouth.
            Traditional savory dishes showcase the region's agricultural
            heritage. Bhatt ki Churkani is a protein-rich curry made from black
            soybeans, while Kafuli features cooked greens like spinach and
            fenugreek in a thick gravy. Aloo ke Gutke are spicy stir-fried
            potatoes tempered with local spices, and Chainsoo is a distinctive
            black gram dal roasted and ground into a flavorful paste. Gahat
            (horse gram) soup and Mandua (finger millet) rotis provide warmth
            and energy in the cold mountain climate. Every dish tells a story of
            the mountains, prepared with traditional methods and served during
            festivals, weddings, and family gatherings, keeping the culinary
            heritage of Kumaon alive.
          </p>
        </div>
      </div>

      {/* Arts */}
      <div className="culture-section">
        <div className="section-image">
          <img src={copperImg} alt="Copper Work" />
        </div>
        <div className="section-content">
          <h2>Arts & Handicrafts</h2>
          <p>
           Almora, a beautiful town in the Kumaon region of Uttarakhand, is not only known for its natural beauty but also for its rich tradition of art and handicrafts. The local artisans of Almora have preserved their cultural heritage through various forms of handmade crafts that reflect creativity, skill, and tradition. One of the most famous art forms of this region is Aipan art, a traditional folk art made using white designs on a red background. It is mainly created during festivals, religious rituals, and special occasions, and holds deep cultural and spiritual significance.

Another important aspect of Almora’s handicrafts is its copper work. The town is well known for producing high-quality copper utensils and decorative items. These items are not only used in daily life but also play an important role in religious ceremonies. The process of making copper products involves great skill and precision, showcasing the talent of local craftsmen. Along with copper, wood carving is also popular in Almora, where beautifully carved doors, windows, and decorative items can be seen in traditional houses and markets.

In addition, Almora is famous for its woolen handicrafts, including shawls, sweaters, caps, and other warm clothing items. These products are handmade using local wool and are known for their quality and traditional designs. The handicrafts of Almora are not just products but a reflection of the region’s culture, lifestyle, and artistic heritage. They attract tourists from all over the country who are interested in authentic and handmade items.

Overall, the art and handicrafts of Almora play an important role in preserving its cultural identity and supporting local artisans. These traditional crafts continue to thrive and remain an integral part of the region’s tourism and economy.
          </p>
        </div>
      </div>

      {/* Festivals */}
      <div className="culture-section reverse">
        <div className="section-image">
          <img src={festivalImg} alt="Festival" />
        </div>
        <div className="section-content">
          <h2>Festivals & Celebrations</h2>
          <p>
            Festivals in Almora bring the Kumaon community together in vibrant
            celebrations of faith, culture, and tradition. These occasions mark
            seasonal transitions, honor deities, and strengthen bonds among
            families and villages throughout the year. Nanda Devi Mela is the
            most prominent festival held annually in September at Almora,
            celebrated since the Chand Kings era as a 5 to 7-day cultural event
            during Nandashtami . The fair centers around the Nanda Devi temple
            with processions carrying the dola (palanquin) of Goddess Nanda Devi
            and her sister Sunanda . Folk songs, traditional dances, and
            bustling markets showcasing local handicrafts create a joyous
            atmosphere attracting devotees from across Uttarakhand. Harela
            festival is celebrated thrice yearly during Chaitra Navratri, Sharad
            Navratri, and Shravan, marking the onset of new seasons . Women sow
            seven types of grains ten days before the festival, and yellow
            shoots called Harela are cut on the tenth day, symbolizing future
            harvest and prosperity . This is followed by Bhitauli, where young
            girls receive gifts, emphasizing community traditions . Uttarayani
            Fair occurs in January during Makar Sankranti, featuring week-long
            celebrations with religious rituals and cultural events . Bikhauti
            Mela celebrates spring and the Kumaoni new year with traditional
            rituals, music, dance performances, and wrestling matches reflecting
            regional bravery. Ghee Sankranti honors the harvest season with
            community exchanges of gifts and traditional sweets. These festivals
            blend religious devotion with cultural joy, preserving the rich
            heritage of Kumaon for future generations.
          </p>
        </div>
      </div>

      {/* Dress */}
      <div className="culture-section">
        <div className="section-image">
          <img src={dressImg} alt="Traditional Dress" />
        </div>
        <div className="section-content">
          <h2>Traditional Dress</h2>
          <p>
            Festivals in Almora bring the Kumaon community together in vibrant
            celebrations of faith, culture, and tradition. These occasions mark
            seasonal transitions, honor deities, and strengthen bonds among
            families and villages throughout the year. Nanda Devi Mela is the
            most prominent festival held annually in September at Almora,
            celebrated since the Chand Kings era as a 5 to 7-day cultural event
            during Nandashtami . The fair centers around the Nanda Devi temple
            with processions carrying the dola (palanquin) of Goddess Nanda Devi
            and her sister Sunanda . Folk songs, traditional dances, and
            bustling markets showcasing local handicrafts create a joyous
            atmosphere attracting devotees from across Uttarakhand. Harela
            festival is celebrated thrice yearly during Chaitra Navratri, Sharad
            Navratri, and Shravan, marking the onset of new seasons . Women sow
            seven types of grains ten days before the festival, and yellow
            shoots called Harela are cut on the tenth day, symbolizing future
            harvest and prosperity . This is followed by Bhitauli, where young
            girls receive gifts, emphasizing community traditions . Uttarayani
            Fair occurs in January during Makar Sankranti, featuring week-long
            celebrations with religious rituals and cultural events . Bikhauti
            Mela celebrates spring and the Kumaoni new year with traditional
            rituals, music, dance performances, and wrestling matches reflecting
            regional bravery. Ghee Sankranti honors the harvest season with
            community exchanges of gifts and traditional sweets. These festivals
            blend religious devotion with cultural joy, preserving the rich
            heritage of Kumaon for future generations.
          </p>
        </div>
      </div>

      {/* Architecture */}
      <div className="culture-section reverse">
        <div className="section-image">
          <img src={houseImg} alt="Architecture" />
        </div>
        <div className="section-content">
          <h2>Traditional Architecture</h2>
          <p>
            Festivals in Almora bring the Kumaon community together in vibrant
            celebrations of faith, culture, and tradition. These occasions mark
            seasonal transitions, honor deities, and strengthen bonds among
            families and villages throughout the year. Nanda Devi Mela is the
            most prominent festival held annually in September at Almora,
            celebrated since the Chand Kings era as a 5 to 7-day cultural event
            during Nandashtami . The fair centers around the Nanda Devi temple
            with processions carrying the dola (palanquin) of Goddess Nanda Devi
            and her sister Sunanda . Folk songs, traditional dances, and
            bustling markets showcasing local handicrafts create a joyous
            atmosphere attracting devotees from across Uttarakhand. Harela
            festival is celebrated thrice yearly during Chaitra Navratri, Sharad
            Navratri, and Shravan, marking the onset of new seasons . Women sow
            seven types of grains ten days before the festival, and yellow
            shoots called Harela are cut on the tenth day, symbolizing future
            harvest and prosperity . This is followed by Bhitauli, where young
            girls receive gifts, emphasizing community traditions . Uttarayani
            Fair occurs in January during Makar Sankranti, featuring week-long
            celebrations with religious rituals and cultural events . Bikhauti
            Mela celebrates spring and the Kumaoni new year with traditional
            rituals, music, dance performances, and wrestling matches reflecting
            regional bravery. Ghee Sankranti honors the harvest season with
            community exchanges of gifts and traditional sweets. These festivals
            blend religious devotion with cultural joy, preserving the rich
            heritage of Kumaon for future generations.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Culture;
