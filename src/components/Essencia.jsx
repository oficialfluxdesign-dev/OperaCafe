import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ImagemInterior from "../assets/ImagemInterior.png";
import ImagemCafe from "../assets/ImagemCafe.png";
import ImagemPrato from "../assets/ImagemPrato.png";
import ImagemCafeTorrefacao from "../assets/ImagemCafeTorrefacao.png";

import ImagemPrincipal1 from "../assets/ImagemPrincipal1.png";
import ImagemPrincipal2 from "../assets/ImagemPrincipal2.png";
import ImagemPrincipal3 from "../assets/ImagemPrincipal3.png";
import ImagemPrincipal4 from "../assets/ImagemPrincipal4.png";

import XicaraIcon from "../assets/XicaraIcon.svg";

const cards = [
  {
    image: ImagemInterior,
    mainImage: ImagemPrincipal3,
    title: "Ambiente Acolhedor",
    desc: "Um refúgio de bem-estar e inspiração para seus momentos.",
  },
  {
    image: ImagemCafe,
    mainImage: ImagemPrincipal2,
    title: "Sustentabilidade",
    desc: "Compromisso com o meio ambiente e produtores responsáveis.",
  },
  {
    image: ImagemPrato,
    mainImage: ImagemPrincipal4,
    title: "Ingredientes Frescos",
    desc: "Priorizamos produtos locais e da estação para seu paladar.",
  },
  {
    image: ImagemCafeTorrefacao,
    mainImage: ImagemPrincipal1,
    title: "Torrefação Própria",
    desc: "Grãos selecionados e torrados artesanalmente em nossa casa.",
  },
];

export default function Essencia() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef();

  const next = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  useEffect(() => {
    if (paused) return;

    timer.current = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(timer.current);
  }, [active, paused]);

  const activeCard = cards[active];

  return (
    <section className="pb-16 md:pb-28 bg-white overflow-hidden">
      <div>
        {/* TOPO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            max-w-[1700px]
            mx-auto
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-8
            md:gap-10
            mb-10
            md:mb-14
            px-5
            md:px-20
          "
        >
          <div>
            <p className="text-[#015642] font-semibold text-[14px] md:text-[16px] mb-4 flex items-center gap-[11px]">
              <img src={XicaraIcon} alt="" className="w-5" />
              COMPROMISSO OPERA
            </p>

            <h2 className="text-[#272727] text-[34px] md:text-6xl leading-[1.1]">
              Nossa Essência em Cada Detalhe
            </h2>
          </div>

          <p
            className="
              text-[#272727]
              max-w-xl
              text-[16px]
              md:text-base
              leading-[170%]
              mt-0
              lg:mt-13
            "
          >
            Descubra os pilares que tornam o Opera Café Bistrô um lugar único,
            onde a paixão se traduz em experiência, sabor e cuidado.
          </p>
        </motion.div>

        {/* BANNER */}
        <div className="relative h-[420px] md:h-[700px] overflow-visible">

          {/* imagens */}
          {cards.map((card, index) => (
            <div
              key={index}
              className={`
                absolute inset-0
                transition-opacity duration-[1200ms] ease-in-out
                ${active === index ? "opacity-100" : "opacity-0"}
              `}
            >
              <img
                src={card.mainImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* fade */}
          <div className="absolute inset-x-0 bottom-0 h-[150px] md:h-[220px] bg-gradient-to-t from-black/70 to-transparent z-10" />

          {/* texto */}
          <div className="absolute inset-0 z-20">
            <div
              className="
                max-w-[1700px]
                mx-auto
                h-full
                flex
                items-end
                justify-start
                md:justify-end
                pb-8
                md:pb-12
                px-5
                md:px-20
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45 }}
                  className="text-white text-left md:text-right"
                >
                  <h3
                    className="
                      text-[32px]
                      md:text-[52px]
                      leading-[1.05]
                      mb-3
                      md:mb-4
                    "
                  >
                    {activeCard.title}
                  </h3>

                  <p
                    className="
                      text-[16px]
                      md:text-[20px]
                      leading-[170%]
                      max-w-full
                      md:max-w-[500px]
                      ml-0
                      md:ml-auto
                    "
                  >
                    {activeCard.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}