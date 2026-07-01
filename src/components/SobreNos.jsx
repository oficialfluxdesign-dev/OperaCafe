import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Sobre01 from "../assets/Sobre01.png";
import Sobre02 from "../assets/Sobre02.png";
import Sobre03 from "../assets/Sobre03.png";
import Sobre04 from "../assets/Sobre04.png";

const images = [
  Sobre01,
  Sobre02,
  Sobre03,
  Sobre04,
];

const buttonAnim = {
  hidden: { y: 10, opacity: 0, scale: 0.9 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 12,
    },
  },
};

export default function SobreNos() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-28 pt-1 bg-white">
      <div>

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-10 md:my-14 max-w-[1700px] mx-auto px-5 md:px-20"
        >
          <h2 className="text-[#272727] text-[34px] leading-[1.15] md:text-6xl">
            Nossa História e Paixão:
            <br className="hidden lg:block"/>
            Cultivando Momentos e Sabores.
          </h2>
        </motion.div>

        {/* galeria */}
        <div className="overflow-hidden mb-10 md:mb-14">
          <div className="max-w-[1700px] mx-auto overflow-hidden">

            <div className="flex gap-2 md:gap-4 h-[260px] md:h-[520px] px-5 md:px-20 w-full">

              {images.map((img, index) => {
                const isActive = index === active;
                const isPreview = index === 0;

                return (
                  <motion.div
                    key={index}
                    layout
                    transition={{
                      layout: {
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    className="
                      relative
                      rounded-[8px]
                      overflow-hidden
                      min-w-0
                      flex-shrink-0
                    "
                    animate={{
                      flex: isActive
                        ? 2.6
                        : isPreview
                        ? 0.45
                        : 1,
                    }}
                  >
                    <motion.img
                      src={img}
                      alt=""
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                      "
                      animate={{
                        scale: isActive ? 1.02 : 1,
                      }}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <div className="absolute inset-0 bg-black/10" />
                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>

        {/* conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-[1700px] mx-auto px-5 md:px-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#272727] text-[28px] md:text-[30px] lg:mb-8">
              Sobre nós
            </h3>

            <motion.div className="flex gap-3 mt-0 lg:mt-[42px]">

              <motion.button
                variants={buttonAnim}
                className="
                  hidden
                  lg:flex
                  md:flex-none
                  bg-[#015642]
                  hover:bg-[#017459]
                  border-[#017459]
                  border-3
                  transition
                  px-5
                  md:px-[30px]
                  py-4
                  md:py-[20px]
                  rounded-full
                  text-white
                "
              >
                Visite-nos
              </motion.button>

              <motion.button
                variants={buttonAnim}
                className="
                  hidden
                  lg:flex
                  border
                  border-[#017459]
                  hover:bg-[#017459]
                  border-3
                  transition
                  px-5
                  md:px-8
                  py-5
                  rounded-full
                  text-[#015642]
                  hover:text-white
                "
              >
                Saber mais sobre 
              </motion.button>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#272727]"
          >
            <p className="text-[17px] md:text-[20px] leading-[180%] mb-6 md:mb-8">
              No coração vibrante de Goiânia, o Opera Café Bistrô transcende
              o conceito de uma simples cafeteria. Nascido em 2018 de um sonho
              em um charmoso casarão histórico, evoluímos para um espaço onde a
              paixão pelo café se encontra com a alta gastronomia e a efervescência
              cultural.
            </p>

            <p className="text-[17px] md:text-[20px] leading-[180%]">
              Em 2020, consolidamos nossa jornada ao nos tornarmos também uma
              torrefação, garantindo que cada grão, desde a origem até a sua
              xícara, seja tratado com a maestria e o carinho que você merece.
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}