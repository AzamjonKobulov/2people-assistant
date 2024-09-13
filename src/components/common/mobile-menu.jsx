import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ onToggleMenu }) {
  // Accordion state
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // Toggle accordion
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="xl:hidden fixed inset-0 bg-brand-gray-900"
    >
      <div className="max-w-[58.75rem] mx-auto space-y-10 pt-5">
        {/* Header */}
        <div className="flex items-center justify-between px-5">
          <p className="text-[2rem] font-semibold text-primary">Меню</p>

          <div className="flex items-center gap-5">
            <a
              href="/cabinet"
              className="h-10 xs:hidden md:block lg:hidden w-full xs:w-auto primary-btn bg-primary text-white text-sm hover:bg-primary/80 border-none"
              onClick={onToggleMenu}
            >
              Войти
            </a>
            {/* Close Button */}
            <button
              onClick={onToggleMenu}
              className="w-[2.625rem] h-[2.625rem] shrink-0 grid place-content-center bg-brand-gray-950 rounded-full"
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
          </div>
        </div>

        {/* Content */}
        <div className="max-h-screen flex-1 flex flex-col md:flex-row gap-8 sm:gap-14 md:gap-16 md:items-center justify-between overflow-y-auto overflow-x-hidden pb-40 px-5">
          {/* Links */}
          <ul className="min-w-96 w-full space-y-8 divide-y divide-brand-gray-950 text-white font-bold md:font-normal text-xl md:text-2xl">
            {/* Accordion */}
            <li className="relative">
              {/* Accordion Header */}
              <button
                className="flex items-center gap-1"
                onClick={toggleAccordion}
              >
                <span>Платформа</span>
                <motion.svg
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isAccordionOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5987 9.39619C17.9322 9.72665 17.9346 10.2648 17.6041 10.5983L15.8217 12.3966C15.1549 13.0695 14.6039 13.6254 14.1115 14.0208C13.5972 14.4339 13.0651 14.7411 12.4212 14.8232C12.1418 14.8588 11.859 14.8588 11.5796 14.8232C10.9357 14.7411 10.4036 14.4339 9.88923 14.0208C9.39688 13.6254 8.84591 13.0695 8.17906 12.3966L6.39667 10.5983C6.06621 10.2648 6.06861 9.72665 6.40204 9.39619C6.73546 9.06573 7.27365 9.06813 7.60411 9.40155L9.35142 11.1645C10.0622 11.8817 10.5456 12.3676 10.9537 12.6953C11.3484 13.0123 11.5893 13.1107 11.7945 13.1368C11.9312 13.1543 12.0695 13.1543 12.2063 13.1368C12.4115 13.1107 12.6524 13.0123 13.0471 12.6953C13.4551 12.3676 13.9386 11.8817 14.6494 11.1645L16.3967 9.40155C16.7271 9.06813 17.2653 9.06572 17.5987 9.39619Z"
                    fill="white"
                  />
                </motion.svg>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {isAccordionOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="overflow-hidden font-normal text-base md:text-xl"
                  >
                    <li>
                      <a
                        href="#optimize"
                        className="flex items-end gap-3 lg:hover:underline pt-5"
                        onClick={onToggleMenu}
                      >
                        <svg
                          width="12"
                          height="20"
                          viewBox="0 0 12 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.13137 7.47463C0.506532 6.84979 0.506532 5.83673 1.13137 5.21189L4.52548 1.81778C5.15032 1.19294 6.16339 1.19294 6.78823 1.81778L10.1823 5.21189C10.8072 5.83673 10.8072 6.84979 10.1823 7.47463L6.78822 10.8687C6.16339 11.4936 5.15032 11.4936 4.52548 10.8687L1.13137 7.47463Z"
                            fill="#356FEC"
                          />
                        </svg>
                        <span>Применение</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#opportunities"
                        className="flex items-end gap-3 lg:hover:underline pt-5"
                        onClick={onToggleMenu}
                      >
                        <svg
                          width="12"
                          height="20"
                          viewBox="0 0 12 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.13137 7.47463C0.506532 6.84979 0.506532 5.83673 1.13137 5.21189L4.52548 1.81778C5.15032 1.19294 6.16339 1.19294 6.78823 1.81778L10.1823 5.21189C10.8072 5.83673 10.8072 6.84979 10.1823 7.47463L6.78822 10.8687C6.16339 11.4936 5.15032 11.4936 4.52548 10.8687L1.13137 7.47463Z"
                            fill="#356FEC"
                          />
                        </svg>
                        <span>ИИ-ассистенты</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#platforms"
                        className="flex items-end gap-3 lg:hover:underline pt-5"
                        onClick={onToggleMenu}
                      >
                        <svg
                          width="12"
                          height="20"
                          viewBox="0 0 12 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.13137 7.47463C0.506532 6.84979 0.506532 5.83673 1.13137 5.21189L4.52548 1.81778C5.15032 1.19294 6.16339 1.19294 6.78823 1.81778L10.1823 5.21189C10.8072 5.83673 10.8072 6.84979 10.1823 7.47463L6.78822 10.8687C6.16339 11.4936 5.15032 11.4936 4.52548 10.8687L1.13137 7.47463Z"
                            fill="#356FEC"
                          />
                        </svg>
                        <span>Возможности</span>
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="pt-8">
              <a
                onClick={onToggleMenu}
                href="#tariffs"
                className="lg:hover:underline"
              >
                Тарифы
              </a>
            </li>
            <li className="pt-8">
              <a
                onClick={onToggleMenu}
                href="#questions"
                className="lg:hover:underline"
              >
                Демо
              </a>
            </li>
            <li className="pt-8">
              <a
                onClick={onToggleMenu}
                href="https://assistant-docs.2people.io"
                target="_blank"
                className="lg:hover:underline"
              >
                Документация
              </a>
            </li>
            <li className="pt-8">
              <a
                onClick={onToggleMenu}
                href="#contact"
                className="lg:hover:underline"
              >
                Контакты
              </a>
            </li>
          </ul>

          {/* Robot Image */}
          <img
            className="w-full"
            src="../../../images/robot-menu.svg"
            alt="Robot"
          />
        </div>
      </div>
    </motion.div>
  );
}
