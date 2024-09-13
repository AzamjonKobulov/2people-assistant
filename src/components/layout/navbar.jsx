import { useState } from "react";

import MobileMenu from "../common/mobile-menu";
import { AnimatePresence } from "framer-motion";

export default function navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((open) => !open);
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-brand-gray-400 py-4 xs:py-5 xl:py-2">
      <nav className="w-container flex items-center justify-between gap-x-10">
        <a href="/" className="shrink-0">
          <img className="h-6 md:h-7" src="./svgs/logo.svg" alt="Logo" />
        </a>

        <div className="hidden xl:flex items-center gap-x-9 text-brand-gray-800">
          {/* Dropdown */}
          <div className="relative group py-5">
            <button className="flex items-center gap-x-2 transition duration-300 group-hover:text-primary hover:underline">
              <span>Платформа</span>
              <svg
                className="transition duration-300 group-hover:rotate-180"
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5983 0.396674C11.9317 0.727136 11.9341 1.26532 11.6036 1.59874L9.82124 3.3971C9.15438 4.06997 8.60341 4.6259 8.11106 5.0213C7.59669 5.43439 7.06462 5.7416 6.42071 5.82368C6.14129 5.85929 5.85852 5.85929 5.5791 5.82368C4.93518 5.7416 4.40311 5.43439 3.88875 5.0213C3.39639 4.6259 2.84542 4.06997 2.17857 3.3971L0.396186 1.59874C0.0657247 1.26532 0.0681258 0.727137 0.401549 0.396675C0.734972 0.0662138 1.27316 0.0686148 1.60362 0.402038L3.35093 2.16501C4.06172 2.88217 4.54516 3.36812 4.95322 3.69583C5.34788 4.01277 5.58877 4.11116 5.79404 4.13732C5.93074 4.15475 6.06906 4.15475 6.20576 4.13732C6.41104 4.11116 6.65193 4.01277 7.04658 3.69583C7.45464 3.36812 7.93809 2.88217 8.64888 2.16501L10.3962 0.402037C10.7266 0.0686141 11.2648 0.066213 11.5983 0.396674Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            {/* Dropdown Content */}
            <div className="w-[150px] bg-white absolute -translate-x-14 translate-y-3 z-50 shadow-soft hidden group-hover:block rounded-xl p-3">
              <a
                href="#optimize"
                className="block text-brand-gray-900 transition duration-300 hover:text-primary hover:underline mb-1 py-1"
              >
                Применение
              </a>
              <a
                href="#opportunities"
                className="block text-brand-gray-900 transition duration-300 hover:text-primary hover:underline mb-1 py-1"
              >
                ИИ-ассистенты
              </a>
              <a
                href="#platforms"
                className="block text-brand-gray-900 transition duration-300 hover:text-primary hover:underline mb-1 py-1"
              >
                Возможности
              </a>
            </div>
          </div>
          <a
            href="#tariffs"
            className="transition duration-300 hover:text-primary hover:underline"
          >
            Тарифы
          </a>
          <a
            href="#questions"
            className="transition duration-300 hover:text-primary hover:underline"
          >
            Демо
          </a>
          <a
            href="https://assistant-docs.2people.io"
            target="_blank"
            className="transition duration-300 hover:text-primary hover:underline"
          >
            Документация
          </a>
          <a
            href="#contact"
            className="transition duration-300 hover:text-primary hover:underline"
          >
            Контакты
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="/cabinet"
            className="hidden xs:block md:hidden lg:block w-full xs:w-auto primary-btn bg-primary text-white hover:bg-primary/80 border-none"
          >
            Войти
          </a>
          <button onClick={toggleMenu} className="p-2 block xl:hidden">
            <img src="./svgs/menu.svg" alt="Image" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && <MobileMenu onToggleMenu={toggleMenu} />}
      </AnimatePresence>
    </header>
  );
}
