import Header from "../components/Header";
import HeroCardapio from "../components/HeroCardapio";
import CategoriasCardapio from "../components/CategoriasCardapio";
import SecaoCardapio from "../components/SecaoCardapio";
import Footer from "../components/Footer";

import { cardapio } from "../data/cardapioData";

export default function Cardapio() {
  return (
    <>
      <div className="relative z-10 bg-white">
        <Header />

        <HeroCardapio />

        <section>
          <CategoriasCardapio sections={cardapio}/>

          <div className="max-w-[1700px] mx-auto p-5 lg:px-20 pt-20">
            {cardapio.map((section) => (
              <SecaoCardapio
                key={section.title}
                title={section.title}
                products={section.products}
              />
            ))}

            <div id="cardapio-end" className="h-px" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}