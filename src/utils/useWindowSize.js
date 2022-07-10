import {useState, useEffect} from "react";

const useWindowSize = () => {
  const [type, setType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth <= 480) {
        setType({
          isMobile: true,
          isTablet: false,
          isDesktop: false,
        })
      } else if(window.innerWidth > 480 && window.innerWidth <= 768) {
        setType({
          isMobile: false,
          isTablet: true,
          isDesktop: false,
        })
      } else {
        setType({
          isMobile: false,
          isTablet: false,
          isDesktop: true,
        })
      }
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return type;
}

export default useWindowSize;