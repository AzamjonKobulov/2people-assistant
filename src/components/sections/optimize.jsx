import { useState } from "react";

import TabContent from "../tab-content";
import Tabs from "../tabs";

const tabs = [
  {
    tabName: "Базы знаний",
    title: "Создайте бота-эксперта по базе знаний компании",
    parags: [
      "Создайте бота-эксперта по базе знаний компании",
      "Робот облегчит доступ к важной информации, упростит онбординг и адаптацию новых сотрудников. С его помощью ваши команды смогут быстрее находить решения и эффективно использовать корпоративные ресурсы, освобождая HR и другие отделы от рутинных запросов.",
    ],
    images: {
      desktop: "./svgs/tab-1-desktop.svg",
      xl: "./svgs/tab-1-xl.svg",
      lg: "./svgs/tab-1-lg.svg",
      md: "./svgs/tab-1-md.svg",
      mobile: "./images/tab-1-mobile.png",
    },
  },
  {
    tabName: "HR",
    title: "Оптимизируйте затраты HR-отдела",
    parags: [
      "Освободите время HR-менеджеров для более сложных задач. Улучшите взаимодействие с сотрудниками и соискателями.",
      "ИИ-ассистент берет на себя до 80% коммуникаций: информирует о вакансиях, принимает заявки и квалифицирует кандидатов, а также поддерживает сотрудников при решении любых возникающих вопросов.",
    ],
    images: {
      desktop: "./svgs/tab-2-desktop.svg",
      xl: "./svgs/tab-2-xl.svg",
      lg: "./svgs/tab-2-lg.svg",
      md: "./svgs/tab-2-md.svg",
      mobile: "./images/tab-2-mobile.png",
    },
  },
  {
    tabName: "Поддержка клиентов",
    title: "Автоматизируйте до 80% обращений в поддержку",
    parags: [
      "Решайте с командой самые сложные и самые важные кейсы. Все остальные обращения доверьте ИИ-ассистенту.",
      "Робот самостоятельно определит тему запроса, найдет подходящую информацию в базе знаний/документах, уточнит детали и составит ответ в соответствии с правилами компании. ",
    ],
    images: {
      desktop: "./svgs/tab-3-desktop.svg",
      xl: "./svgs/tab-3-xl.svg",
      lg: "./svgs/tab-3-lg.svg",
      md: "./svgs/tab-3-md.svg",
      mobile: "./images/tab-3-mobile.png",
    },
  },
  {
    tabName: "Маркетинг ",
    title: "Расширьте базу контактов и увеличьте число заявок",
    parags: [
      "Повысьте конверсию ваших цифровых каналов с помощью персонализированного взаимодействия и доступности 24/7.",
      "ИИ-ассистент мгновенно предоставит вашим потенциальным клиентам исчерпывающие ответы на вопросы и консультации по товарам/услугам, а также сможет предложить персональные рекомендации и собрать контактные данные у заинтересованных лиц.",
    ],
    images: {
      desktop: "./svgs/tab-4-desktop.svg",
      xl: "./svgs/tab-4-xl.svg",
      lg: "./svgs/tab-4-lg.svg",
      md: "./svgs/tab-4-md.svg",
      mobile: "./images/tab-4-mobile.png",
    },
  },
];

// Define responsive classes for each screen size
const imageClasses = [
  { className: "hidden xl:block", size: "desktop" },
  { className: "hidden lg:block xl:hidden", size: "xl" },
  { className: "hidden md:block lg:hidden", size: "lg" },
  { className: "hidden xs:block md:hidden", size: "md" },
  { className: "block xs:hidden", size: "mobile" },
];

export default function Optimize() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="optimize" className="bg-brand-gray-950">
      <div className="w-container py-10 xs:py-15 md:py-10 lg:py-15 xl:py-20">
        <div className="no-scroll overflow-x-auto -mr-7 sm:mr-0 mb-8 xs:mb-12 md:mb-10 lg:mb-12">
          {/* TABS */}
          <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
        </div>

        {/* TABS CONTENT */}
        {tabs.map((tab, index) => (
          <TabContent
            key={index}
            isActive={activeTab === index}
            title={tab.title}
            paragraphs={tab.parags}
            images={tab.images}
            imageClasses={imageClasses}
          />
        ))}
      </div>
    </section>
  );
}
