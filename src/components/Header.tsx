'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo_empty_2.png"
            alt="Mirelly & Hygor"
            width={120}
            height={60}
            className={styles.logo}
            priority
          />
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/cerimonia" className={styles.navLink}>
            A CERIMÔNIA
          </Link>
          {/* <Link href="#lista-presentes" className={styles.navLink}>
            LISTA DE PRESENTES
          </Link> */}
          <Link href="/historia" className={styles.navLink}>
            HISTÓRIA DO CASAL
          </Link>
          <Link href="/galeria" className={styles.navLink}>
            GALERIA 
          </Link>
          <Link href="/recepcao" className={styles.navLink}>
            A RECEPÇÃO
          </Link>
          {/* <Link href="#galeria" className={styles.navLink}>
            CONFIRMAR PRESENÇA
          </Link> */}
        </nav>

        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
              INÍCIO
            </Link>
            <Link href="/cerimonia" className={styles.mobileNavLink} onClick={closeMenu}>
              A CERIMÔNIA
            </Link>
            <Link href="/historia" className={styles.mobileNavLink} onClick={closeMenu}>
              HISTÓRIA DO CASAL
            </Link>
            <Link href="/galeria" className={styles.mobileNavLink} onClick={closeMenu}>
              GALERIA
            </Link>
            <Link href="/recepcao" className={styles.mobileNavLink} onClick={closeMenu}>
              A RECEPÇÃO
            </Link>
          </nav>
        </div>
        {/* <Link href="#confirmar-presenca" className={styles.ctaButton}>
          PRESENÇA
        </Link> */}
      </div>
    </header>
  );
}
