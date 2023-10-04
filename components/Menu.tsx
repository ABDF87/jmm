import React, { useState, useEffect } from 'react';
import styles from './styles/Menu.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const [activePage, setActivePage] = useState('');
  const pathName = usePathname();

  useEffect(() => {
    setActivePage(pathName);
  }, [pathName]);

  return (
    <main className={styles.mainContainer}>
      <div
        className={
          activePage === 'home' ? styles.activeMenuItemWhite : styles.menuItem
        }
      >
        <Link href='/'>Home</Link>
      </div>
      <div
        className={
          activePage === '/about' ? styles.activeMenuItemWhite : styles.menuItem
        }
      >
        <Link href='/about'>About</Link>
      </div>
      <div
        className={
          activePage === '/contacts' ? styles.activeMenuItemWhite : styles.menuItem
        }
      >
        <Link href='/contacts'>Contacts</Link>
      </div>
    </main>
  );
};

export default Menu;
