import React, { useState, useEffect } from 'react';
import styles from './styles/Title.module.css';
import Menu from './Menu';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Title = () => {
  const [activePage, setActivePage] = useState('');
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setActivePage(pathName);
    console.log(pathName);
  }, [pathName]);

  return (
    <div className={styles.mainContainer} style={{ cursor: 'pointer' }}>
      <div
        className={
          // activePage === '/about' || activePage === '/contacts'  ? styles.mainTitleBlack :
          styles.mainTitle
        }
        onClick={() => {
          router.push('/');
        }}
      >
        <div  className={styles.titleWrapper}>
          <p className={styles.titleName}>Jean-Marc Mazzoni</p>
          <span className={styles.titleSubName}>Photographer</span>
        </div>
      </div>
      <div className={styles.menuContainer}>
        <Menu />
      </div>
    </div>
  );
};

export default Title;
