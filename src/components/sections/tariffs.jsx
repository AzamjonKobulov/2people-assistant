export default function Tariffs() {
  return (
    <section id="tariffs" className="w-container mt-30 xl:mt-40">
      <div className="mb-8 xs:mb-10 md:mb-12 xl:mb-15">
        <h2>Тарифы</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 md:gap-8">
        <div className="border border-brand-gray-400 rounded-5 xs:rounded-3xl p-3 xs:p-4">
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-t to-100% to-brand-gray-100 from-white rounded-2xl p-3 xs:p-4">
            <div>
              <h3 className="text-brand-gray-900">Облачная версия (SaaS)</h3>
              <p className="text-sm xs:text-base text-brand-gray-800 mt-5 lg:mt-6">
                Платформа находится в нашем облаке
                <span className="block mt-4">
                  Оплата за каждое сообщение, обработанное ИИ-ассистентом, и за
                  размер знаний
                </span>
              </p>
              <p className="text-brand-gray-900 mt-4">Дополнительные услуги:</p>
              <ul className="mt-1 space-y-1">
                <li className="flex items-center gap-x-2">
                  <svg
                    className="shrink-0"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.13137 6.47439C0.506532 5.84955 0.506532 4.83649 1.13137 4.21165L4.52548 0.817534C5.15032 0.192695 6.16339 0.192695 6.78823 0.817534L10.1823 4.21165C10.8072 4.83649 10.8072 5.84955 10.1823 6.47439L6.78822 9.8685C6.16339 10.4933 5.15032 10.4933 4.52548 9.8685L1.13137 6.47439Z"
                      fill="#356FEC"
                    />
                  </svg>
                  <p className="text-brand-gray-900">
                    Индивидуальные доработки и интеграции
                  </p>
                </li>
              </ul>
            </div>
            <a
              href="#contact"
              className="w-max primary-btn bg-primary text-white hover:bg-primary/80 mt-4 md:mt-5 lg:mt-6"
            >
              Запросить тарифы
            </a>
          </div>
        </div>
        <div className="border border-brand-gray-400 rounded-5 xs:rounded-3xl p-3 xs:p-4">
          <div className="w-full h-full flex flex-col justify-between bg-gradient-to-b to-100% from-[#f43fff]/5 to-white rounded-2xl p-3 xs:p-4">
            <div>
              <h3 className="text-brand-gray-900">
                Коробочная версия (on-premise)
              </h3>
              <p className="text-sm xs:text-base text-brand-gray-800 mt-5 lg:mt-6">
                Платформа размещается в контуре клиента.
                <span className="block mt-4">
                  Фиксированный платеж за использование платформы (от 6
                  месяцев).
                </span>
              </p>
              <p className="text-brand-gray-900 mt-4">Дополнительные услуги:</p>
              <ul className="mt-1 space-y-1">
                <li className="flex items-center gap-x-2">
                  <svg
                    className="shrink-0"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.13137 6.47439C0.506532 5.84955 0.506532 4.83649 1.13137 4.21165L4.52548 0.817534C5.15032 0.192695 6.16339 0.192695 6.78823 0.817534L10.1823 4.21165C10.8072 4.83649 10.8072 5.84955 10.1823 6.47439L6.78822 9.8685C6.16339 10.4933 5.15032 10.4933 4.52548 9.8685L1.13137 6.47439Z"
                      fill="#356FEC"
                    />
                  </svg>
                  <p className="text-brand-gray-900">Внедрение</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <svg
                    className="shrink-0"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.13137 6.47439C0.506532 5.84955 0.506532 4.83649 1.13137 4.21165L4.52548 0.817534C5.15032 0.192695 6.16339 0.192695 6.78823 0.817534L10.1823 4.21165C10.8072 4.83649 10.8072 5.84955 10.1823 6.47439L6.78822 9.8685C6.16339 10.4933 5.15032 10.4933 4.52548 9.8685L1.13137 6.47439Z"
                      fill="#356FEC"
                    />
                  </svg>
                  <p className="text-brand-gray-900">Поддержка</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <svg
                    className="shrink-0"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.13137 6.47439C0.506532 5.84955 0.506532 4.83649 1.13137 4.21165L4.52548 0.817534C5.15032 0.192695 6.16339 0.192695 6.78823 0.817534L10.1823 4.21165C10.8072 4.83649 10.8072 5.84955 10.1823 6.47439L6.78822 9.8685C6.16339 10.4933 5.15032 10.4933 4.52548 9.8685L1.13137 6.47439Z"
                      fill="#356FEC"
                    />
                  </svg>
                  <p className="text-brand-gray-900">
                    Индивидуальные доработки и интеграции
                  </p>
                </li>
              </ul>
            </div>
            <a
              href="#contact"
              className="w-max primary-btn bg-primary text-white hover:bg-primary/80 mt-4 md:mt-5 lg:mt-6"
            >
              Запросить тарифы
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 border border-brand-gray-400 rounded-5 xs:rounded-3xl p-6 xs:p-8">
          <div className="lg:flex flex-wrap items-center justify-between">
            <h3 className="text-brand-gray-900">Бесплатная пробная версия</h3>
            <p className="block lg:hidden w-full text-brand-gray-800 mt-5">
              Один ИИ-ассистент в облачной версии, 1 000 сообщений в месяц,
              интеграция в Telegram-бота
            </p>
            <div className="mt-6">
              <a
                href="/cabinet"
                className="w-max primary-btn bg-primary text-white hover:bg-primary/80 mt-6 lg:mt-0"
              >
                Попробовать
              </a>
            </div>
          </div>
          <p className="hidden lg:block w-full text-brand-gray-800 mt-6">
            Один ИИ-ассистент в облачной версии, 1 000 сообщений в месяц,
            интеграция в Telegram-бота
          </p>
        </div>

        <div className="lg:col-span-2 bg-brand-gray-950 rounded-5 xs:rounded-3xl p-6 xs:p-8">
          <div className="lg:flex flex-wrap items-center justify-between">
            <h3 className="text-white">Разработка индивидуального решения</h3>
            <p className="block lg:hidden text-sm xs:text-base text-brand-gray-400 mt-5 lg:mt-6">
              Разработаем под ключ ИИ-ассистента на базе LLM/GPT под
              индивидуальные требования
              <span className="block mt-4"> </span>
              Реализовали более 100 проектов на заказ в
              <a
                href="https://2people.io"
                className="underline ml-1"
                target="_blank"
              >
                2people.io
              </a>
            </p>
            <a
              href="#contact"
              className="inline-block w-max primary-btn bg-white border-none text-brand-gray-900 hover:bg-white/80 mt-6 lg:mt-0"
            >
              Оценить разработку
            </a>
          </div>
          <p className="hidden lg:block text-sm xs:text-base text-brand-gray-400 mt-5 lg:mt-6">
            Разработаем под ключ ИИ-ассистента на базе LLM/GPT под
            индивидуальные требования
            <span className="block mt-4">
              Реализовали более 100 проектов на заказ в
              <a
                href="https://2people.io"
                className="underline ml-1"
                target="_blank"
              >
                2people.io
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
