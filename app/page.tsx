'use client';
import React, { useState, useEffect, use } from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer';
import Title from '../components/Title';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const DynamicHeader = dynamic(() => import('../components/ImageModal'), {
  ssr: false,
});

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
  const [backgroundColorStatus, setBackgroundColorStatus] =
    useState<boolean>(true);
  const [backgroundPhoto, setBackgroundPhoto] = useState<string>('');

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch(
          'https://jmmazzoni-site-backend.onrender.com/api/photos/?populate=*'
        );

        const data = await res.json();

        data.data.filter((photoItem: any) => {
          if (photoItem.attributes.number_in_order === 'background') {
            setBackgroundPhoto(photoItem.attributes.src.data.attributes.url);
          }
        });

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

    dataFetch();
  }, []);

  useEffect(() => {
    setPhotosToLoad(readyPhotos);
  }, [readyPhotos]);

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

  const mainStylesImageBack: any = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflow: 'scroll',
    backgroundImage: `url(${backgroundPhoto})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const mainStylesColorBack: any = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflow: 'scroll',
    // backgroundColor: '#cfdbd5',
    // backgroundColor: '#dd0426',
     backgroundColor: '#edf2fb'
  };
  const test = photosToLoad.filter((photo: any) => photo.title !== 'Gap');
  return (
    <main
      style={backgroundColorStatus ? mainStylesColorBack : mainStylesImageBack}
    >
      <div className={styles.grid}>
        <Title />
        {photosToLoad.map((item: any, itemIndex: number) => {
          // if (item.renderNum === 0) {
          // if (itemIndex === 11) {
            if(item.title === 'Gap') {
            return <div key={itemIndex} className={styles.emptyBox}></div>;
          } else if (item.renderNum === 1 && item.title !== 'Gap') {
            return (
              <div key={itemIndex} className={`${styles.card} ${styles.card1}`}>
                <Image
                  alt={item.title}
                  src={item.src}
                  width={1000}
                  height={1000}
                  onClick={() => openModal(itemIndex)}
                  loading='eager'
                />
              </div>
            );
          } else if (item.renderNum === 2 && item.title !== 'Gap') {
            return (
              <div key={itemIndex} className={`${styles.card} ${styles.card2}`}>
                <Image
                  alt={item.title}
                  src={item.src}
                  width={1000}
                  height={1000}
                  loading='eager'
                  onClick={() => openModal(itemIndex)}
                />
              </div>
            );
          } else if (item.renderNum === 3 && item.title !== 'Gap') {
            return (
              <div key={itemIndex} className={`${styles.card} ${styles.card3}`}>
                <Image
                  alt={item.title}
                  src={item.src}
                  width={1000}
                  height={1000}
                  loading='eager'
                  onClick={() => openModal(itemIndex)}
                />
              </div>
            );
          }
        })}
      </div>
      <DynamicHeader
        isOpen={isModalOpen}
        onClose={closeModal}
        indexImage={activeImageId}
        photos={photosToLoad}
        backgroundPhoto={backgroundPhoto}
      

      />
      <Footer />
    </main>
  );
};

export default Home;
