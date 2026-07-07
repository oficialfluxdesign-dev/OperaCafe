import { motion } from "framer-motion";
import ImagemHeroDesktop from "../assets/HeroImagemCardapio.png";
import ImagemHeroMobile from "../assets/HeroImagemCardapioMobile.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { y: 70, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroCardapio() {
  return (
    <section
      id="hero-cardapio"
      aria-labelledby="hero-cardapio-title"
      className="relative h-[100svh] md:h-screen overflow-hidden"
    >
      {/* Imagem Desktop */}
      <motion.img
        src={ImagemHeroDesktop}
        alt="Cardápio do Opera Café Bistrô com cafés especiais, brunch, almoço e gastronomia artesanal em Goiânia."
        fetchPriority="high"
        loading="eager"
        decoding="async"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          hidden
          md:block
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />

      {/* Imagem Mobile */}
      <motion.img
        src={ImagemHeroMobile}
        alt="Cardápio do Opera Café Bistrô com cafés especiais, brunch, almoço e gastronomia artesanal em Goiânia."
        fetchPriority="high"
        loading="eager"
        decoding="async"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          block
          md:hidden
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black/45"
        aria-hidden="true"
      />

      {/* Gradient */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[180px]
          md:h-[280px]
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
        "
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
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
          variants={fadeUp}
          className="
            uppercase
            tracking-[5px]
            text-[#8DD7C5]
            text-xs
            mb-5
          "
        >
          Cardápio • Opera Café Bistrô
        </motion.span>

        <motion.h1
          id="hero-cardapio-title"
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
            text-balance
          "
        >
          Sabores preparados
          <br />
          para marcar momentos.
        </motion.h1>

        <motion.p
          variants={fadeUp}
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
            text-pretty
          "
        >
          Descubra um cardápio exclusivo com cafés especiais, brunch,
          almoço, sobremesas artesanais e bebidas preparadas com ingredientes
          selecionados no Opera Café Bistrô, em Goiânia.
        </motion.p>
      </motion.div>
    </section>
  );
}