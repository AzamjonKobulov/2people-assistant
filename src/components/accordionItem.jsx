export default function AccordionItem({
  title,
  content,
  index,
  setActiveIndex,
  activeIndex,
}) {
  return (
    <div className="border border-brand-gray-400 rounded-2xl">
      <button
        onClick={() => setActiveIndex(index)}
        className="w-full flex items-center justify-between gap-3 py-3 px-4"
      >
        <span className="font-bold xs:font-normal text-brand-gray-900 xs:text-xl xs:leading-8 text-left">
          {title}
        </span>
        <svg
          className={`${
            activeIndex === index ? "rotate-45" : ""
          } transition-transform duration-300`}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.00039 0.149902C9.46983 0.149902 9.85039 0.53046 9.85039 0.999902L9.85039 8.1499H17.0004C17.4698 8.1499 17.8504 8.53046 17.8504 8.9999C17.8504 9.46935 17.4698 9.8499 17.0004 9.8499H9.85039V16.9999C9.85039 17.4693 9.46983 17.8499 9.00039 17.8499C8.53095 17.8499 8.15039 17.4693 8.15039 16.9999V9.8499H1.00039C0.530949 9.8499 0.150391 9.46935 0.150391 8.9999C0.150391 8.53046 0.530949 8.1499 1.00039 8.1499H8.15039L8.15039 0.999902C8.15039 0.53046 8.53095 0.149902 9.00039 0.149902Z"
            fill="#666679"
          />
        </svg>
      </button>
      <div
        className={`${
          index === activeIndex ? "max-h-[1000px]" : "max-h-0"
        } transition-max-height duration-500 ease-in-out overflow-hidden`}
        style={{ transitionProperty: "max-height" }}
      >
        <p className="text-brand-gray-800 text-sm xs:text-base text-left px-4 pb-3">
          {content}
        </p>
      </div>
    </div>
  );
}
