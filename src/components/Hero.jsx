import { memo } from "react";
import { motion } from "framer-motion";

import hero from "../assets/ImagemHero.png";
import GoogleIcon from "../assets/GoogleIcon.png";

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

const ratingAnim = {
  hidden: {
    x: 80,
    opacity: 0,
    filter: "blur(10px)",
  },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonClass = `
w-full
sm:w-auto
px-8
lg:px-10
py-4
lg:py-5
rounded-full
transition
font-medium
cursor-pointer
`;

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="
        relative
        h-screen
        overflow-hidden
        select-none
      "
    >
      {/* Imagem */}
      <motion.img
        src={hero}
        alt="Opera Café Bistrô"
        fetchPriority="high"
        decoding="async"
        draggable={false}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          will-change-transform
        "
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/25 z-10"
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
          pt-70
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
          Opera Café Bistrô
        </motion.span>

        <motion.h1
          id="hero-title"
          variants={fadeUp}
          className="
            text-white
            text-[34px]
            sm:text-[46px]
            md:text-[60px]
            lg:text-[76px]
            leading-[1.05]
            tracking-[-2px]
            max-w-[1000px]
          "
        >
          Onde a paixão pelo café
          <br />
          encontra a alta gastronomia.
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
          "
        >
          Descubra um refúgio de sabor e cultura no coração de Goiânia.
          <br className="hidden md:block" />
          Cafeteria, bistrô e torrefação com alma.
        </motion.p>

        {/* Avaliações */}
        <motion.div
          variants={ratingAnim}
          className="
            hidden
            xl:flex
            absolute
            right-20
            bottom-32
            flex-col
            text-white
          "
        >
          <h2 className="text-5xl font-light">
            4.6 / 5
          </h2>

          <p className="mt-3 flex items-center gap-2 text-white/80">
            <img
              src={GoogleIcon}
              alt="Google"
              width={20}
              height={20}
              decoding="async"
              draggable={false}
              className="w-5 h-5"
            />

            1.675 Avaliações
          </p>
        </motion.div>
      </motion.div>

      {/* Curva */}
      <motion.div
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.8,
        }}
        className="
          absolute
          bottom-0
          left-0
          w-full
          z-30
          overflow-hidden
          leading-none
        "
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full h-[60px] md:h-[120px]"
        >
          <path
            fill="#ffffff"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H0Z"
          />
        </svg>
      </motion.div>
    </section>
  );
}

export default memo(Hero);