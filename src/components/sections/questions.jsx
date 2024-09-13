import { useState } from "react";

export default function Questions() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <section id="questions" className="w-container mt-30 xl:mt-40">
      <div className="mb-8 xs:mb-12 md:mb-10 lg:mb-12 xl:mb-15">
        <h2 className="text-brand-gray-900">Остались сомнения или вопросы?</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
        <div className="w-full lg:max-w-80 xl:max-w-base-1 flex flex-col justify-between gap-y-4 xl:gap-y-6">
          <div>
            <h3 className="text-base xs:text-xl lg:text-base xl:text-2xl">
              Поговорите с демо ИИ-ассистентом:
            </h3>

            <div className="space-y-2 lg:space-y-3 mt-3 lg:mt-4 xl:mt-6">
              <a
                href="https://t.me/ai_2people_assistant_demo_bot"
                target="_blank"
                className="xs:w-max text-primary flex items-center gap-4"
              >
                <div className="w-max bg-brand-gray-200 rounded-5 p-3">
                  <img src="./svgs/telegramlogo.svg" alt="Image" />
                </div>
                <span className="font-bold text-sm xl:text-xl">
                  Telegram-бот
                </span>
              </a>
              <a
                href="https://demo-assistant.2people.io"
                target="_blank"
                className="xs:w-max text-primary flex items-center gap-4"
              >
                <div className="w-max bg-brand-gray-200 rounded-5 p-3">
                  <img src="./svgs/Vector.svg" alt="Image" />
                </div>
                <span className="font-bold text-sm xl:text-xl">
                  Веб-интерфейс (как в Chat GPT)
                </span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base xs:text-xl lg:text-base xl:text-2xl">
              Изучите документацию к платформе:
            </h3>

            <div className="mt-3 lg:mt-4">
              <a
                href="https://assistant-docs.2people.io"
                target="_blank"
                className="xs:w-max text-primary flex items-center gap-4"
              >
                <div className="w-max bg-brand-gray-200 rounded-5 p-3">
                  <img src="./svgs/document.svg" alt="Image" />
                </div>
                <span className="font-bold text-sm xl:text-xl">
                  Документация
                </span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base xs:text-xl lg:text-base xl:text-2xl">
              Создайте ИИ-ассистента бесплатно:
            </h3>

            <div className="space-y-2 lg:space-y-3 mt-4 xl:mt-6">
              <a
                href="/cabinet"
                className="inline-block primary-btn text-primary font-bold hover:bg-primary hover:text-white py-4"
              >
                Создать ИИ-ассистента
              </a>
            </div>
          </div>
        </div>
        <div className="order-first lg:order-none flex-1 flex flex-col justify-between gap-y-4 xl:gap-y-6">
          <div className="flex items-center gap-4">
            <img
              src="./svgs/robotvid.svg"
              alt="Image"
              className="hidden xs:block"
            />
            {/* Mobile */}
            <img
              src="./images/robotvid.png"
              alt="Image"
              className="w-20 xs:hidden"
            />
            <h3 className="text-base xs:text-xl lg:text-base xl:text-2xl">
              Посмотрите короткое видео, как создать ИИ-ассистента:
            </h3>
          </div>

          <div className="w-full aspect-[584/364] relative overflow-hidden rounded-5 xs:rounded-3xl">
            {!isPlaying ? (
              <>
                <div className="bg-black/20 w-full h-full flex items-center justify-center absolute top-0 left-0 z-10">
                  <button
                    className="w-20 h-14 xs:w-[6.5rem] xs:h-[4.5rem] grid place-content-center bg-white/60 rounded-2xl"
                    onClick={handlePlayButtonClick}
                  >
                    <svg
                      className="w-9 h-9 xs:w-12 xs-h-12"
                      viewBox="0 0 32 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 14.5359C32.6667 16.0755 32.6667 19.9245 30 21.4641L6 35.3205C3.33333 36.8601 2.02534e-06 34.9356 2.15994e-06 31.8564L3.37131e-06 4.14359C3.5059e-06 1.06439 3.33334 -0.860109 6 0.679492L30 14.5359Z"
                        fill="#356FEC"
                      />
                    </svg>
                  </button>
                </div>
                <img
                  className="w-full h-full object-cover"
                  src="./images/ai-robot.jpg"
                  alt="Image"
                />
              </>
            ) : (
              <video
                className="w-full h-full object-contain"
                src="../../../videos/video.mov" // Replace with your video source
                autoPlay
                controls
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
