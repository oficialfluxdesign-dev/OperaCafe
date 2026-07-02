import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../components/Header";
import HeroSobre from "../components/HeroSobre";
import TopBlur from "../components/TopBlur";
import ImagemTorrefacao from "../assets/ImagemTorrefacao.png";
import ImagemCafe from "../assets/ImagemTorrefacao.png";
import IconeXicara from "../assets/IconeXicara.png";
import JornadaGrao from "../components/JornadaGrao";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);


export default function Sobre() {
  const aboutRef = useRef(null);

  const aboutData = [
    {
      number: "01",
      tag: "Desde 2018",
      title: "Uma história construída com paixão pelo café",
      desc: "Nascido em 2018, o Opera Café Bistrô é a materialização de um sonho que ganhou vida em um casarão histórico no coração de Goiânia.",
      image: ImagemCafe,
    },
    {
      number: "02",
      tag: "Experiência",
      title: "Ambientes que convidam a permanecer",
      desc: "Cada detalhe foi pensado para unir arquitetura, gastronomia e hospitalidade, criando uma atmosfera acolhedora e inspiradora.",
      image: ImagemCafe,
    },
    {
      number: "03",
      tag: "Essência",
      title: "Mais do que café, momentos memoráveis",
      desc: "Buscamos transformar cada visita em uma experiência marcada por sabor, cultura e encontros especiais.",
      image: ImagemCafe,
    },
  ];

  useEffect(() => {

    const ctx = gsap.context(() => {
  
      gsap.utils.toArray(".about-card").forEach((card) => {
  
        gsap.from(card, {
          opacity: 0,
          y: 120,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
  
      });
  
      gsap.utils.toArray(".about-image").forEach((image) => {
  
        gsap.fromTo(
          image,
          {
            scale: 1.15,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
  
      });
  
    });
  
    return () => ctx.revert();
  
  }, []);

  return (
    <>
      <section className="relative z-10 bg-white">
        <TopBlur />
        <Header />
        <HeroSobre />
  
        {/* SOBRE */}
        <section className="py-40 overflow-hidden">
          <div className="max-w-[1700px] mx-auto px-6 md:px-[50px]">
  
            {/* topo */}
            <div className="grid lg:grid-cols-[1fr_1fr] gap-24">
  
              <div>
                <span className="uppercase tracking-[4px] text-sm text-[#015642]">
                  Nossa história
                </span>
  
                <h1
                  className="
                    mt-6
                    text-[72px]
                    leading-none
                    tracking-[-3px]
                    text-[#272727]
                  "
                >
                  Sobre nós
                </h1>
              </div>
  
              <div className="max-w-[900px]">
  
                <p className="text-[30px] leading-[170%] text-[#3D3D3D]">
                  Desde 2018, o Opera Café Bistrô nasceu do desejo de criar mais do
                  que uma cafeteria. Em um casarão histórico no coração de Goiânia,
                  construímos um espaço onde café, gastronomia e cultura se
                  encontram para proporcionar experiências memoráveis.
                </p>
  
                <p className="mt-12 text-[20px] leading-[200%] text-[#666] max-w-[820px]">
                  Cada detalhe foi pensado para convidar as pessoas a
                  desacelerarem, apreciarem bons momentos e compartilharem
                  histórias. Da arquitetura acolhedora ao cuidado no atendimento,
                  buscamos transformar uma simples pausa para o café em algo
                  especial.
                </p>
  
                <p className="mt-8 text-[20px] leading-[200%] text-[#666] max-w-[820px]">
                  Ao longo dos anos, o Opera se tornou um ponto de encontro para
                  quem valoriza qualidade, conforto e autenticidade. Mais do que
                  servir bebidas e pratos, cultivamos uma atmosfera que celebra
                  encontros, conversas e experiências que permanecem na memória.
                </p>
  
              </div>
  
            </div>
  
          </div>
        </section>
  
        {/* TORREFAÇÃO */}
        <section className="pb-32 px-6 md:px-[50px]">
  
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              max-w-[1700px]
              mx-auto
              overflow-hidden
              rounded-[6px]
            "
          >
            <div className="overflow-hidden">
              <motion.img
                src={ImagemTorrefacao}
                alt=""
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full h-[320px] md:h-[760px] object-cover"
              />
            </div>
  
            <div className="absolute inset-0 bg-black/10" />
  
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: .4,
                duration: .8,
              }}
              className="absolute bottom-8 left-8 md:bottom-12 md:left-12"
            >
              <img
                src={IconeXicara}
                alt=""
                className="w-12 md:w-16 object-contain"
              />
            </motion.div>
  
          </motion.div>
  
        </section>
  
        <JornadaGrao />
  
        {/* Manifesto */}
        <section className="py-16 lg:pb-20 lg:pt-0">
          <div className="max-w-[1700px] mx-auto text-center px-6 lg:px-20">

            <h2
              className="
                text-[34px]
                sm:text-[44px]
                lg:text-[72px]
                leading-[1.15]
                lg:leading-[1.05]
                tracking-[-1.5px]
                lg:tracking-[-3px]
                text-[#272727]
              "
            >
              Mais do que servir café,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              acreditamos em criar experiências.
            </h2>

            <p
              className="
                mt-8
                lg:mt-14
                text-[16px]
                sm:text-[18px]
                lg:text-[22px]
                leading-[180%]
                lg:leading-[190%]
                text-[#666]
                max-w-[820px]
                mx-auto
              "
            >
              Em um mundo cada vez mais acelerado, queremos ser um convite para
              desacelerar, apreciar os detalhes e transformar momentos simples em
              memórias especiais. Cada xícara, cada prato e cada conversa fazem
              parte dessa experiência que buscamos construir diariamente.
            </p>

            <div
              className="
                mt-10
                lg:mt-20
                uppercase
                tracking-[3px]
                lg:tracking-[6px]
                text-[#015642]
                text-[12px]
                lg:text-sm
              "
            >
              Opera Café Bistrô
            </div>

          </div>
        </section>
      </section>
  
      <Footer />
    </>
  );
}