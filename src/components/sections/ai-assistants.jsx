export default function AIAssistants() {
  return (
    <section className="w-container mt-30 xl:mt-40">
      <div className="mb-8 xs:mb-10 md:mb-12 xl:mb-15">
        <h2 className="text-brand-gray-900">
          ИИ-ассистенты: чем они лучше обычных чат-ботов?
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 xs:gap-6 lg:gap-15 xl:gap-[100px] items-center justify-between">
        <div className="xl:max-w-base-1 bg-brand-gray-200 rounded-3xl pl-2 pr-5 py-5 xs:py-15 lg:py-24 xl:py-20">
          <img
            className="hidden xs:block aspect-4/3 xs:my-1 mx-auto"
            src="./svgs/chat-last.svg"
            alt="Image"
          />
          <img
            className="block xs:hidden w-full object-cover"
            src="./images/chat-lastmobile.png"
            alt="Image"
          />
        </div>

        <div>
          <h3>Естественное общение</h3>
          <p className="text-brand-gray-800 text-sm xs:text-base xl:text-xl mt-3 md:mt-4 lg:mt-6">
            Забудьте о шаблонных и неэффективных ответах. ИИ-ассистент
            составляет уникальные, естественные сообщения с учетом контекста
            диалога, индивидуальных настроек и знаний компании, делая общение
            практически неотличимым от человеческого.
          </p>
        </div>

        <div className="pt-4 xs:pt-6 sm:pt-4 lg:pt-0">
          <div className="xl:max-w-base-1 space-y-5 relative bg-brand-gray-200 rounded-3xl pl-4 pr-1 xs:px-0 py-5 xs:py-15 lg:py-24 xl:py-20">
            {/* File Uploader Images */}

            {/* Mobile Image */}
            <img
              src="../../../images/upload-file-mobile.png"
              alt="Uload"
              className="w-full xs:hidden"
            />

            {/* Desktop Image */}
            <img
              src="../../../svgs/upload-file.svg"
              alt="Uload"
              className="w-full hidden xs:block"
            />
          </div>
        </div>

        <div>
          <h3>Простая настройка и поддержка</h3>
          <p className="text-brand-gray-800 text-sm xs:text-base xl:text-xl mt-3 md:mt-4 lg:mt-6">
            Вам не нужно прописывать каждый сценарий диалога и каждый возможный
            вопрос-ответ.
            <br />
            <br />
            Передайте ваши знания платформе в виде файлов, текста, ссылки на
            веб-сайт или интеграции с сервисами. ИИ-ассистент самостоятельно
            обучится за 1 минуту и будет готов к работе.
          </p>
        </div>
      </div>
    </section>
  );
}
