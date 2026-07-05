import Ensaios from "../components/Ensaios"; 
import Essencia from "../components/Essencia"; 
import Footer from "../components/Footer"; 
import Galeria from "../components/Galeria"; 
import Header from "../components/Header"; 
import Hero from "../components/Hero"; 
import SobreNos from "../components/SobreNos"; 
import TextoScroll from "../components/TextoScroll"; 
import TopBlur from "../components/TopBlur"; 
import Torrefacao from "../components/Torrefacao";

export default function Home() {
  return (
    <>
      <div className="relative z-10 bg-white">
        <TopBlur />
        <Header />
        <Hero />
        <Galeria />
        <TextoScroll />
        <SobreNos />
        <Torrefacao />
        <Essencia />
        <Ensaios />
      </div>

      <Footer />
    </>
  );
}