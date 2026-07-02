import { motion } from "framer-motion";
import ImagemHero from "../assets/HeroImagemCardapio.png";

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

export default function HeroCardapio() {
  return (
    <section id="hero-cardapio" className="relative min-h-screen overflow-hidden">

      {/* Imagem */}
      <motion.img
        src={ImagemHero}
        alt=""
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div
        className="
          relative
          z-10
          h-full
          min-h-screen
          max-w-[1700px]
          mx-auto
          flex
          flex-col
          justify-end
          items-center
          px-6
          sm:px-10
          lg:px-20
          pb-16
          sm:pb-20
          lg:pb-32
          text-center
        "
      >

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: .3,
          }}
          className="
            text-white
              text-[38px]
              leading-[1.1]
              md:text-6xl
              md:leading-tight
          "
        >
          Nosso Cardápio:
          <br />
          Sabores que Contam Histórias
        </motion.h1>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .6,
          }}
          className="
            mt-6
            lg:mt-8
            text-white/80
            text-[16px]
            sm:text-[18px]
            lg:text-[20px]
            leading-[180%]
            lg:leading-[190%]
            max-w-[680px]
          "
        >
          Do café especial à gastronomia autoral, cada item do nosso
          cardápio foi criado para transformar momentos simples em
          experiências memoráveis.
        </motion.p>

        {/* Botões */}
        <motion.div
          initial="hidden"
          animate="show"
          className="
            mt-10
            lg:mt-12
            flex
            flex-col
            sm:flex-row
            gap-4
            w-full
            sm:w-auto
          "
        >
          <motion.button
            variants={buttonAnim}
            className="
              w-full
              sm:w-auto
              border-2
              border-[#017459]
              hover:bg-[#017459]
              transition
              px-8
              lg:px-10
              py-4
              lg:py-5
              rounded-full
              text-white
              font-medium
              cursor-pointer
            "
          >
            Garanta Seu Lugar
          </motion.button>
        </motion.div>

      </div>

    </section>
  );
}