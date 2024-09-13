export default function Footer() {
  return (
    <footer className="border-t border-brand-gray-400 mt-30 xl:mt-40">
      <div className="w-container pt-10 xs:pt-12 md:pt-14 lg:pt-20">
        <div className="flex flex-col xs:flex-row md:items-center lg:items-start justify-between gap-x-5 lg:gap-x-20 xl:gap-x-[166px] gap-y-8">
          <div className="w-full flex flex-col lg:flex-row justify-between gap-x-5 gap-y-8">
            <div>
              <a href="#">
                <img src="./svgs/logo.svg" alt="Image" />{" "}
                {/* Add closing slash here */}
              </a>
              <p className="text-brand-gray-900 mt-6">
                Разработано в{" "}
                <a
                  href="https://2people.io"
                  target="_blank"
                  className="text-primary/80"
                >
                  2PEOPLE IT{" "}
                </a>
              </p>
            </div>
            <div>
              <h5 className="font-bold text-brand-gray-800">О платформе</h5>
              <div className="w-full flex flex-row md:flex-col justify-between gap-6 md:gap-3 mt-3">
                <div className="space-y-3">
                  <a
                    href="#optimize"
                    className="block text-brand-gray-800 transition duration-300 hover:text-primary"
                  >
                    Применение
                  </a>
                  <a
                    href="#opportunities"
                    className="block text-brand-gray-800 transition duration-300 hover:text-primary"
                  >
                    ИИ-ассистенты
                  </a>
                  <a
                    href="#platforms"
                    className="block text-brand-gray-800 transition duration-300 hover:text-primary"
                  >
                    Возможности
                  </a>
                </div>

                <div className="space-y-3">
                  <a
                    href="#tariffs"
                    className="block text-brand-gray-800 transition duration-300 hover:text-primary"
                  >
                    Тарифы
                  </a>
                  <a
                    href="#questions"
                    className="block text-brand-gray-800 transition duration-300 hover:text-primary"
                  >
                    Демо
                  </a>
                  <a
                    href="https://assistant-docs.2people.io"
                    target="_blank"
                    className="block text-brand-gray-800 transition duration-300 hover:text-primary"
                  >
                    Документация
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between gap-x-5 gap-y-8">
            <div className="text-brand-gray-800">
              <h5 className=" font-bold">Контакты</h5>
              <div className="whitespace-nowrap space-y-3 mt-3">
                <p>
                  Email
                  <a
                    href="mailto:hi@2people.io"
                    target="_blank"
                    className="text-primary pl-2"
                  >
                    hi@2people.io
                  </a>
                </p>
                <p>
                  Telegram
                  <a
                    href="https://t.me/two_people_it"
                    target="_blank"
                    className="text-primary pl-2"
                  >
                    @two_people_it
                  </a>
                </p>
              </div>
              <a
                href="#contact
              "
                className="inline-block primary-btn text-primary hover:bg-primary hover:text-white font-bold mt-6"
              >
                Оставить заявку
              </a>
            </div>

            <div className="xs:order-first lg:order-none">
              <h5 className="md:hidden lg:block font-bold text-brand-gray-800">
                Следите за нами
              </h5>
              <div className="flex md:hidden lg:flex gap-6 mt-3">
                <a href="https://instagram.com/2people.it" target="_blank">
                  <img
                    className="w-10 h-10"
                    src="./svgs/dark-instagram.svg"
                    alt="Image"
                  />{" "}
                  {/* Add closing slash here */}
                </a>
                <a href="https://t.me/twopeopleit" target="_blank">
                  <img
                    className="w-10 h-10"
                    src="./svgs/dark-telegram.svg"
                    alt="Image"
                  />{" "}
                  {/* Add closing slash here */}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="lg:w-full flex flex-wrap justify-between gap-5 text-brand-gray-800 mt-8 pb-5 xs:pb-8 md:pb-5 lg:pb-15 xl:pb-20">
            <p className="hidden lg:block">2PEOPLE ASSISTANT © 2024</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="https://drive.google.com/file/d/19oGAEhtDCOTReH2ePCW6qm9bo7zYvj_j/view"
                target="_blank"
                className="md:block"
              >
                Пользовательское соглашение
              </a>
              <a
                href="https://drive.google.com/file/d/1EWgMHt_iZoaAIYvJNKCyetdGGfsJb1w4/view"
                target="_blank"
              >
                Политика конфиденциальности
              </a>
            </div>
            <p className="xs:block lg:hidden text-secondary">
              2PEOPLE ASSISTANT © 2024
            </p>
          </div>
          <div className="flex flex-col items-end">
            <h5 className="hidden md:block lg:hidden font-bold text-brand-gray-800 whitespace-nowrap">
              Следите за нами
            </h5>
            <div className="flex hidden md:flex lg:hidden gap-6 mt-3">
              <a href="#">
                <img
                  className="w-10 h-10"
                  src="./svgs/dark-instagram.svg"
                  alt="Image"
                />{" "}
                {/* Add closing slash here */}
              </a>
              <a href="#">
                <img
                  className="w-10 h-10"
                  src="./svgs/dark-telegram.svg"
                  alt="Image"
                />{" "}
                {/* Add closing slash here */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
