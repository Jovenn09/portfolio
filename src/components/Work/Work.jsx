import React, { useState, useEffect } from 'react';
import './Work.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'visible'; 
    }
  }, [selectedImage]);
  

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
    });
  }, []);

  return (
    <>
    <div id="work" className="container">
      <h2 className="title" data-aos="fade-right">
        PROJECTS
      </h2>
      <p>As a third-year IT student with a passion for Web Development, 
        I've undertaken a variety of school projects that showcase my skills in creating captivating 
        and interactive web experiences. Join me in exploring this portfolio, a testament to my journey 
        and growth in the world of web development.
       </p>
      
      <div className="project-container">
       
        <div className="project-card" data-aos="fade-up">
          <div className="project">
            
            <img
              src="images/civil1.jpg"
              alt="Civil Service Exam Reviewer"
              onClick={() => handleImageClick("images/civil.jpg")}
            />
            <div className="project-info">
              <h3>CIVIL SERVICE EXAM REVIEWER</h3>
              <p>
               Prepare for your civil service examinations with ease using our comprehensive Civil Service Reviewer Web App.
               Whether you're aiming to excel in government service or looking to enhance your
               knowledge of civil service topics.
              </p>
              <div className="technologies">
              <h1 className='tech'>
                  Technologies |
                <img src="/images/html.png" alt="HTML" className="tech-icon" />
                <img src="/images/css.png" alt="CSS" className="tech-icon" />
                <img src="/images/javascript.png" alt="JavaScript" className="tech-icon" />
                </h1>
              </div>
            </div>
          </div>
        </div>

       
        <div className="project-card" data-aos="fade-up">
          <div className="project">
            <img
              src="/images/musiva1.png"
              alt="FoodieFinds Website Screenshot"
              onClick={() =>
                handleImageClick(
                  "/images/musiva.png"
                )
              }
            />
            <div className="project-info">
              <h3>MUSIVA</h3>
              <p>
              MUSIVA is a cutting-edge digital music platform offering seamless access to the finest 
              selection of Greatest Hits spanning diverse genres, primarily from the 2000s onwards, 
              providing a musical journey through the modern era.
              </p>
              <div className="technologies">
                <h1 className='tech'>
                  Technologies |
                <img src="/images/html.png" alt="HTML" className="tech-icon" />
                <img src="/images/css.png" alt="CSS" className="tech-icon" />
                <img src="/images/javascript.png" alt="JavaScript" className="tech-icon" />
                </h1>
              </div>
            </div>
          </div>
        </div>

        
        <div className="project-card" data-aos="fade-up">
          <div className="project">
            <img
              src="/images/nudge2.jpg"
              alt="Nudge"
              onClick={() =>
                handleImageClick(
                  "/images/nudge1.png"
                )
              }
            />
            <div className="project-info">
              <h3>NUDGE APP</h3>
              <p>
                Always forgetting to swallow your pills? Nudge is a simple app
                designed to remind you whenever it's time to take your medications
                and keep yourself on track. Don't miss out on those meds!
              </p>
              <div className="technologies">
              <h1 className='tech'>
                  Technologies |
                <img src="/images/java.png" alt="Java" className="tech-icon" />
               </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Modal" />
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Work;
