import { motion } from "framer-motion";

import Header from "../components/Header";
import HeroEventos from "../components/HeroEventos";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Eventos() {
  return (
    <>
      <Header />

      <main>

        <HeroEventos />

        <section
          aria-labelledby="eventos-info"
          className="py-20 md:py-28 bg-white"
        >
          <div className="max-w-[1200px] mx-auto px-6">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-center"
            >

              <span
                className="
                  uppercase
                  tracking-[5px]
                  text-[#015642]
                  text-xs
                "
              >
                Eventos Opera Café
              </span>

              <h2
                id="eventos-info"
                className="
                  mt-6
                  text-[#272727]
                  text-[38px]
                  sm:text-[52px]
                  lg:text-[72px]
                  leading-[1]
                  tracking-[-3px]
                "
              >
                Estamos preparando
                <br />
                novas experiências.
              </h2>

              <p
                className="
                  mt-8
                  max-w-[820px]
                  mx-auto
                  text-[#666]
                  text-[17px]
                  lg:text-[20px]
                  leading-[190%]
                "
              >
                Nossa agenda de eventos está sendo cuidadosamente planejada para
                oferecer experiências exclusivas que unem cafés especiais,
                gastronomia autoral, cultura e momentos inesquecíveis em
                Goiânia. Em breve divulgaremos workshops, degustações,
                apresentações culturais e encontros especiais no Opera Café
                Bistrô.
              </p>

            </motion.div>

            <div
              className="
                mt-20
                grid
                md:grid-cols-3
                gap-8
              "
            >

              {[
                {
                  title: "Workshops",
                  text:
                    "Aprenda sobre cafés especiais, métodos de preparo, torra e degustações guiadas por especialistas.",
                },
                {
                  title: "Cultura",
                  text:
                    "Música ao vivo, arte, encontros culturais e experiências criadas para tornar cada visita memorável.",
                },
                {
                  title: "Experiências Exclusivas",
                  text:
                    "Eventos intimistas, harmonizações gastronômicas e experiências únicas desenvolvidas pelo Opera Café Bistrô.",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  className="
                    rounded-[16px]
                    border
                    border-[#017459]/10
                    p-10
                    transition-all
                    duration-500
                    hover:border-[#017459]/30
                    hover:-translate-y-1
                    transform-gpu
                  "
                >
                  <h3
                    className="
                      text-[28px]
                      tracking-[-1px]
                      text-[#272727]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-[#666]
                      leading-[190%]
                    "
                  >
                    {item.text}
                  </p>
                </motion.article>
              ))}

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}