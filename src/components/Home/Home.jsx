import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
    });
  }, []);

  return (
    <>
    <div id="home">
      <div className="home-container">
        <div className="left-content">
          <h1 className="full-name" data-aos="fade-right">
            Hello, I am <span className="name">Joven Casaclang</span>
            <br />
            <span className="designation" data-aos="fade-right" data-aos-delay="300">
              Web Developer
            </span>
            <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/47087/waving-hand-emoji-clipart-xl.png"
            alt="Wave Emoji"
            className="wave-emoji wave-animation"
           />
          </h1>
          <p className="description">
            Passionate and dedicated web developer with a flair for crafting innovative and user-centric websites and web applications.
          </p>
          <p className="social-links">
            <a href="https://www.facebook.com/jovs.casaclang0907" target="_blank" rel="noopener noreferrer" >
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/joven_michael" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/your-twitter-url" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </p>
          <a
          className="github-link"
          href="https://github.com/JovenMichael09"
          target="_blank"
          rel="noopener noreferrer"
>
           <button>
          <FaGithub /> GitHub
          </button>
        </a>
        </div>
        <img className="profile-picture" src="images/pic.jpg" alt="" />
      </div>
    </div>
    </>
  );
}

export default Home;
