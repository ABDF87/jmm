'use client';
import React, { useState, useEffect, use } from 'react';
import styles from '../../styles/admin.module.css';
import photos from '../../../dataToLoad/photos';
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';

const buttonsStyles = {
  fontSize: '25px',
  color: 'white',
};

const Admin = () => {
  const [photosToRender, setPhotosToRender] = useState<any>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setPhotosToRender(photos);
  }, []);

  const deletePhotoItem = (photoToDeleteIndex: number) => {
    photosToRender.map((photo: any, index: number) => {
      if (index === photoToDeleteIndex) {
        console.log('photoToDeleteIndex', index, photoToDeleteIndex);
        index === photoToDeleteIndex && photosToRender.splice(index, 1);
        setRefresh(!refresh);
      }
    });
  };
  return (
    <main className={styles.main}>
      <div className={styles.titleWrapper}>
        <div className={styles.myPhotosTitle}>Photo manager</div>
        <div className={styles.addPhotoButton}>add Photo</div>
      </div>
      <div className={styles.myPhotosContainer}>
        <div className={styles.myPhotosList}>
          {photosToRender.map((photo: any, photoIndex: number) => {
            if (photo.renderNum !== 0) {
              return (
                <div className={styles.myPhotoItem} key={photoIndex}>
                  <div className={styles.myPhotoItemTitle}>{photo.title}</div>
                  <div className={styles.myPhotoItemImgInRow}>
                    Images in row: {photo.renderNum}
                  </div>
                  <div className={styles.myPhotoItemImage}>
                    <img src={photo.src} />
                  </div>
                  <div className={styles.myPhotoItemButtons}>
                    <div className={styles.myPhotoItemButton}>
                      <AiFillEdit style={buttonsStyles} />
                    </div>
                    <div
                      className={styles.myPhotoItemButton}
                      onClick={() => deletePhotoItem(photoIndex)}
                    >
                      <AiOutlineDelete style={buttonsStyles} />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.uploadPhotoContainer}></div>
    </main>
  );
};

export default Admin;
