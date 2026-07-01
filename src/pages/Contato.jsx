import Header from "../components/Header";
import Footer from "../components/Footer";

import HeroContato from "../components/HeroContato";
import FormContato from "../components/FormContato";

export default function Contato() {
  return (
    <>
      <div className="relative z-10 bg-white">
        <Header />
        <HeroContato />
        <FormContato />
        <section className="pb-32 px-6 md:px-[50px] bg-white">
          <div className="max-w-[1700px] mx-auto">
            <div className="mb-12">
              <span
                className="
                  uppercase
                  tracking-[4px]
                  text-sm
                  text-[#015642]
                "
              >
                Nossa localização
              </span>
              <h2
                className="
                  mt-4
                  text-[64px]
                  leading-none
                  tracking-[-2px]
                  text-[#272727]
                "
              >
                Venha nos visitar
              </h2>
              <p
                className="
                  mt-6
                  text-[18px]
                  text-[#666]
                  max-w-[700px]
                  leading-[180%]
                "
              >
                Estamos localizados em Goiânia, em um espaço pensado para
                proporcionar experiências únicas com café, gastronomia e
                hospitalidade.
              </p>
            </div>
            <div
              className="
                overflow-hidden
                rounded-[10px]
                border
                border-[#E7E7E3]
                shadow-[0_10px_40px_rgba(0,0,0,.05)]
              "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5332571941212!2d-49.2725353!3d-16.7002239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1a98e4b8277%3A0xc083cb8a20341bb1!2zw5NwZXJhIENhZsOpIEJpc3Ryw7Q!5e0!3m2!1spt-BR!2sbr!4v1782352050688!5m2!1spt-BR!2sbr"
                width="100%"
                height="650"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}