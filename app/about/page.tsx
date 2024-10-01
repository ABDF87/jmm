'use client';
import React from 'react';
import styles from '../styles/about.module.css';
import Footer from '@/components/Footer';
import Title from '@/components/Title';

const About = () => {
  return (
    <div className={styles.mainContainer}>
      <Title />
      {/* <div className={styles.bodyWrapper}> */}
        <div className={styles.aboutContainer}>
          <p className={styles.text}>
            Who I am
            <br />
            <br />
            My name is Jean-Marc Mazzoni, I am photographer concentrating in
            food photography. I have a background in still life painting with a
            passion for color with influences rooted in the Russian
            impressionist and realist tradition. Besides this I continue to
            practice many aspect of photography: portraits, pet portraits,
            street photography, nature, B&W. I also continue to paint and
            sculpt. Additionally, I speak English, French and Russian.
            <br />
            <br />
            <br />
            Where I am
            <br />
            <br />
            San Mateo, San Francisco Peninsula, Bay Area, California
          </p>

          <br />
          <br />
          <br />
          <p>
            My History
            <br />
            <br />
            ​I was born and raised in Paris where I first studied and practiced
            medicine, then switched to information technology and moved to San
            Francisco and Silicon Valley, California, where I now live, work and
            continue to study.
            <br />
            <br />
          </p>
          <p>
            I am also a licensed commercial drone pilot under FAA regulations.
          </p>
        </div>
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default About;
