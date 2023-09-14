import { useState } from "react";
import { arrowUp } from "../assets/icons";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`fixed bottom-4 right-4 bg-coral-red text-white py-4 px-4 rounded-full transition-opacity duration-300 animate-bounce ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <img src={arrowUp} alt="back to top" width={26} height={26} />
    </button>
  );
};

export default BackToTopButton;
