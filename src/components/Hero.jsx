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

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Imagem */}
      <motion.img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
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
          h-full
          max-w-[1700px]
          mx-auto
          px-6
          md:px-20
          flex
          items-end
          lg:pb-44
          pb-24
        "
      >
        <div className="max-w-6xl">

          <motion.h1
            variants={fadeUp}
            className="
              text-white
              text-[38px]
              leading-[1.1]
              md:text-6xl
              md:leading-tight
            "
          >
            Opera Café Bistrô: Onde a Paixão pelo Café
            Encontra a Alta Gastronomia.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="
              text-white/80
              mt-[10px]
              text-[15px]
              md:text-base
              leading-[170%]
              md:leading-[150%]
            "
          >
            Descubra um refúgio de sabor e cultura no coração de Goiânia.&nbsp;
            <br className="hidden lg:block"/>
            Cafeteria, Bistrô e Torrefação com alma.
          </motion.p>

          {/* Botões */}
          <motion.div
            className="flex flex-row gap-3 mt-[42px]"
          >
            <motion.button
              variants={buttonAnim}
              className="
                flex-1
                sm:flex-none
                bg-[#015642]
                hover:bg-[#017459]
                border-[#017459]
                border-[3px]
                transition
                px-4
                md:px-[30px]
                py-4
                md:py-[20px]
                rounded-full
                text-white
                text-sm
                md:text-base
                cursor-pointer
              "
            >
              Explore Nossos Sabores
            </motion.button>

            <motion.button
              variants={buttonAnim}
              className="
                flex-1
                sm:flex-none
                border
                border-[#017459]
                border-[3px]
                hover:bg-[#017459]
                transition
                px-4
                md:px-8
                py-4
                rounded-full
                text-white
                text-sm
                md:text-base
                cursor-pointer
              "
            >
              Garanta Seu Lugar
            </motion.button>
          </motion.div>

          {/* Avaliações (Desktop apenas) */}
          <motion.div
            variants={ratingAnim}
            className="
              hidden
              lg:block
              absolute
              right-7
              -mt-17
              text-white
              px-20
            "
          >
            <h1 className="text-4xl">4.6 / 5</h1>

            <p className="text-white/80 mt-2 flex gap-2">
              <img
                src={GoogleIcon}
                alt=""
                className="w-4 h-4"
              />
              1.675 Avaliações
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Curva */}
      <motion.div
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.4, delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full z-30 overflow-hidden leading-none"
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