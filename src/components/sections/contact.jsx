import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact() {
  const [isThanksModalOpen, setIsThanksModalOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleThanksModal = (e) => {
    e.preventDefault();
    setIsThanksModalOpen((prevState) => !prevState);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      toggleThanksModal(e);
    }
  };

  useEffect(() => {
    if (isThanksModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isThanksModalOpen]);

  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-16 w-container mt-30 xl:mt-40"
    >
      <div className="w-full lg:max-w-80 xl:max-w-[486px]">
        <h4 className="font-bold text-2xl xs:text-8 md:text-2xl lg:text-8 xl:text-5xl">
          Получить консультацию и узнать условия:
        </h4>
        <div className="space-y-2 lg:space-y-5 mt-3 lg:mt-4 xl:mt-6">
          <a
            href="mailto:mailto:hi@2people.io"
            className="xs:w-max text-primary flex items-center gap-4"
          >
            <div className="w-max bg-brand-gray-200 rounded-5 p-3">
              <img src="./svgs/email.svg" alt="Image" />
            </div>
            <span className="font-bold text-sm xl:text-xl">hi@2people.io</span>
          </a>
          <a
            href="https://t.me/two_people_it"
            target="_blank"
            className="xs:w-max text-primary flex items-center gap-4"
          >
            <div className="w-max bg-brand-gray-200 rounded-5 p-3">
              <img src="./svgs/telegramlogo.svg" alt="Image" />
            </div>
            <span className="font-bold text-sm xl:text-xl">@two_people_it</span>
          </a>
        </div>
      </div>

      <div className="w-full max-w-[690px] bg-brand-gray-900 rounded-5 xl:rounded-[40px] p-5 xs:p-10 md:p-8 lg:p-10 xl:p-15">
        <form className="grid xs:grid-cols-2 xl:grid-cols-1 gap-y-8 gap-x-2">
          <div className="">
            <input
              type="text"
              placeholder="Ваше имя*"
              className="w-full text-base xl:text-xl text-white placeholder-secondary border border-secondary bg-transparent rounded-xl focus:outline-none py-3 px-4"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Компания"
              className="w-full text-base xl:text-xl text-white placeholder-secondary border border-secondary bg-transparent rounded-xl focus:outline-none py-3 px-4"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email*"
              className="w-full text-base xl:text-xl text-white placeholder-secondary border border-secondary bg-transparent rounded-xl focus:outline-none py-3 px-4"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Телефон"
              className="w-full text-base xl:text-xl text-white placeholder-secondary border border-secondary bg-transparent rounded-xl focus:outline-none py-3 px-4"
            />
          </div>
          <div className="xs:col-span-2 xl:col-span-1">
            <div>
              <textarea
                placeholder="Введите сообщение*"
                rows="5"
                maxLength="300"
                className="w-full p-3 text-base xl:text-xl text-brand-gray-400 placeholder-secondary bg-transparent border border-secondary rounded-lg outline-none"
              ></textarea>
              <div className="text-right text-xs text-gray-500">0/300</div>
            </div>

            {/* Я соглашаюсь с Политикой конфиденциальности */}
            <div className="flex items-center gap-x-2 mt-15 text-white">
              <input type="checkbox" id="check" className="hidden" />
              <label
                htmlFor="check"
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <div className="w-5 h-5 shrink-0 grid place-content-center border border-secondary rounded">
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden"
                  >
                    <path
                      d="M13 1.32617L5.81066 8.51551C5.22487 9.1013 4.27513 9.1013 3.68934 8.51551L1 5.82617"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p>
                  Я соглашаюсь с
                  <a
                    href="https://drive.google.com/file/d/1EWgMHt_iZoaAIYvJNKCyetdGGfsJb1w4/view"
                    target="_blank"
                    className="text-[#007AFF] underline ml-2"
                  >
                    Политикой
                    <br className="sm:hidden lg:block xl:hidden" />{" "}
                    конфиденциальности
                  </a>
                </p>
              </label>
            </div>
            <button
              type="submit"
              className="h-11 w-full text-sm xs:text-base font-medium text-brand-gray-800 bg-brand-gray-950 rounded-xl outline-none transition duration-300 hover:bg-primary hover:text-white mt-11 px-4 py-2"
              onClick={toggleThanksModal}
            >
              Отправить
            </button>
          </div>
        </form>
      </div>

      {/* Thanks Modal */}
      <AnimatePresence>
        {isThanksModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          >
            <div
              ref={modalRef}
              className="max-w-80 sm:max-w-[38.75rem] md:max-w-[28.75rem] lg:max-w-[38.75rem] xl:max-w-[33.75rem] w-full relative space-y-4 sm:space-y-20 md:space-y-8 xl:space-y-6 bg-brand-gray-900 text-white  rounded-3xl sm:rounded-[2.5rem] sm:py-[9.375rem] md:py-[3.75rem] lg:py-[5.5625rem] xl:py-16 p-5 sm:px-10 md:px-8 lg:px-10"
            >
              <button
                onClick={toggleThanksModal}
                className="w-[2.625rem] h-[2.625rem] shrink-0 absolute top-5 right-5 grid place-content-center bg-brand-gray-950 rounded-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7625 18.8232 17.4696 18.5303L12 13.0607L6.53035 18.5303C6.23746 18.8232 5.76259 18.8232 5.46969 18.5303C5.1768 18.2374 5.1768 17.7626 5.46969 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76257 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L12 10.9394L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z"
                    fill="white"
                  />
                </svg>
              </button>

              <img
                src="../../../images/robot-modal.png"
                alt="Robot"
                className="w-1/2 mx-auto"
              />

              <div className="space-y-4 sm:space-y-6 text-center">
                <h4 className="font-bold text-2xl sm:text-5xl md:text-[2rem]">
                  Спасибо за ваше <br className="lg:hidden xl:block" />{" "}
                  сообщение!
                </h4>
                <p className="text-[#D9D9E5] sm:text-xl">
                  Наш менеджер свяжется <br className="sm:hidden xl:block" /> с
                  вами в <br className="hidden md:block lg:hidden" />
                  ближайшее время.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
