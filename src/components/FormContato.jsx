export default function FormContato() {
    return (
      <section className="py-32 bg-white">
        <div className="max-w-[1700px] mx-auto ">
  
          <div className="grid lg:grid-cols-[1fr_1fr] gap-24">
  
            {/* ESQUERDA */}
            <div>
  
              <span
                className="
                  uppercase
                  tracking-[4px]
                  text-[#015642]
                  text-sm
                "
              >
                Entre em contato
              </span>
  
              <h2
                className="
                  mt-5
                  text-[64px]
                  leading-[1]
                  tracking-[-2px]
                  text-[#272727]
                "
              >
                Estamos prontos <br /> para ouvir você.
              </h2>
  
              <p
                className="
                  mt-8
                  text-[18px]
                  leading-[190%]
                  text-[#666]
                "
              >
                Seja para reservas, eventos, dúvidas ou parcerias,
                nossa equipe está disponível para ajudar. <br />
                Envie uma mensagem pelo formulário ou utilize
                um dos canais abaixo.
              </p>
  
              <div className="mt-16 border-t border-[#E5E5E1] pt-12">
  
                <div className="mb-10">
                  <span
                    className="
                      text-[#015642]
                      uppercase
                      tracking-[3px]
                      text-sm
                    "
                  >
                    Telefone
                  </span>
  
                  <p
                    className="
                      mt-3
                      text-[30px]
                      text-[#272727]
                    "
                  >
                    (62) 99999-9999
                  </p>
                </div>
  
                <div className="mb-10">
                  <span
                    className="
                      text-[#015642]
                      uppercase
                      tracking-[3px]
                      text-sm
                    "
                  >
                    E-mail
                  </span>
  
                  <p
                    className="
                      mt-3
                      text-[30px]
                      text-[#272727]
                      break-all
                    "
                  >
                    contato@operacafe.com.br
                  </p>
                </div>
  
                <div className="mb-10">
                  <span
                    className="
                      text-[#015642]
                      uppercase
                      tracking-[3px]
                      text-sm
                    "
                  >
                    Endereço
                  </span>
  
                  <p
                    className="
                      mt-3
                      text-[30px]
                      text-[#272727]
                    "
                  >
                    Goiânia • Goiás
                  </p>
                </div>
  
                <div>
                  <span
                    className="
                      text-[#015642]
                      uppercase
                      tracking-[3px]
                      text-sm
                    "
                  >
                    Horário
                  </span>
  
                  <p
                    className="
                      mt-3
                      text-[30px]
                      text-[#272727]
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
                rounded-[32px]
                p-8
                md:p-14
              "
            >
  
              <div className="mb-12">
  
                <h3
                  className="
                    text-[42px]
                    leading-[1.1]
                    tracking-[-1px]
                    text-[#272727]
                  "
                >
                  Envie uma mensagem
                </h3>
  
                <p
                  className="
                    mt-4
                    text-[#666]
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
                      h-16
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
                        h-16
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
                        h-16
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
                      h-16
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
                    mt-4
                    h-16
                    px-10
                    rounded-full
                    bg-[#015642]
                    border-3
                    border-[#017459]
                    text-white
                    hover:bg-[#017459]
                    duration-300
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