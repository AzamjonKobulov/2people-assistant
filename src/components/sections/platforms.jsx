function Platforms() {
  return (
    <section id="platforms" className="w-container mt-30 xl:mt-40">
      <div className="mb-8 xs:mb-10 md:mb-12 xl:mb-15">
        <h2>Возможности платформы</h2>
      </div>
      <div className="lg:grid grid-cols-2 gap-8 xl:gap-10 space-y-7 lg:space-y-0">
        <div className="flex flex-col justify-between bg-brand-gray-200 rounded-3xl py-5 xs:p-6 xl:p-8">
          <div className="px-5">
            <h3>Готовые интеграции и API</h3>
            <p className="text-brand-gray-800 text-sm xs:text-base xl:text-xl mt-3 md:mt-4 lg:mt-6">
              Легко интегрируйте ИИ-ассистентов в любые мессенджеры, сервисы и
              платформы, в которых вы осуществляете коммуникацию
            </p>
          </div>

          <div className="mt-5">
            <img
              src="../../../images/brands-mobile.png"
              className="xs:hidden w-full"
            />

            <img
              src="../../../svgs/brands-md.svg"
              srcSet="
                ../../../svgs/brands-md.svg 768w,
                ../../../svgs/brands-lg.svg 1024w,
                ../../../svgs/brands-xl.svg 1280w,
                ../../../svgs/brands-desktop.svg 1440w
    "
              sizes="
                (min-width: 769px) and (max-width: 1024px) 768px,
                (min-width: 1025px) and (max-width: 1280px) 1024px,
                (min-width: 1281px) and (max-width: 1440px) 1280px,
                1440px
    "
              alt="Brands"
              className="w-full hidden xs:block"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between bg-brand-gray-200 rounded-3xl p-5 xs:p-6 xl:p-8">
          <div>
            <h3>Инструменты аналитики</h3>
            <p className="text-brand-gray-800 text-sm xs:text-base xl:text-xl mt-3 md:mt-4 lg:mt-6">
              Моментально получайте данные о производительности ваших
              ИИ-ассистентов и диалогах, которые они осуществляют
            </p>
          </div>
          <div className="bg-white shadow-soft rounded-2xl mt-4 md:mt-5 lg:mt-6 xl:mt-8 p-5">
            <img className="w-full" src="./svgs/chart.svg" alt="Image" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-between bg-brand-gray-200 rounded-3xl py-5 xs:p-6 xl:p-8">
          <div className="lg:text-center px-5">
            <h3>Интерфейс как в ChatGPT</h3>
            <p className="text-brand-gray-800 text-sm xs:text-base xl:text-xl mt-3 md:mt-4 lg:mt-6">
              Используйте простой и знакомый веб-интерфейс и настраивайте его
              индивидуально для вашей компании
            </p>
          </div>
          <div className="mt-4 md:mt-5 xl:mt-6 px-2 xs:px-5">
            <img
              src="../../../images/chart-mobile.png"
              className="xs:hidden w-full"
            />

            <img
              src="../../../svgs/chart-md.svg"
              srcSet="
                ../../../svgs/chart-md.svg 768w,
                ../../../svgs/chart-lg.svg 1024w,
                ../../../svgs/chart-xl.svg 1280w,
                ../../../svgs/chart-desktop.svg 1440w
    "
              sizes="
                (min-width: 769px) and (max-width: 1024px) 768px,
                (min-width: 1025px) and (max-width: 1280px) 1024px,
                (min-width: 1281px) and (max-width: 1440px) 1280px,
                1440px
    "
              alt="Brands"
              className="w-full hidden xs:block"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between bg-brand-gray-200 rounded-3xl p-5 xs:p-6 xl:p-8">
          <div>
            <h3>Управление знаниями ИИ-ассистентов</h3>
            <p className="text-brand-gray-800 text-sm xs:text-base xl:text-xl mt-3 md:mt-4 lg:mt-6">
              Передавайте ИИ-ассистентам актуальные знания различными способами:
              документы, веб-сайт, интеграции с сервисами и базами знаний и
              данных, а также ручной ввод информации в интерфейсе платформы
            </p>
          </div>

          <img
            src="../../../svgs/delivery-time-moscow.svg"
            alt="Image"
            className="hidden xs:block mt-5 lg:mt-8"
          />

          <img
            src="../../../images/delivery-time-moscow-mobile.png"
            alt="Image"
            className="xs:hidden mt-5 lg:mt-8"
          />
        </div>

        <div className="flex flex-col justify-between bg-brand-gray-200 rounded-3xl p-5 xs:p-6 xl:p-8 !pb-0">
          <div>
            <h3>Инструменты настройки и тестирования</h3>
            <p className="text-brand-gray-800 text-sm xs:text-base xl:text-xl mt-3 md:mt-4 lg:mt-6">
              Настраивайте и тестируйте новых ИИ-ассистентов перед их
              публикацией для внешних пользователей
            </p>
          </div>
          <div className="mt-4 md:mt-5 xl:mt-6">
            {/* Desktop */}
            <img
              className="w-full hidden xs:block"
              src="./svgs/chatbot-with-user.svg"
              alt="Image"
            />

            {/* Mobile */}
            <img
              className="w-full xs:hidden"
              src="./images/chatbot-with-user.png"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platforms;
