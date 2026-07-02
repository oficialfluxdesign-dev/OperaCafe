import { motion } from "framer-motion";

import HeroImagemSobre from "../assets/HeroImagemSobre.png";

export default function HeroSobre() {
  return (
    <section className="relative h-[100svh] md:h-screen overflow-hidden">
      {/* imagem */}
      <motion.img
        src={HeroImagemSobre}
        alt=""
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
          object-center
        "
      />

      {/* overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/45
        "
      />

      {/* gradient bottom */}
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

      {/* conteúdo */}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
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

          {/* DESKTOP (EXATAMENTE O MESMO) */}
          <div className="hidden md:block">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
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
                delay: 0.9,
                duration: 1,
              }}
              className="
                text-white/80
                text-[14px]
                md:text-[18px]
                leading-[170%]
                mt-[33px]
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