import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function SecaoCardapio({
  title,
  products,
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id={title}
      className="mb-32"
    >
      {/* topo */}
      <div className="flex justify-between items-center mb-10">

        <h2
          className="
            text-[42px]
            text-[#272727]
            tracking-[-1px]
          "
        >
          {title}
        </h2>

        <div className="flex gap-3">

          <button
            ref={prevRef}
            className="
              w-11
              h-11
              rounded-full
              border
              border-[#E6E6E2]
              flex
              items-center
              justify-center
              transition
              duration-300
              hover:bg-[#015642]
              hover:text-white
            "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            ref={nextRef}
            className="
              w-11
              h-11
              rounded-full
              border
              border-[#E6E6E2]
              flex
              items-center
              justify-center
              transition
              duration-300
              hover:bg-[#015642]
              hover:text-white
            "
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 5,
          },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <div>

              {/* imagem */}
              <div className="overflow-hidden rounded-xl bg-[#E9EEEB]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* infos */}
              <h3 className="mt-5 text-[20px] text-[#272727]">
                {item.name}
              </h3>

              <h1 className="mt-2 text-[18px] text-[#017459]">
                R$ {item.price}
              </h1>

              <p
                className="
                  mt-3
                  text-[15px]
                  leading-[180%]
                  text-[#666]
                  line-clamp-2
                "
              >
                {item.description}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}