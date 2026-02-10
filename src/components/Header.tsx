'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
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
          <Link href="#confirmar-presenca" className={styles.navLink}>
            O EVENTO
          </Link>
          {/* <Link href="#lista-presentes" className={styles.navLink}>
            LISTA DE PRESENTES
          </Link> */}
          <Link href="#evento" className={styles.navLink}>
            HISTÓRIA DO CASAL
          </Link>
          <Link href="#historia" className={styles.navLink}>
            GALERIA 
          </Link>
          {/* <Link href="#galeria" className={styles.navLink}>
            CONFIRMAR PRESENÇA
          </Link> */}
        </nav>

        {/* <Link href="#confirmar-presenca" className={styles.ctaButton}>
          PRESENÇA
        </Link> */}
      </div>
    </header>
  );
}
