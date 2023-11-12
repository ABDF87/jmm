'use client';
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/contacts.module.css';
import Footer from '@/components/Footer';
import Title from '@/components/Title';
import { BsInstagram } from 'react-icons/bs';
import {AiOutlineFacebook} from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const iconStyleInsta = {
  color: 'yellow',
  fontSize: '33px',
  cursor: 'pointer',
};
const iconStyleFB = {
  color: 'yellow',
  fontSize: '40px',
  cursor: 'pointer',
};

const Contacts = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lu6duj8',
        'template_c1l2bgg',
        form.current,
        'gTCdlJpEI6qET1uM_'
      )
      .then(
        (result) => {
          setMessageSent(true);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainWrapper}>
        <Title />

       <div className={styles.lowerWrapper}>
        <div className={styles.instaFormWrapper}>
          <div className={styles.instagramContainer}>
            <BsInstagram
              style={iconStyleInsta}
              onClick={() => {
                router.push('https://www.instagram.com/jmmazzoni/');
              }}
            />
            <div className={styles.instagramLinks}>
              <p
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  router.push('https://www.instagram.com/jmmazzoni/');
                }}
              >
                instagram.com/jmmazzoni
              </p>
              <p> ​@jmmatelier</p>
            </div>
          </div>
          <div className={styles.facebookContainer}>
            <AiOutlineFacebook style={iconStyleFB}
            onClick={() => {
                router.push('https://www.facebook.com/MazzoniStudio/');
              }} />
            <div className={styles.facebookLinks}>
              <p
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  router.push('https://www.facebook.com/MazzoniStudio/');
                }
              }
              >
                facebook.com/MazzoniStudio
              </p>

            </div>
          </div>
         
          <form
            className={styles.formContainer}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type='text'
              className={styles.formInput}
              name='user_name'
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <input
              type='email'
              className={styles.formInput}
              name='user_email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <textarea
              className={styles.messageInput}
              name='message'
              placeholder='Message'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button type='submit' className={styles.formButton}>
              Send
            </button>
          </form>
          {messageSent && (
          <div className={styles.messageSent}>
            Your message has been sent. Thank you!
          </div>
        )}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
