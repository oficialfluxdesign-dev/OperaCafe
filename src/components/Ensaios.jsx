import { motion } from "framer-motion";

const cards = [
  {
    number: "1.",
    title: "Agendamento Obrigatório",
    desc: "Todos os ensaios devem ser agendados com antecedência pelo WhatsApp.",
  },
  {
    number: "2.",
    title: "Horários Preferenciais:",
    desc: "Para evitar horários de pico e garantir a melhor luz, as fotos acontecem entre 09:00h às 11:00h de Seg à Sex.",
  },
  {
    number: "3.",
    title: "Taxa de Uso:",
    desc: "Para ensaios comerciais ou de longa duração, uma taxa de uso do espaço pode ser aplicada. Detalhes serão informados após a análise da sua solicitação.",
  },
];

export default function Ensaios() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-[1700px] px-5 md:px-20 mx-auto">

        {/* topo */}
        <div className="mb-12 md:mb-20">

          {/* linha + título */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10 mb-10 md:mb-14">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                text-[#272727]
                text-[34px]
                md:text-[64px]
                leading-[1.1]
                md:leading-[1.05]
                tracking-[-1px]
                md:tracking-[-2px]
              "
            >
              Quer eternizar momentos
              <br />
              especiais em um ambiente
              <br />
              único e inspirador?
            </motion.h2>

            {/* linha */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="
                hidden
                md:block
                origin-left
                h-[2px]
                bg-[#017459]
                flex-1
                mt-28
              "
            />

          </div>

          {/* texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h2 className="text-[#272727] text-[26px] md:text-[30px] mb-4 font-medium">
              Como Funciona?
            </h2>

            <p
              className="
                text-[#4A4A4A]
                text-[16px]
                md:text-[17px]
                leading-[180%]
                max-w-[850px]
              "
            >
              Para garantir a melhor experiência para você e para nossos clientes,
              a realização de ensaios fotográficos no Opera Café Bistrô requer
              agendamento prévio e a observância de algumas regras.
            </p>
          </motion.div>

        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 mb-10 md:mb-14">

          {cards.map((card, index) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="
                relative
                min-h-[320px]
                md:min-h-[520px]
                bg-[#E5ECE9]
                rounded-[10px]
                p-6
                md:p-10
                flex
                flex-col
                justify-between
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-[radial-gradient(circle_at_top_left,rgba(1,86,66,0.08),transparent_50%)]
                "
              />

              <h1
                className="
                  text-[#015642]
                  text-[5rem]
                  md:text-[8rem]
                  leading-none
                  font-semibold
                  tracking-[-4px]
                "
              >
                {card.number}
              </h1>

              <div className="relative z-10">
                <h3 className="text-[#015642] text-[22px] md:text-[24px] leading-[120%] mb-4 md:mb-5">
                  {card.title}
                </h3>

                <p className="text-[#4B4B4B] text-[15px] md:text-[16px] leading-[170%]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* botões */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            flex
            flex-col
            sm:flex-row
            justify-end
            gap-4
          "
        >
          <button
            className="
              bg-[#015642]
              hover:bg-[#017459]
              border-[#017459]
              border-3
              transition
              px-6
              md:px-[30px]
              py-4
              md:py-[20px]
              rounded-full
              text-white
              cursor-pointer
              w-full
              sm:w-auto
            "
          >
            Fazer reserva
          </button>

          <button
            className="
              border
              border-[#017459]
              hover:bg-[#017459]
              border-3
              transition
              px-6
              md:px-8
              py-4
              rounded-full
              hover:text-white
              cursor-pointer
              w-full
              sm:w-auto
            "
          >
            Conheça o Opera Café Bistrô
          </button>
        </motion.div>

      </div>
    </section>
  );
}