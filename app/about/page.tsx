'use client';
import React from 'react';
import styles from '../styles/about.module.css';
import Footer from '@/components/Footer';
import Title from '@/components/Title';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.mainContainer}>
      <Title />
      <div className={styles.bodyWrapper}>
        <div className={styles.photoWrapper}>
        <Image src='/JM_10266_FINAL_w2.jpg' width={400} height={400} alt='About'  />
        </div>
      <div className={styles.aboutContainer}>
        <p className={styles.text}>
          Who I am
          <br />
          <br />
          I am a food photographer based in San Francisco. I take bold colorful
          rich in contrast photographs that embrace the rich cultural background
          of diverse subjects while devoting special attention to color
          temperature, sculpture presence and composition. My inspiration is
          rooted in still life painting, with an emphasis on Impressionism,
          French and Russian.
          <br />
          <br />
          <br />
          A bit more
          <br />
          <br />
          Besides this I continue to practice many aspect of photography:
          portraits, pet portraits, street photography, nature, B&W. I also
          continue to paint and sculpt. Additionally, I speak English, French
          and Russian.
          <br />
          <br />
        </p>

        <br />
      
        <p>
          My History
          <br />
          <br />
          I was born and raised in Paris where I first studied and practiced
          medicine, then switched to information technology and moved to San
          Francisco and Silicon Valley, California, where I now live, work and
          continue to study.
          <br />
          <br />
          Additionally, I speak English, French and Russian.
        </p>
        <br />
        <p>
          I am also a licensed commercial drone pilot under FAA regulations.
        </p>
      </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default About;
