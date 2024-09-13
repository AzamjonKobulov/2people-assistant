import { useState, useRef, useEffect } from "react";
import AccordionItem from "./accordionItem";

export default function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRef = useRef(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClickOutside = (event) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target)) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={accordionRef}
      className="w-full lg:max-w-base-1 space-y-3 mt-8 xs:mt-10 lg:mt-0"
    >
      {data.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          content={item.content}
          index={idx}
          setActiveIndex={handleToggle}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
}
