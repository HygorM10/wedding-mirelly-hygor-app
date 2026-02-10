import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <p className={styles.date}>Aguardem...</p>
              <h1 className={styles.names}>
                MIRELLY &<br />HYGOR
              </h1>
              <p className={styles.verse}>
                "Para que todos vejam, e saibam, e considerem, e juntamente entendam que a mão do Senhor fez isso." - Isaías 41:20
              </p>
            </div>
            <div className={styles.heroImageContainer}>
              <Image
                className={styles.heroImage}
                src="/main-principal.jpeg"
                alt="Mirelly e Hygor"
                fill
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
