import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Ops! 🎩✨</h2>
            <p className={styles.message}>
              Calma, o noivo é o desenvolvedor... vai demorar um pouquinho!
            </p>
            <p className={styles.description}>
              Esta página ainda está sendo preparada com muito carinho!
              <br />
              Enquanto isso, que tal voltar para a página principal?
            </p>
            <Link href="/" className={styles.button}>
              Voltar para o início
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
