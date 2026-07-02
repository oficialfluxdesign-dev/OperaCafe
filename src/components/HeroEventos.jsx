import { motion } from "framer-motion";
import ImagemHero from "../assets/HeroImagemEventos.png";

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

export default function HeroEventos() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagem */}
      <motion.img
        src={ImagemHero}
        alt="Eventos Opera Café"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      <div
        className="
          relative
          z-10
          min-h-screen
          max-w-[1700px]
          mx-auto
          flex
          flex-col
          justify-end
          items-center
          px-4
          sm:px-10
          lg:px-20
          pb-16
          sm:pb-20
          lg:pb-32
          pt-32
          text-center
        "
      >
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="
            text-white
              text-[34px]
              leading-[1.1]
              md:text-6xl
              leading-[1.1]
              tracking-[-1px]
              lg:tracking-[-3px]
          "
        >
          Agenda Opera:
          <br className="hidden lg:block"/>
           Cultura, Experiências
          &
          Encontros que Inspiram
        </motion.h1>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
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
            max-w-[720px]
          "
        >
          Descubra os próximos eventos, workshops e experiências que
          <br className="hidden md:block" />
          preparamos para você no coração do Opera Café Bistrô.
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
              px-8
              lg:px-10
              py-4
              lg:py-5
              rounded-full
              border-2
              border-[#017459]
              hover:bg-[#017459]
              transition
              text-white
              font-medium
              cursor-pointer
            "
          >
            Reserve sua Vaga
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}