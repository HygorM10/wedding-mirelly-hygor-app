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
                A história deles começou no Natal de 2024, quando Hygor mandou a primeira mensagem para Mirelly no Instagram, já que não conseguiu comentar no story dela (tecnologia, né rsrs). 
                Eles começaram a conversar e, na sexta-feira seguinte, Hygor a convidou para sair. Ele escolheu um restaurante que ela não conhecia e fez questão de reservar a mesa para não correr riscos. 
                No dia, ele a buscou em casa e, nervoso, esperou ela do lado de fora do carro para cumprimentá-la, com uma caixa de chocolate (sem saber que ela era intolerante à lactose rs). 
                Mas, quando ela apareceu, ele soube na hora: ela era a mulher especial que ele procurava. E, após cada conversa que eles iam tendo, Hygor se apaixonava mais e mais por ela.
              </p>
              <p>
                O primeiro encontro foi engraçado, mas muito especial, e jamais será esquecido. Depois desse encontro, Hygor já sabia: ele queria construir sua vida com essa mulher incrível e verdadeira, Mirelly. 
                Desde então, nunca mais se separaram (graças a Deus).
              </p>
              <p>
                Agora, estão prestes a dar o passo mais importante de suas vidas: o matrimônio. 
                E você é o convidado de honra para celebrar com eles!
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
