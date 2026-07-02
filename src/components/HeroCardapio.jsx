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
    <section
      id="hero-cardapio"
      className="relative h-screen overflow-hidden"
    >
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black/45"
      />

      {/* Conteúdo */}
      <div
        className="
          relative
          z-20
          min-h-screen
          max-w-[1700px]
          mx-auto
          flex
          flex-col
          justify-center
          lg:justify-end
          items-start
          px-6
          sm:px-10
          lg:px-20
          pt-28
          pb-16
          sm:pb-20
          lg:pb-32
        "
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          className="
            uppercase
            tracking-[5px]
            text-[#8DD7C5]
            text-xs
            mb-5
          "
        >
          Cardápio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: .3,
          }}
          className="
            text-white
            text-[34px]
            sm:text-[46px]
            md:text-[60px]
            lg:text-[76px]
            leading-[1.05]
            tracking-[-2px]
            max-w-[900px]
          "
        >
          Sabores preparados
          <br />
          para marcar momentos.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .6,
          }}
          className="
            mt-6
            max-w-[340px]
            sm:max-w-[560px]
            lg:max-w-[700px]
            text-white/80
            text-[15px]
            sm:text-[17px]
            lg:text-[20px]
            leading-[180%]
            lg:leading-[190%]
          "
        >
          Do café especial à gastronomia autoral, cada item foi pensado
          para transformar momentos simples em experiências memoráveis.
        </motion.p>

      </div>
    </section>
  );
}