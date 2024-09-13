export default function Hero() {
  return (
    <section className="w-container lg:grid grid-cols-3 items-center gap-15 py-15 xs:py-17 md:py-10 xl:pt-30 xl:pb-24">
      <div className="col-span-2 w-full text-left md:text-center lg:text-left lg:pr-5 xl:pr-3">
        <h1 className="xs:uppercase text-brand-gray-900">
          ИИ-ассистенты для автоматизации вашего бизнеса
        </h1>
        <p className="xl:font-light text-brand-gray-800 lg:text-xl xl:text-2xl lg:leading-8 xl:leading-9 mt-6 xs:mt-5 md:mt-6">
          Платформа управления виртуальными помощниками на базе искусственного
          интеллекта (LLM/GPT)
        </p>
        <div className="w-full flex flex-col xs:flex-row md:flex-col lg:flex-row items-center gap-3 xs:gap-5 md:gap-3 lg:gap-5 text-center mt-6 xs:mt-10 md:mt-6 lg:mt-15">
          <a
            href="/cabinet"
            className="w-full xs:w-auto primary-btn bg-primary text-white xl:text-xl xl:leading-8 hover:bg-primary/80 hover:border-transparent"
          >
            Попробовать бесплатно
          </a>
          <a
            href="#contact"
            className="w-full xs:w-auto primary-btn text-primary bg-white xl:text-xl xl:leading-8 hover:bg-primary hover:text-white"
          >
            Получить консультацию
          </a>
        </div>
      </div>
      <div className="hidden lg:block h-[22.5rem] xl:h-[28rem] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="./images/robot.png"
          alt="Image"
        />
      </div>
    </section>
  );
}
