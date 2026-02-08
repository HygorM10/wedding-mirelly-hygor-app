import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo_full_2.png"
          alt="Logo"
          width={400}
          height={200}
          priority
        />
        <h1 className={styles.names}>Mirelly & Hygor</h1>
        <p className={styles.subtitle}>Aguardem...</p>
        <Image
          className={styles.mainImage}
          src="/main-principal.jpeg"
          alt="Nossa Foto Principal"
          width={1920}
          height={1080}
        />
      </main>
    </div>
  );
}
