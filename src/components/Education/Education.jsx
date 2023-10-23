import React, { useEffect } from 'react';
import './Education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <div id="education" className='container'>
      <h2 className="title" data-aos="fade-right">EDUCATIONAL BACKGROUND</h2>
      <p>My educational journey is a testament to my commitment to learning and growth, 
        spanning from my formative years in elementary and junior high, through the challenges of senior high,
         and currently thriving as a dedicated college student. This holistic foundation fuels my passion for continuous development and equips me with a 
        diverse skill set to excel in various aspects of my future endeavors.</p>

        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education" 
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#070707'  }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
          date="2023-2024" 
          iconStyle={{ background: 'rgb(0,0,128)', color: '#fff'  }}
          icon={<FaGraduationCap/>}
        >
          <h3 className="vertical-timeline-element-title" class="card-header" >Current (BS in Information Technology)</h3>
          <p>Phinma - University of Pangasinan, Dagupan City, Pangasinan</p>
          <p>• Major: Information Technology</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#070707' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
          date="2022"
          iconStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
          icon={<FaGraduationCap />} 
        >
          <h3 className="vertical-timeline-element-title" class="card-header">College (BS in Information Technology)</h3>
          <p>Saint Louis University, Baguio, Benguet</p>
          <h3 className="list">Dean's List:</h3>
          <ul className="list">
            <li>First Semester, 2020-2021</li>
            <li>Second Semester, 2020-2021</li>
            <li>First Semester, 2021-2022</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#070707' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
          date="2020"
          iconStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
          icon={<FaGraduationCap />} 
        >
          <h3 className="vertical-timeline-element-title" class="card-header">Senior High School (STEM track)</h3>
          <p>Phinma - University of Pangasinan, Dagupan City, Pangasinan</p>
          <p>• With Honors (Grade 11 and Grade 12)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#070707' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
          date="2018"
          iconStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
          icon={<FaGraduationCap />} 
        >
          <h3 className="vertical-timeline-element-title" class="card-header">Junior High School</h3>
          <p>Saint Columban's College, Lingayen, Pangasinan</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#070707' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
          date="2013"
          iconStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
          icon={<FaGraduationCap />} 
          >
          <h3 className="vertical-timeline-element-title" class="card-header">Elementary</h3>
          <p>Happy Times Christian School, Lingayen, Pangasinan</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </>
  );
};

export default Education;