import { Link } from "react-router-dom";

import CtaImagem from "../assets/CtaImagem.png";
import logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative
        bg-[#0A0A0A]
        text-white
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CtaImagem}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(1,116,89,.18),transparent_60%)]
          "
        />
      </div>

      <div className="relative">
        <div className="flex flex-col justify-between">

          {/* CTA */}
          <section className="pt-24 md:pt-32 xl:pt-40">
            <div className="max-w-[1700px] mx-auto px-6 md:px-10 xl:px-20">

              <h2
                className="
                  text-center
                  text-[42px]
                  md:text-[70px]
                  xl:text-[90px]
                  leading-[0.95]
                  tracking-[-2px]
                  md:tracking-[-4px]
                "
              >
                Opera Café Bistrô:
                <br />
                Cultivando Momentos,
                <br />
                Sabores e Cultura.
              </h2>

              <p
                className="
                  mt-8
                  md:mt-10
                  text-center
                  text-white/70
                  text-[16px]
                  md:text-[18px]
                  leading-[190%]
                  max-w-[760px]
                  mx-auto
                "
              >
                Um espaço pensado para encontros, sabores, cultura e
                experiências memoráveis.
                <br className="hidden md:block" />
                Descubra o ambiente perfeito para desacelerar e apreciar
                cada detalhe.
              </p>

            </div>
          </section>

          {/* Bottom */}
          <section className="pb-10 md:pb-16 mt-20">
            <div className="max-w-[1700px] mx-auto px-6 md:px-10 xl:px-20">

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-14 border-t border-white/10 pt-12 md:pt-16">

                {/* Logo */}
                <div>

                  <Link to="/" className="inline-block">
                    <img
                      src={logo}
                      alt="Opera Café"
                      className="h-16 md:h-20 mb-8 hover:opacity-80 transition"
                    />
                  </Link>

                  <p className="text-white/60 leading-[180%] max-w-[320px]">
                    Cafeteria, bistrô e torrefação artesanal em um ambiente
                    acolhedor e contemporâneo.
                  </p>

                </div>

                {/* Navegação */}
                <div>

                  <h3 className="text-[22px] mb-8">
                    Navegação
                  </h3>

                  <nav className="flex flex-col gap-4 text-white/60">

                    <Link
                      to="/"
                      className="hover:text-white transition"
                    >
                      Início
                    </Link>

                    <Link
                      to="/sobre"
                      className="hover:text-white transition"
                    >
                      Sobre Nós
                    </Link>

                    <Link
                      to="/cardapio"
                      className="hover:text-white transition"
                    >
                      Cardápio
                    </Link>

                    <Link
                      to="/eventos"
                      className="hover:text-white transition"
                    >
                      Eventos
                    </Link>

                    <Link
                      to="/contato"
                      className="hover:text-white transition"
                    >
                      Contato
                    </Link>

                  </nav>

                </div>

                {/* Contato */}
                <div>

                  <h3 className="text-[22px] mb-8">
                    Contato
                  </h3>

                  <div className="space-y-4 text-white/60">
                    <p>Goiânia • GO</p>
                    <p>(62) 98158-9532</p>
                    <p>@operacafebistro</p>
                  </div>

                </div>

                {/* Funcionamento */}
                <div>

                  <h3 className="text-[22px] mb-8">
                    Funcionamento
                  </h3>

                  <div className="space-y-2 text-white/60">
                    <p>Seg a Sex • 07:00 às 19:00</p>
                    <p>Sábados • 08:00 às 18:00</p>
                  </div>

                </div>

              </div>

              <div
                className="
                  mt-12
                  md:mt-14
                  pt-8
                  border-t
                  border-white/10
                  flex
                  flex-col
                  md:flex-row
                  justify-between
                  items-center
                  gap-4
                  text-white/40
                  text-sm
                "
              >
                <p>© 2026 Opera Café Bistrô.</p>

                <p>Desenvolvido pela Flux.</p>
              </div>

            </div>
          </section>

        </div>
      </div>
    </footer>
  );
}