import { motion } from "framer-motion";
import HeroImagemContato from "../assets/HeroImagemContato.png";

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

export default function HeroContato() {
  return (
    <section className="relative h-screen overflow-hidden">

      <motion.img
        src={HeroImagemContato}
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
        "
      />

      <div className="absolute inset-0 bg-black/45" />

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
          px-6
        "
      >

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: .3,
          }}
          className="
           text-white text-4xl md:text-6xl leading-tight
          "
        >
          Conecte-se Conosco:
          <br />
          Estamos Prontos
          para Atendê-lo.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .6,
          }}
          className="
            mt-6
            text-white/80
            text-[18px]
            leading-[190%]
            max-w-[620px]
          "
        >
          Seja para uma reserva, um evento especial ou uma parceria,
          sua mensagem é importante para nós.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-10
          "
        >
          <motion.button
              variants={buttonAnim}
              className="bg-[#015642] hover:bg-[#017459] border-[#017459] border-3 transition px-[30px] py-[20px] rounded-full text-white cursor-pointer"
            >
              Enviar mensagem
            </motion.button>

            <motion.button
              variants={buttonAnim}
              className="border border-[#017459] hover:bg-[#017459] border-3 transition px-8 py-4 rounded-full text-white cursor-pointer"
            >
              Ver nossa localização
            </motion.button>
        </motion.div>

      </div>
    </section>
  );
}