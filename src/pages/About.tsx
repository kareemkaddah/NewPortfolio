import React from 'react';
import './About.css';
import Experience from '../components/Experience';
import Platepal from '../assets/Platepal.png';

const About: React.FC = () => {
  return (
    <div id='about' className='about-text slide-in-delay-1'>
      <h1 className='identification_style'>About</h1>
      <h1 className='identification_style' style={{ color: 'black' }}>
        Me:
      </h1>
      <h2>
        Passionate software developer 💻 with experience in cloud computing ☁️
        and full-stack development. Skilled in React.js ⚛️ and TypeScript, with
        a strong focus on performance ⚡ and user experience. Dedicated to
        continuous learning 📚 and collaborative teamwork.
      </h2>

      <h2 className='education_style'>Education:</h2>
      <div className='experience-container'>
        <Experience
          companyName='RWTH Aachen'
          websiteUrl='https://www.rwth-aachen.de/cms/root/studium/vor-dem-studium/studiengaenge/liste-aktuelle-studiengaenge/studiengangbeschreibung/~bcfg/informatik-m-sc/'
          description="Master's Degree in  Computer Science (BSC)"
          duration='04/2025 - On going'
          imageUrl='https://banner2.cleanpng.com/20180624/liy/aazkx0oue.webp'
        />
        <Experience
          companyName='TU Dortmund'
          websiteUrl='https://www.tu-dortmund.de/'
          description="Bachelor's Degree in  Computer Science (BSC)"
          duration='04/2019 - 10/2024'
          imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Ozoy4PwsMVkBh4loyTlwEEe0PTxJ1grNoA&s'
        />
      </div>
      <h2 className='section-title'>Work</h2>
      <h2 className='section-subtitle'>Experience:</h2>

      <div className='experience-container'>
        <Experience
          companyName='Platepal'
          duration='01/2024-12/2024'
          imageUrl={Platepal}
          websiteUrl=''
          description='Co-founder & Software Developer'
        />
        <Experience
          websiteUrl='https://www.seppmed.de/'
          companyName='Sepp.med'
          duration='04/2023 - 05/2024'
          imageUrl='https://www.seppmed.de/wp-content/uploads/2023/04/seppmed-logo-farbig.svg'
          description='Software Developer'
        />
        <Experience
          websiteUrl='https://cs.tu-dortmund.de/studium/bachelor-informatik/studienplan-bachelor-informatik-beginn-ws/'
          companyName='TU Dortmund'
          duration='04/2023 - 10/2023'
          description='Tutor '
          imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Ozoy4PwsMVkBh4loyTlwEEe0PTxJ1grNoA&s'
        />
      </div>
    </div>
  );
};

export default About;
