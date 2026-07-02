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
    <section id={title} className="mb-20 lg:mb-32">

      {/* Topo */}
      <div className="flex items-end justify-between gap-4 mb-6 lg:mb-10">

        <h2
          className="
            text-[30px]
            sm:text-[36px]
            lg:text-[42px]
            tracking-[-1px]
            leading-tight
            text-[#272727]
          "
        >
          {title}
        </h2>

        <div className="flex gap-2 shrink-0">

          <button
            ref={prevRef}
            className="
              w-10
              h-10
              lg:w-11
              lg:h-11
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
              w-10
              h-10
              lg:w-11
              lg:h-11
              rounded-full
              border
              border-[#E6E6E2]
              flex
              items-center
              justify-center
              transition
              duration-300
              hover:bg-[#015642]
              hover:text-white"
            >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.15}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1.4,
            spaceBetween: 18,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 28,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>

            <article>

              {/* Imagem */}
              <div className="overflow-hidden rounded-2xl bg-[#E9EEEB]">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    h-[190px]
                    sm:h-[220px]
                    lg:h-[250px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

              </div>

              {/* Conteúdo */}

              <h3
                className="
                  mt-4
                  text-[18px]
                  lg:text-[20px]
                  text-[#272727]
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  mt-2
                  text-[17px]
                  lg:text-[18px]
                  font-medium
                  text-[#017459]
                "
              >
                R$ {item.price}
              </p>

              <p
                className="
                  mt-3
                  text-[14px]
                  lg:text-[15px]
                  leading-7
                  text-[#666]
                  line-clamp-2
                "
              >
                {item.description}
              </p>

            </article>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}