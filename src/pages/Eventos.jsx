import Header from "../components/Header";
import HeroEventos from "../components/HeroEventos";
import Footer from "../components/Footer";

export default function Eventos() {
  return (
    <>
      <div className="relative z-10 bg-white">
        <Header />
        <HeroEventos />

        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto text-center">
            <h2
              className="
                mt-10
                text-[56px]
                md:text-[72px]
                leading-[1]
                tracking-[-3px]
                text-[#272727]
              "
            >
              Estamos preparando
              <br />
              novas experiências.
            </h2>
            <p
              className="
                mt-10
                max-w-[760px]
                mx-auto
                text-[20px]
                leading-[190%]
                text-[#666]
              "
            >
              Nossa agenda de eventos está sendo cuidadosamente planejada para
              oferecer momentos únicos que unem café, gastronomia, cultura e
              conexões especiais. Em breve divulgaremos novas experiências,
              workshops, encontros e eventos exclusivos no Opera Café Bistrô.
            </p>
            <div
              className="
                mt-20
                p-10
                md:p-14
                rounded-[12px]
                border
                border-[#017459]/10
              "
            >
              <div className="grid md:grid-cols-3 gap-10">
                <div>
                  <h3
                    className="
                      mt-4
                      text-[26px]
                      text-[#272727]
                    "
                  >
                    Workshops
                  </h3>
                  <p
                    className="
                      mt-3
                      text-[#666]
                      leading-[180%]
                    "
                  >
                    Experiências focadas no universo dos cafés especiais.
                  </p>
                </div>
                <div>
                  <h3
                    className="
                      mt-4
                      text-[26px]
                      text-[#272727]
                    "
                  >
                    Cultura
                  </h3>
                  <p
                    className="
                      mt-3
                      text-[#666]
                      leading-[180%]
                    "
                  >
                    Música, arte e encontros para tornar cada visita memorável.
                  </p>
                </div>
                <div>
                  <h3
                    className="
                      mt-4
                      text-[26px]
                      text-[#272727]
                    "
                  >
                    Experiências Exclusivas
                  </h3>
                  <p
                    className="
                      mt-3
                      text-[#666]
                      leading-[180%]
                    "
                  >
                    Eventos especiais criados para conectar pessoas e sabores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}