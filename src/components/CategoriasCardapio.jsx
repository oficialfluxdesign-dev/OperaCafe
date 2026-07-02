import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CategoriasCardapio({ sections }) {
  const menuRef = useRef(null);
  const scrollRef = useRef(null);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#cardapio-section",
      start: "top top",
      endTrigger: "#cardapio-end",
      end: "bottom bottom",

      onEnter: () => setVisible(true),
      onEnterBack: () => setVisible(true),
      onLeave: () => setVisible(false),
      onLeaveBack: () => setVisible(false),
    });

    return () => trigger.kill();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 120;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      ref={menuRef}
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.94,
      }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 80,
        scale: visible ? 1 : 0.94,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        hidden
        lg:block
        fixed
        left-1/2
        -translate-x-1/2
        bottom-4
        z-50
        w-[95%]
        max-w-[1700px]
        
      "
      style={{
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="flex items-center gap-2">

        {/* esquerda */}

        <button
          onClick={scrollLeft}
          className="
            p-5
            shrink-0
            rounded-xl
            bg-[#015642]
            border-[3px]
            border-[#017459]
            text-white
            flex
            items-center
            justify-center
            hover:bg-[#017459]
            duration-300
          "
        >
          <ChevronLeft size={20} />
        </button>

        {/* categorias */}

        <div
          ref={scrollRef}
          className="
            flex-1
            flex
            gap-2
            p-2
            rounded-2xl
            bg-[#015642]/95
            border-[3px]
            border-[#017459]
            backdrop-blur-xl
            overflow-x-scroll
            overflow-y-hidden
            whitespace-nowrap
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {sections.map((item) => (
            <button
              key={item.title}
              onClick={() => scrollToSection(item.title)}
              className="
                shrink-0
                h-11
                px-6
                rounded-lg
                text-white
                hover:bg-[#017459]
                transition-all
                duration-300
              "
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* direita */}

        <button
          onClick={scrollRight}
          className="
            p-5
            shrink-0
            rounded-xl
            bg-[#015642]
            border-[3px]
            border-[#017459]
            text-white
            flex
            items-center
            justify-center
            hover:bg-[#017459]
            duration-300
          "
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </motion.div>
  );
}