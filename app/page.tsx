'use client';
import React, { useState, useEffect, use } from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer';
import Title from '../components/Title';
import ImageModal from '@/components/ImageModal';
import photosToLoad from '../dataToLoad/photos';

type photo = {
  id: string;
  renderNum: number;
  title1: string;
  title2?: string;
  src1: string;
  src2?: string;
};
type MyStateType = number;

interface photos {
  id: number;
  renderNum: number;
  title: string;
  src: string;
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState<MyStateType>(0);
  const [activeImageId, setActiveImageId] = useState<MyStateType>(0);

  const photos: photos[] = photosToLoad;

  const openModal = (imageIndex: number) => {
    setSelectedImageId(imageIndex);
    setIsModalOpen(true);
    console.log(imageIndex, 'imageIndex');
  };
  useEffect(() => {
    setActiveImageId(selectedImageId);
  }, [selectedImageId]);

  const closeModal = () => {
    setSelectedImageId(0);
    setIsModalOpen(false);
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.grid}>
        <Title />
        {photos.map((item: any, itemIndex: number) => {
          if (item.renderNum === 0) {
            return <div className={styles.emptyBox}></div>;
          } else if (item.renderNum === 1) {
            return (
              <div className={`${styles.card} ${styles.card1}`}>
                <img
                  src={item.src}
                  alt='photo'
                  onClick={() => openModal(itemIndex)}
                />
              </div>
            );
          } else if (item.renderNum === 2) {
            return (
              <div className={`${styles.card} ${styles.card2}`}>
                {' '}
                <img
                  src={item.src}
                  alt='photo'
                  onClick={() => openModal(itemIndex)}
                />
              </div>
            );
          } else if (item.renderNum === 3) {
            return (
              <div className={`${styles.card} ${styles.card3}`}>
                {' '}
                <img
                  src={item.src}
                  alt='photo'
                  onClick={() => openModal(itemIndex)}
                />
              </div>
            );
          }
        })}
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        indexImage={activeImageId}
      />
      <Footer />
    </main>
  );
};

export default Home;
