import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function TextoScroll() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const [maxMove, setMaxMove] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const calculate = () => {
      if (!textRef.current) return;

      const textWidth = textRef.current.scrollWidth;
      const screenWidth = window.innerWidth;

      setMaxMove(-(textWidth - screenWidth + 100));
    };

    calculate();
    window.addEventListener("resize", calculate);

    return () => window.removeEventListener("resize", calculate);
  }, []);

  const x = useTransform(scrollYProgress, [0, 0.9], [0, maxMove]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        py-14
        md:py-20
        lg:py-24
        bg-white
        hidden
        lg:block
      "
    >
      <motion.h2
        ref={textRef}
        style={{ x }}
        className="
          whitespace-nowrap
          text-[84px]
          lg:text-[200px]
          font-light
          leading-none
          text-[#272727]
          md:px-140
        "
      >
        Mais que um Café: Um Encontro.
      </motion.h2>
    </section>
  );
}