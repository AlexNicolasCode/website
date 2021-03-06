import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const toggleVisibility = () => {
    window.pageYOffset > 30 ? setIsVisible(true) : setIsVisible(false)
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <button className="fixed bottom-5 right-5 z-10 focus:outline-none" onClick={scrollToTop}>
          <svg 
            className="h-6 w-6 text-indigo-500" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="#c4c4c4">
            <path 
              fill-rule="evenodd" 
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" 
              clip-rule="evenodd" />
           </svg>
        </button>
      }
    </div>
  );
}