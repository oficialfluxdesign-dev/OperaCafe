import { motion, useReducedMotion } from "framer-motion";
import ImagemHero from "../assets/HeroImagemEventos.png";

export default function HeroEventos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-eventos-title"
      className="relative h-[100svh] md:h-screen overflow-hidden"
    >
      {/* imagem */}
      <motion.img
        src={ImagemHero}
        alt="Eventos e experiências do Opera Café Bistrô em Goiânia"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        draggable={false}
        style={{ willChange: "transform" }}
        initial={shouldReduceMotion ? false : { scale: 1.08 }}
        animate={shouldReduceMotion ? {} : { scale: 1 }}
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
          transform-gpu
        "
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* gradient */}
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
          pointer-events-none
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
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
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
              <span>Agenda</span>
              <span>•</span>
              <span>Eventos</span>
            </motion.div>

            <motion.h1
              id="hero-eventos-title"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 50 }
              }
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
              Agenda
              <br />
              Opera
            </motion.h1>

            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0 }
              }
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
              Eventos, workshops, música ao vivo e experiências
              gastronômicas no Opera Café Bistrô, em Goiânia.
            </motion.p>

          </div>

          {/* DESKTOP */}
          <div className="hidden md:block">
          <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
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
                w-[58rem]
                mx-auto
              "
            >
              <span>Agenda</span>
              <span>Experiências</span>
              <span>Eventos</span>
            </motion.div>

            <motion.h1
              id="hero-eventos-title"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 50 }
              }
              animate={{ opacity: 1, y: 0 }}
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
              Agenda Opera
            </motion.h1>

            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0 }
              }
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
              "
            >
              Descubra eventos, workshops, música ao vivo e experiências
              gastronômicas exclusivas no Opera Café Bistrô, em Goiânia.
            </motion.p>

          </div>

        </div>
      </div>
    </section>
  );
}