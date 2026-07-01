import { motion } from "framer-motion";

import Imagem1 from "../assets/Imagem1.png";
import Imagem2 from "../assets/Imagem2.png";
import Imagem3 from "../assets/Imagem3.png";
import Imagem4 from "../assets/Imagem4.png";
import Imagem5 from "../assets/Imagem5.png";
import Imagem6 from "../assets/Imagem6.png";
import Imagem7 from "../assets/Imagem7.png";
import Imagem8 from "../assets/Imagem8.png";
import Imagem9 from "../assets/Imagem9.png";
import Imagem10 from "../assets/Imagem10.png";
import Imagem11 from "../assets/Imagem11.png";
import Imagem12 from "../assets/Imagem12.png";
import Imagem13 from "../assets/Imagem13.png";
import Imagem14 from "../assets/Imagem14.png";
import Imagem15 from "../assets/Imagem15.png";

const columns = [
  [Imagem1, Imagem2, Imagem3],
  [Imagem4, Imagem5, Imagem6, Imagem7],
  [Imagem8, Imagem9, Imagem10],
  [Imagem11, Imagem12, Imagem13, Imagem14],
  [Imagem15, Imagem1, Imagem2],
];

const mobileImages = columns.flat();

export default function Galeria() {
  return (
    <section className="py-10 lg:py-28 bg-white">
      <div className="max-w-[1700px] mx-auto px-5 md:px-20">

        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-4">
          {mobileImages.slice(0, 5).map((img, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className={`relative overflow-hidden rounded-[12px] group ${
                index === 0 || index === 3 ? "h-[340px]" : "h-[240px]"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
            </motion.div>
          ))}
        </div>

        {/* DESKTOP - EXATAMENTE O MESMO */}
        <div className="hidden md:grid grid-cols-3 xl:grid-cols-5 gap-5">

          {columns.map((column, colIndex) => {
            const isBig = colIndex % 2 === 0;

            return (
              <div
                key={colIndex}
                className={`
                  flex flex-col gap-5
                  ${isBig ? "pt-0" : "pt-10"}
                `}
              >
                {column.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 80,
                      scale: 0.92,
                      filter: "blur(10px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: colIndex * 0.08 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className={`
                      relative
                      overflow-hidden
                      rounded-[10px]
                      cursor-pointer
                      group
                      ${
                        isBig
                          ? "h-[440px]"
                          : "h-[340px]"
                      }
                    `}
                  >
                    <img
                      src={img}
                      alt=""
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/0
                        group-hover:bg-black/10
                        transition
                        duration-500
                      "
                    />
                  </motion.div>
                ))}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}