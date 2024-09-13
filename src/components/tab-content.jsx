const TabContent = ({ isActive, title, paragraphs, images, imageClasses }) => {
  return (
    <div
      className={`items-center justify-between gap-x-24 space-y-8 xs:space-y-10 md:space-y-12 lg:space-y-0 ${
        !isActive ? "hidden" : "lg:flex"
      }`}
    >
      {/* Text Content */}
      <div className="w-full lg:max-w-80 xl:max-w-[36.375rem]">
        <h2 className="text-white">{title}</h2>
        <div className="space-y-3 mt-5 xs:mt-6">
          {paragraphs.map((par, idx) => (
            <p
              key={idx}
              className="text-brand-gray-50 text-sm xs:text-base xl:text-xl"
            >
              {par}
            </p>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:max-w-base-1 overflow-hidden">
        {imageClasses.map(({ className, size }) => (
          <img
            key={size}
            className={`w-full ${className}`}
            src={images[size]}
            alt={title}
            loading="lazy" // Add lazy loading
          />
        ))}
      </div>
    </div>
  );
};

export default TabContent;
