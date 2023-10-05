import React, { useState, useEffect } from 'react';
import styles from './styles/Menu.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';

const Menu = () => {
  const [deployedMenu, setDeployedMenu] = useState(false);
  const [activePage, setActivePage] = useState('');
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setActivePage(pathName);
  }, [pathName]);

  const deployMobMenuHandler = () => {
    setDeployedMenu(!deployedMenu);
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.deployedMenuContainer}>
        <div
          className={
            activePage === '/' ? styles.activeMenuItemWhite : styles.menuItem
          }
        >
          <Link href='/'>Home</Link>
        </div>
        <div
          className={
            activePage === '/about'
              ? styles.activeMenuItemWhite
              : styles.menuItem
          }
        >
          <Link href='/about'>About</Link>
        </div>
        <div
          className={
            activePage === '/contacts'
              ? styles.activeMenuItemWhite
              : styles.menuItem
          }
        >
          <Link href='/contacts'>Contacts</Link>
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
              className={activePage === '/' ? styles.activeMobMenuItem  : styles.mobMenuItem}
              onClick={() => {
                router.push('/');
              }}
            >
              <p>Home</p>
            </div>
            <div
             className={activePage === '/about' ? styles.activeMobMenuItem :  styles.mobMenuItem}
              onClick={() => {
                router.push('/about');
              }}
            >
              {' '}
              <p>About</p>
            </div>
            <div
           className={activePage === '/contacts' ? styles.activeMobMenuItem :  styles.mobMenuItem }
              onClick={() => {
                router.push('/contacts');
              }}
            >
              {' '}
              <p>Contacts</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Menu;
