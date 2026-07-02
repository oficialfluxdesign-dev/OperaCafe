export default function FormContato() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white">
      <div className="max-w-[1700px] mx-auto px-5 sm:px-10 lg:px-20">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24">

          {/* ESQUERDA */}
          <div>

            <span
              className="
                uppercase
                tracking-[4px]
                text-[#015642]
                text-xs
                sm:text-sm
              "
            >
              Entre em contato
            </span>

            <h2
              className="
                mt-5
                text-[#272727]
                text-[36px]
                sm:text-[52px]
                lg:text-[72px]
                leading-[1]
                tracking-[-1px]
                lg:tracking-[-3px]
              "
            >
              Estamos prontos
              <br />
              para ouvir você.
            </h2>

            <p
              className="
                mt-6
                lg:mt-8
                text-[#666]
                text-[16px]
                sm:text-[18px]
                lg:text-[20px]
                leading-[180%]
                max-w-[620px]
              "
            >
              Seja para reservas, eventos, dúvidas ou parcerias,
              nossa equipe está disponível para ajudar.
              <br className="hidden md:block" />
              Envie uma mensagem pelo formulário ou utilize um dos canais abaixo.
            </p>

            <div className="mt-12 lg:mt-16 border-t border-[#E5E5E1] pt-10 lg:pt-12 space-y-8">

              <div>
                <span
                  className="
                    uppercase
                    tracking-[3px]
                    text-[#015642]
                    text-xs
                    sm:text-sm
                  "
                >
                  Telefone
                </span>

                <p
                  className="
                    mt-2
                    text-[#272727]
                    text-[22px]
                    sm:text-[26px]
                    lg:text-[32px]
                  "
                >
                  (62) 99999-9999
                </p>
              </div>

              <div>
                <span
                  className="
                    uppercase
                    tracking-[3px]
                    text-[#015642]
                    text-xs
                    sm:text-sm
                  "
                >
                  E-mail
                </span>

                <p
                  className="
                    mt-2
                    text-[#272727]
                    text-[20px]
                    sm:text-[24px]
                    lg:text-[30px]
                    break-all
                  "
                >
                  contato@operacafe.com.br
                </p>
              </div>

              <div>
                <span
                  className="
                    uppercase
                    tracking-[3px]
                    text-[#015642]
                    text-xs
                    sm:text-sm
                  "
                >
                  Endereço
                </span>

                <p
                  className="
                    mt-2
                    text-[#272727]
                    text-[22px]
                    sm:text-[26px]
                    lg:text-[32px]
                  "
                >
                  Goiânia • Goiás
                </p>
              </div>

              <div>
                <span
                  className="
                    uppercase
                    tracking-[3px]
                    text-[#015642]
                    text-xs
                    sm:text-sm
                  "
                >
                  Horário
                </span>

                <p
                  className="
                    mt-2
                    text-[#272727]
                    text-[22px]
                    sm:text-[26px]
                    lg:text-[32px]
                  "
                >
                  Todos os dias
                </p>
              </div>

            </div>

          </div>

          {/* DIREITA */}
          <div
            className="
              bg-white
              border
              border-[#E7E7E3]
              rounded-[24px]
              lg:rounded-[36px]
              p-6
              sm:p-8
              lg:p-14
            "
          >

            <div className="mb-8 lg:mb-12">

              <h3
                className="
                  text-[#272727]
                  text-[30px]
                  sm:text-[38px]
                  lg:text-[46px]
                  leading-[1.1]
                  tracking-[-1px]
                "
              >
                Envie uma mensagem
              </h3>

              <p
                className="
                  mt-4
                  text-[#666]
                  text-[15px]
                  sm:text-[16px]
                  leading-[180%]
                "
              >
                Responderemos o mais breve possível.
              </p>

            </div>

            <form className="space-y-6">

              <div>
                <label className="block mb-3 text-[#272727]">
                  Nome
                </label>

                <input
                  type="text"
                  placeholder="Seu nome"
                  className="
                    w-full
                    h-14
                    lg:h-16
                    px-6
                    rounded-2xl
                    border
                    border-[#E5E5E1]
                    outline-none
                    focus:border-[#015642]
                    duration-300
                  "
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-3 text-[#272727]">
                    E-mail
                  </label>

                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="
                      w-full
                      h-14
                      lg:h-16
                      px-6
                      rounded-2xl
                      border
                      border-[#E5E5E1]
                      outline-none
                      focus:border-[#015642]
                      duration-300
                    "
                  />
                </div>

                <div>
                  <label className="block mb-3 text-[#272727]">
                    Telefone
                  </label>

                  <input
                    type="text"
                    placeholder="(62) 99999-9999"
                    className="
                      w-full
                      h-14
                      lg:h-16
                      px-6
                      rounded-2xl
                      border
                      border-[#E5E5E1]
                      outline-none
                      focus:border-[#015642]
                      duration-300
                    "
                  />
                </div>

              </div>

              <div>
                <label className="block mb-3 text-[#272727]">
                  Assunto
                </label>

                <input
                  type="text"
                  placeholder="Como podemos ajudar?"
                  className="
                    w-full
                    h-14
                    lg:h-16
                    px-6
                    rounded-2xl
                    border
                    border-[#E5E5E1]
                    outline-none
                    focus:border-[#015642]
                    duration-300
                  "
                />
              </div>

              <div>
                <label className="block mb-3 text-[#272727]">
                  Mensagem
                </label>

                <textarea
                  rows={6}
                  placeholder="Escreva sua mensagem..."
                  className="
                    w-full
                    px-6
                    py-5
                    rounded-2xl
                    border
                    border-[#E5E5E1]
                    outline-none
                    resize-none
                    focus:border-[#015642]
                    duration-300
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  sm:w-auto
                  px-8
                  lg:px-10
                  py-4
                  lg:py-5
                  rounded-full
                  bg-[#015642]
                  border-2
                  border-[#017459]
                  hover:bg-[#017459]
                  transition
                  text-white
                  font-medium
                  cursor-pointer
                "
              >
                Enviar Mensagem
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}