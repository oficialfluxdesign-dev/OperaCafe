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
    <section className="relative h-screen overflow-hidden">
      {/* imagem */}
      <motion.img
        src={ImagemHero}
        alt="Eventos Opera Café"
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
        "
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      <div
        className="
          relative
          z-10
          h-full
          max-w-[1700px]
          mx-auto
          flex
          flex-col
          justify-end
          py-40
          text-center
          px-6
        "
      >
        {/* título */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="
           text-white text-4xl md:text-6xl leading-tight
          "
        >
          Agenda Opera: Cultura,
          <br />
          Experiências e Encontros
          que Inspiram
        </motion.h1>

        {/* descrição */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
          }}
          className="
            mt-6
            text-white/80
            text-[18px]
            leading-[190%]
            max-w-[700px]
            mx-auto
          "
        >
          Descubra os próximos eventos, workshops e experiências que <br /> preparamos para você no coração do Opera Café Bistrô.
        </motion.p>

        {/* botões */}
        <motion.div
          initial="hidden"
          animate="show"
          className="
            flex
            flex-col
            sm:flex-row
            mx-auto
            gap-4
            mt-[42px]
          "
        >
          <motion.button
              variants={buttonAnim}
              className="bg-[#015642] hover:bg-[#017459] border-[#017459] border-3 transition px-[30px] py-[20px] rounded-full text-white cursor-pointer"
            >
              Explore Nossos Sabores
            </motion.button>

            <motion.button
              variants={buttonAnim}
              className="border border-[#017459] hover:bg-[#017459] border-3 transition px-8 py-4 rounded-full text-white cursor-pointer"
            >
              Garanta Seu Lugar
            </motion.button>
        </motion.div>
      </div>
    </section>
  );
}