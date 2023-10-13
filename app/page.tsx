'use client';
import React, { useState, useEffect, use } from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer';
import Title from '../components/Title';
import ImageModal from '@/components/ImageModal';
import photosToLoad from '../dataToLoad/photos';
import { it } from 'node:test';

interface photos {
  id: number;
  renderNum: number;
  title: string;
  src: string;
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState<number>(0);
  const [activeImageId, setActiveImageId] = useState<number>(0);
  const [readyPhotos, setReadyPhotos] = useState<photos[]>([]);
  const [photosToLoad, setPhotosToLoad] = useState<photos[]>([]);

  useEffect(() => {
    const test = async () => {
      try {
        const res = await fetch(
          'https://jmm-starpi.onrender.com/api/photos/?populate=*'
        );

        const data = await res.json();
     
        const backgroundPhoto = data.data.filter(
          (photoItem: any) =>
            photoItem.attributes.number_in_order === 'background'
        );
        const filteredData = data.data.filter((el: any) => {
          return el.attributes.number_in_order !== 'background';
        });

        filteredData.sort(
          (a: any, b: any) =>
            a.attributes.number_in_order - b.attributes.number_in_order
        );
        const loadedPhotos = filteredData.map((photoItem: any) => {
          const photoId = photoItem.id;
          const title = photoItem.attributes.title;
          const numberInRow = photoItem.attributes.number_in_row;
          const numberInOrder = photoItem.attributes.number_in_order;
          const photoUrl = photoItem.attributes.src.data.attributes.url;
          return {
            id: photoId,
            renderNum: numberInRow,
            orderNum: numberInOrder,
            title: title,
            src: photoUrl,
          };
        });
        setReadyPhotos([...readyPhotos, ...loadedPhotos]);
      } catch (err) {
        console.log(err, 'err');
      }
    };

    test();
  }, []);

  useEffect(() => {
    setPhotosToLoad(readyPhotos);
  }, [readyPhotos]);

  const photos: photos[] = photosToLoad;

  const openModal = (imageIndex: number) => {
    setSelectedImageId(imageIndex);
    setIsModalOpen(true);
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
        {photosToLoad.map((item: any, itemIndex: number) => {
          if (item.renderNum === 0) {
            return <div key={itemIndex} className={styles.emptyBox}></div>;
          } else if (item.renderNum === 1) {
            return (
              <div key={itemIndex} className={`${styles.card} ${styles.card1}`}>
                <img
                  src={item.src}
          
                  alt='photo'
                  onClick={() => openModal(itemIndex)}
                />
              </div>
            );
          } else if (item.renderNum === 2) {
            return (
              <div key={itemIndex} className={`${styles.card} ${styles.card2}`}>
                <img
                  src={item.src}
                  alt='photo'
                  onClick={() => openModal(itemIndex)}
                />
              </div>
            );
          } else if (item.renderNum === 3) {
            return (
              <div key={itemIndex} className={`${styles.card} ${styles.card3}`}>
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
