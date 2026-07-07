import { memo } from "react";
import { motion } from "framer-motion";
import HeroImagemSobre from "../assets/HeroImagemSobre.png";
import HeroImagemSobreMobile from "../assets/HeroImagemSobreMobile.jpg";

const imageAnim = {
  initial: { scale: 1.08 },
  animate: { scale: 1 },
  transition: {
    duration: 2.5,
    ease: [0.22, 1, 0.36, 1],
  },
};

const fadeSmall = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeTitle = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

function HeroSobre() {
  return (
    <section
      className="relative h-[100svh] md:h-screen overflow-hidden"
      aria-labelledby="hero-sobre-title"
    >
      {/* Imagem Desktop */}
      <motion.img
        src={HeroImagemSobre}
        alt="Interior do Opera Café Bistrô em Goiânia"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        draggable={false}
        {...imageAnim}
        className="
          hidden
          md:block
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          select-none
          will-change-transform
        "
      />

      {/* Imagem Mobile */}
      <motion.img
        src={HeroImagemSobreMobile}
        alt="Interior do Opera Café Bistrô em Goiânia"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        draggable={false}
        {...imageAnim}
        className="
          block
          md:hidden
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          select-none
          will-change-transform
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

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
      />

      {/* Conteúdo */}
      <div
        className="
          relative
          z-20
          h-full
          flex
          items-end
          justify-center
          text-center
          px-5
          md:px-6
          pb-24
          md:pb-40
        "
      >
        <div className="w-full max-w-[1700px]">

          {/* MOBILE */}
          <div className="md:hidden">

            <motion.div
              {...fadeSmall}
              transition={{
                delay: .3,
                duration: .8,
              }}
              className="
                flex
                justify-center
                gap-5
                text-white/80
                text-[15px]
                uppercase
                tracking-[3px]
                mb-8
              "
            >
              <span>Sobre</span>
              <span>•</span>
              <span>Cafeteria</span>
            </motion.div>

            <motion.h1
              id="hero-sobre-title"
              {...fadeTitle}
              transition={{
                delay: .5,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-white
                text-[58px]
                leading-[0.9]
                tracking-[-3px]
                font-light
              "
            >
              Opera
              <br />
              Café Bistrô
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: .9,
                duration: 1,
              }}
              className="
                mt-8
                text-white/75
                text-[16px]
                leading-[180%]
                max-w-[320px]
                mx-auto
              "
            >
              Uma jornada de paixão e tradição,
              cultivada em cada grão e em cada momento.
            </motion.p>

          </div>

          {/* DESKTOP */}
          <div className="hidden md:block">

            <motion.div
              {...fadeSmall}
              transition={{
                delay: .3,
                duration: .8,
              }}
              className="
                flex
                items-center
                justify-between
                text-white
                text-[24px]
                mb-[55px]
                w-[68rem]
                mx-auto
              "
            >
              <span>Sobre</span>
              <span>a melhor</span>
              <span>cafeteria</span>
            </motion.div>

            <motion.h1
              id="hero-sobre-title-desktop"
              {...fadeTitle}
              transition={{
                delay: .5,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-white
                text-[72px]
                md:text-[150px]
                leading-[0.9]
                tracking-[-7px]
                font-light
                whitespace-nowrap
              "
            >
              Opera Café Bistrô
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: .9,
                duration: 1,
              }}
              className="
                text-white/80
                text-[14px]
                md:text-[18px]
                leading-[170%]
                mt-[33px]
                max-w-[700px]
                mx-auto
              "
            >
              Uma jornada de paixão e tradição, cultivada em cada
              grão e em cada momento.
            </motion.p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default memo(HeroSobre);