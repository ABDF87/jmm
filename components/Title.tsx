import React, { useState, useEffect } from 'react';
import styles from './styles/Title.module.css';
import Menu from './Menu';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';

const Title = () => {
  const [activePage, setActivePage] = useState('');
  const [deployedMenu, setDeployedMenu] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const deployMobMenuHandler = () => {
    setDeployedMenu(!deployedMenu);
  };

  useEffect(() => {
    setActivePage(pathName);
  }, [pathName]);

  return (
    <div className={styles.mainContainer} style={{ cursor: 'pointer' }}>
      <div className={styles.mainWrapper}>
        <div
          className={styles.mainTitle}
          onClick={() => {
            router.push('/');
          }}
        >
          <div className={styles.titleWrapper}>
            <p className={styles.titleName}>Jean-Marc Mazzoni</p>
            <span className={styles.titleSubName}>Photographer</span>
          </div>
        </div>
        <div className={styles.menuContainer}>
          <Menu />
        </div>
      </div>
      <div
        className={styles.deployedMenuContainerMobile}
        onClick={deployMobMenuHandler}
      >
        <FiMenu style={{ fontSize: '25px', color: 'white' }} />
        {deployedMenu && (
          <div className={styles.deployedMobMenuContainer}>
            <div
              className={
                activePage === '/'
                  ? styles.activeMobMenuItem
                  : styles.mobMenuItem
              }
              onClick={() => {
                router.push('/');
              }}
            >
              <p>Home</p>
            </div>
            <div
              className={
                activePage === '/about'
                  ? styles.activeMobMenuItem
                  : styles.mobMenuItem
              }
              onClick={() => {
                router.push('/about');
              }}
            >
              {' '}
              <p>About</p>
            </div>
            <div
              className={
                activePage === '/contact'
                  ? styles.activeMobMenuItem
                  : styles.mobMenuItem
              }
              onClick={() => {
                router.push('/contact');
              }}
            >
              {' '}
              <p>Contact</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Title;
