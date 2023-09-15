import { useRef, useEffect, useState } from "react";

export function useHorizontalScroll() {
  const elRef = useRef();
  const [currentCard, setCurrentCard] = useState(1);
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;

        e.preventDefault();
        if (e.deltaY > 0) {
          el.scrollTo({
            left: el.scrollLeft + 555 ,
            behavior: "smooth",
          });
          if (currentCard < 4) {
            setCurrentCard((pre) => pre + 1);
          }
        } else {
          el.scrollTo({
            left: el.scrollLeft - 555 ,
            behavior: "smooth",
          });
          if (currentCard > 1) {
            setCurrentCard((pre) => pre - 1);
          }
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [currentCard]);
  return { elRef, currentCard };
}
