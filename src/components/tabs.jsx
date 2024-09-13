const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="w-fit flex items-center gap-6 lg:gap-10 border-b border-brand-gray-800 whitespace-nowrap mr-7 sm:mr-0 pb-3.5">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabClick(index)}
          className={`relative group ${
            activeTab === index
              ? "text-white"
              : "text-brand-gray-800 transition duration-300 hover:text-white"
          } `}
        >
          <span className="font-bold xs:text-xl md:text-base lg:text-xl xl:text-2xl">
            {tab.tabName}
          </span>
          <span
            className={`absolute left-0 bottom-0 translate-y-3.5 w-full h-0.5 rounded-t-full ${
              activeTab === index
                ? "bg-white"
                : "bg-transparent group-hover:bg-white"
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
