import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Origem e Cultivo Sustentável",
    desc: "Grãos especiais provenientes de fazendas parceiras, cultivados com responsabilidade e foco em qualidade.",
  },
  {
    title: "Seleção Rigorosa dos Grãos Verdes",
    desc: "Uma análise criteriosa garante que apenas os melhores grãos avancem para a próxima etapa.",
  },
  {
    title: "Torra Artesanal no Opera",
    desc: "Equipamentos de ponta e técnicas artesanais realçam os aromas e sabores de cada origem.",
  },
  {
    title: "Controle de Qualidade e Degustação",
    desc: "Cada lote é avaliado para assegurar equilíbrio, aroma e excelência na xícara.",
  },
  {
    title: "Preparo e Serviço com Maestria",
    desc: "Nossos baristas extraem todo o potencial do café através de métodos e técnicas precisas.",
  },
  {
    title: "A Experiência Opera",
    desc: "O resultado final é uma experiência acolhedora, marcada por sabor, cultura e hospitalidade.",
  },
];

export default function JornadaGrao() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
  
    // Desktop
    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".step-card");
  
        gsap.set(cards, {
          opacity: 0,
          y: 100,
        });
  
        gsap.set(cards[0], {
          opacity: 1,
          y: 0,
        });
  
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${steps.length * 800}`,
            scrub: 1,
            pin: true,
          },
        });
  
        cards.forEach((card, index) => {
          if (index === 0) return;
  
          tl.to(cards[index - 1], {
            opacity: 0,
            scale: 0.92,
            y: -80,
            duration: 1,
          });
  
          tl.to(
            card,
            {
              opacity: 1,
              y: 0,
              duration: 1,
            },
            "<"
          );
        });
      }, sectionRef);
  
      return () => ctx.revert();
    });
  
    // Mobile
    mm.add("(max-width: 1023px)", () => {
      gsap.utils.toArray(".mobile-step").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 70,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
          },
        });
      });
    });
  
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white lg:h-screen overflow-hidden lg:overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto px-20 h-full hidden lg:block">
        {/* título */}
        <div className="pt-38 text-center">
          <h2
            className="
              text-[64px]
              tracking-[-2px]
              text-[#272727]
            "
          >
            Etapas da Jornada do Grão
          </h2>
        </div>
        <div className="relative h-full flex items-center">
          {/* linha */}
          <div
            className="
              absolute
              left-1/2
              top-[400px]
              -translate-x-1/2
              -translate-y-1/2
              h-[600px]
              w-[2px]
              bg-[#D9E3DE]
            "
          />
          {/* bolinhas */}
          <div
            className="
              absolute
              left-1/2
              top-[400px]
              -translate-x-1/2
              -translate-y-1/2
              h-[600px]
              flex
              flex-col
              justify-between
            "
          >
            {steps.map((_, index) => (
              <div
                key={index}
                className="
                  w-5
                  h-5
                  rounded-full
                  bg-[#015642]
                "
              />
            ))}
          </div>
          {/* cards */}
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`
                  step-card
                  absolute
                  w-[90%]
                  max-w-[520px]
                  left-1/2
                  -translate-x-1/2
                  md:translate-x-0
                  ${
                    index % 2 === 0
                      ? "md:left-0"
                      : "md:left-auto md:right-0"
                  }
                `}
              >
                {/* número gigante */}
                <div
                  className="
                    absolute
                    -top-32
                    text-[180px]
                    font-medium
                    text-[#017459]
                    leading-none
                    right-0
                    mx-10
                  "
                >
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div
                  className="
                    bg-white
                    rounded-[32px]
                    p-12
                    border
                    border-[#E8EEEA]
                    shadow-[0_15px_50px_rgba(0,0,0,.04)]
                  "
                >
                  <span
                    className="
                      text-[#017459]
                      uppercase
                      tracking-[4px]
                      text-sm
                    "
                  >
                    Etapa {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3
                    className="
                      mt-5
                      text-[42px]
                      leading-[1.1]
                      text-[#272727]
                    "
                  >
                    {step.title}
                  </h3>
                  <p
                    className="
                      mt-8
                      text-[26px]
                      leading-[190%]
                      text-[#555]
                    "
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-14 relative pb-16 mr-6">
        {/* Linha */}
        <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#D9E3DE]" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="mobile-step relative pl-14 mb-10"
          >
            {/* Bolinha */}
            <div
              className="
                absolute
                left-[6px]
                top-8
                w-6
                h-6
                rounded-full
                bg-[#015642]
                border-[5px]
                border-white
                shadow-md
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#E7ECE9]
                bg-white
                px-7
                py-8
                shadow-[0_15px_40px_rgba(0,0,0,.05)]
              "
            >
              {/* Número */}
              <span
                className="
                  absolute
                  -top-2
                  right-5
                  text-[72px]
                  font-medium
                  text-[#017459]/10
                  select-none
                "
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <span
                className="
                  uppercase
                  tracking-[4px]
                  text-[11px]
                  text-[#017459]
                "
              >
                Etapa {(index + 1).toString().padStart(2, "0")}
              </span>

              <h3
                className="
                  mt-4
                  text-[28px]
                  leading-tight
                  text-[#272727]
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-5
                  text-[16px]
                  leading-8
                  text-[#666]
                "
              >
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}