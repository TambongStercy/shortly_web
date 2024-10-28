import React, { useState } from 'react';
import URLShortenerForm from './components/URLShortenerForm';
import ShortenedLinkList from './components/ShortenedLinkList';
import './App.css'; // Styles
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [links, setLinks] = useState([
      {
      original: 'https://www.google.com',
      shortened: 'https://goo.gl',
    }
  ]);

  const handleNewLink = (link: any) => {
    setLinks([link, ...links]);
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <HeroSection></HeroSection>

        <section className="shorten-section">
          <URLShortenerForm onNewLink={handleNewLink} />
        </section>

        <section className="shortened-links">
          <ShortenedLinkList links={links} />
        </section>

        <section className="statistics">
          <h3>Advanced Statistics</h3>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          <hr className='blue-line' />
          <div className="features">
            <FeatureCard
              icon="/images/icon-brand-recognition.svg"
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content."
            />
            <FeatureCard
              topMargin={35}
              icon="/images/icon-detailed-records.svg"
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <FeatureCard
              topMargin={35 * 2}
              icon="/images/icon-fully-customizable.svg"
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </div>
          <div>
          </div>
        </section>
      </main>

      <section className='call-action'>
        <div className="call-content">
          <h2>Boost your links today</h2>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
