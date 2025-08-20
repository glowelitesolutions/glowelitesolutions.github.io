import React, { useState } from 'react';
import { aboutUs } from '../assets/images'
import { ceo } from '../assets/images'
import MeetTheCeoModal from '../components/MeetTheCeoModal/MeetTheCeoModal';

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-white">
    <div className="container flex-col gap-3 py-16 max-lg:max-w-[95vw]">
      <p className="section-id" id="about-us">About Us</p>
      <h2 className="title text-center">At GLOWELITE SOLUTIONS LLC</h2>
      <div className="flex items-center justify-center gap-10 max-xl:gap-5 max-md:flex-col">
        <img src={ aboutUs } alt="about-us" className="px-20 max-xl:px-4 max-lg:px-2" />
        <div className="flex flex-col space-y-10 px-14 max-xl:px-4 max-lg:px-1 max-md:items-center">
          <p className="body-text max-w-1/2 max-md:px-6 max-md:text-center">We specialize in bridging the gap between
            agriculture and biotechnology to develop sustainable health solutions that improve lives. Our integrated
            AgriBio strategy empowers companies and research institutions to leverage the full potential of agricultural
            resources through innovative biotechnological processes</p>
            
            <button className="cta-button btn-link" onClick={() => setShowModal(true)}>Meet the CEO</button>
            <MeetTheCeoModal isOpen={showModal} onClose={() => setShowModal(false)}>
              <div className="modal-header container flex-col">
                <p className="section-id max-w-[14em]" id="meet-the-ceo">OUR MEET THE CEO</p>
                <h2 className="title text-center">Dr. Gloria Otito Izu</h2>
                <h3 className="sub-title text-center">Lead Researcher &amp; CEO, Glowelite Solutions LLC</h3>
              </div>
              
              {/* Left column */}
              <div className='pt-8 md:pb-4'>
                <img src={ ceo } alt="CEO" className="px-20 max-xl:px-4 max-lg:px-2" />
              </div>
              {/* Right column */}
              <div className='pt-8'>
                <p className="body-text max-w-1/2 max-md:px-6 max-md:text-center">
                  Dr. Gloria Otito Izu is a biomedical scientist and research leader with over 10 years of experience in biomedical science, drug discovery, and clinical research. She holds a Ph.D. in Biomedical Technology, with expertise spanning natural product drug discovery, molecular biology, bioinformatics, and healthcare innovation.
                  <br />
                  <br />
                  As the Founder and CEO of Glowelite Solutions LLC, Dr. Izu leads multidisciplinary projects at the intersection of biotechnology, agritech, and educational consulting. Her work focuses on translating scientific research into practical solutions that improve health outcomes, drive product development, and foster innovation. She has authored multiple peer-reviewed publications, received international recognition and awards for her contributions, and actively mentors emerging scientists and professionals.
                  <br />
                  <br />
                  At Glowelite, Dr. Izu combines her research expertise and leadership in project management to deliver innovative solutions, strategic consulting, and impactful partnerships that advance science and technology for sustainable growth.
                </p>
              </div>
            </MeetTheCeoModal>
        </div>
      </div>
      </div>
      
      {/* <div className="" id='about-ceo'>
        <div className='overlay'></div>
        <div className="" id="meet-ceo">
          <p className="section-id">Meet the CEO</p>
          <h2 className="title text-center">Dr. Gloria Otito Izu</h2>
          <h3>Lead Researcher &amp; CEO, Glowelite Solutions LLC</h3>
          <img src={ ceo } alt="about-us" className="px-20 max-xl:px-4 max-lg:px-2" />
          <p className="body-text max-w-1/2 max-md:px-6 max-md:text-center">
            Dr. Gloria Otito Izu is a biomedical scientist and research leader with over 10 years of experience in biomedical science, drug discovery, and clinical research. She holds a Ph.D. in Biomedical Technology, with expertise spanning natural product drug discovery, molecular biology, bioinformatics, and healthcare innovation.
            <br />
            <br />
            As the Founder and CEO of Glowelite Solutions LLC, Dr. Izu leads multidisciplinary projects at the intersection of biotechnology, agritech, and educational consulting. Her work focuses on translating scientific research into practical solutions that improve health outcomes, drive product development, and foster innovation. She has authored multiple peer-reviewed publications, received international recognition and awards for her contributions, and actively mentors emerging scientists and professionals.
            <br />
            <br />
            At Glowelite, Dr. Izu combines her research expertise and leadership in project management to deliver innovative solutions, strategic consulting, and impactful partnerships that advance science and technology for sustainable growth.
          </p>
        </div>
      </div> */}
  </section>
  )
}

export default AboutUs;