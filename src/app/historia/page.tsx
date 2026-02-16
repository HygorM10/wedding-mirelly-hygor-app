import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";

export default function Historia() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <section className={styles.titleSection}>
            <h1 className={styles.title}>Nossa História</h1>
            <div className={styles.separator}>
              <span className={styles.separatorLine} />
              <span className={styles.separatorIcon}>&#10084;</span>
              <span className={styles.separatorLine} />
            </div>
          </section>

          <div className={styles.imageFrame}>
            <span className={styles.cornerTopRight} />
            <span className={styles.cornerBottomLeft} />
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/nossa-01.jpeg"
                alt="Mirelly e Hygor - Nossa História"
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                priority
              />
            </div>
          </div>

          <div className={styles.storyFrame}>
            <span className={styles.storyCornerTopRight} />
            <span className={styles.storyCornerBottomLeft} />
            <div className={styles.storyOrnament}>✦ ✦ ✦</div>
            <div className={styles.storyText}>
              <p>
                Nossa história começou no Natal de 2024, quando eu (Hygor) mandei a primeira mensagem para a Mirelly no Instagram, 
                já que não consegui comentar no story dela (Tecnologia né rsrs). Começamos a conversar e, na sexta-feira seguinte, 
                já a convidei para sair comigo. Escolhi um restaurante que ela não conhecia e fiz questão de reservar a mesa para não correr riscos. 
                No dia, a busquei em casa e, nervoso, esperei ela do lado de fora do carro para cumprimenta-lá, e com uma caixa de chocolate (sem saber que ela era intolerante à lactose rs). 
                Mas, quando ela apareceu, eu soube na hora: ela era a mulher especial que eu procurava. E após cada conversa que íamos tendo, eu me apaixonava mais e mais por ela.
              </p>
              <p>
                Nosso primeiro encontro foi engraçado, mas muito especial onde jamais vamos nós esquecer. 
                E depois do primeiro encontro, eu já sabia: queria construir minha vida com essa mulher incrível e verdadeira que é a Mirelly. 
                Desde então, nunca mais nos desgrudamos (graças a Deus).
              </p>
              <p>
                Agora, estamos prestes a dar o passo mais importante das nossas vidas: o matrimônio. 
                E você, é nosso convidado de honra para celebrar com a gente!
              </p>
            </div>
            <div className={styles.storyOrnamentBottom}>✦ ✦ ✦</div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
