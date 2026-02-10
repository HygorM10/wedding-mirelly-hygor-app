import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} Mirelly & Hygor. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
