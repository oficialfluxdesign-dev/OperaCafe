import { motion } from "framer-motion";
import TorrefacaoImagem from "../assets/TorrefacaoImagem.png";

export default function Torrefacao() {
  return (
    <section className="pb-16 md:pb-28 pt-8 md:pt-10 bg-white">
      <div className="max-w-[1700px] mx-auto px-5 md:px-20">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-[14px] overflow-hidden"
        >
          {/* imagem */}
          <img
            src={TorrefacaoImagem}
            alt=""
            className="w-full h-[850px] md:h-[800px] object-cover object-[80%_center]"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/45 md:bg-black/35" />

          {/* texto topo esquerdo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="
              absolute
              top-6 left-6
              md:top-14 md:left-14
              right-6 md:right-auto
              text-white
              z-10
            "
          >
            <h2
              className="
                text-[30px]
                leading-[1.15]
                mb-5
                md:text-[64px]
                md:leading-[1.05]
                md:mb-8
              "
            >
              Torrefação Opera: A Arte de
              <br className="hidden lg:block"/>
              Transformar o Grão em Experiência
            </h2>

            <p
              className="
                text-[15px]
                leading-[180%]
                text-white/90
                max-w-full
                md:max-w-[620px]
                md:text-[18px]
                md:leading-[170%]
                mt-[21.5rem]
              "
            >
              No Opera Café Bistrô, a torra não é apenas uma etapa do processo,
              é uma verdadeira arte, guiada pelo respeito à singularidade de
              cada grão e pela paixão em extrair o seu melhor perfil de sabor.
              <br />
              <br />
              Acreditamos que um café excepcional nasce de um cuidado que vai
              da semente à xícara, e a torra é o coração dessa transformação.
              Nosso compromisso é revelar as características naturais dos cafés
              especiais, garantindo uma bebida aromática, equilibrada e
              inesquecível.
            </p>
          </motion.div>

          {/* texto inferior direito */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="
              hidden
              lg:block
              absolute
              left-6
              right-6
              bottom-6
              md:left-auto
              md:right-14
              md:bottom-14
              max-w-full
              md:max-w-[520px]
              text-white
              z-10
            "
          >
            <p
              className="
                text-[15px]
                leading-[180%]
                text-white/90
                md:text-[18px]
                md:leading-[170%]
              "
            >
              Deseja desfrutar de cafés recém-torrados no conforto do seu lar?
              Nossa loja online oferece uma seleção exclusiva dos nossos
              melhores grãos, torrados com o mesmo cuidado e paixão que você
              encontra em nosso bistrô. Experimente a diferença de um café
              especial, fresco e com a qualidade Opera.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}