import { motion } from "framer-motion";
import HeroImagemContato from "../assets/HeroImagemContato.png";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease,
    },
  },
};

export default function HeroContato() {
  return (
    <section
      id="hero-contato"
      aria-labelledby="hero-contato-title"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Imagem */}
      <motion.img
        src={HeroImagemContato}
        alt="Interior do Opera Café Bistrô em Goiânia, ambiente para reservas, eventos e atendimento."
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={1920}
        height={1080}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          ease,
        }}
        style={{
          willChange: "transform",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/60 lg:bg-black/45"
      />

      {/* Conteúdo */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative
          z-10
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
          pb-16
          sm:pb-20
          lg:pb-32
          pt-28
        "
      >
        {/* Eyebrow */}
        <motion.span
          variants={fadeUp}
          className="
            uppercase
            tracking-[5px]
            text-[#8DD7C5]
            text-xs
            mb-5
          "
        >
          Contato
        </motion.span>

        {/* Título */}
        <motion.h1
          id="hero-contato-title"
          variants={fadeUp}
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
          Estamos prontos
          <br />
          para atender você.
        </motion.h1>

        {/* Descrição */}
        <motion.p
          variants={fadeUp}
          className="
            mt-6
            max-w-[340px]
            sm:max-w-[520px]
            lg:max-w-[650px]
            text-white/80
            text-[15px]
            sm:text-[17px]
            lg:text-[20px]
            leading-[180%]
            lg:leading-[190%]
          "
        >
          Seja para uma reserva, um evento especial ou uma parceria,
          estamos à disposição para conversar com você.
        </motion.p>
      </motion.div>
    </section>
  );
}