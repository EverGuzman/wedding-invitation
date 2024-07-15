import { useEffect, RefObject } from "react";

const useIntersectionObserver = (
  elementRefs: RefObject<HTMLElement>[],
  setVisible: (index: number, visible: boolean) => void
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elementRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          if (index !== -1) {
            setVisible(index, entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elementRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elementRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [elementRefs, setVisible]);
};

export default useIntersectionObserver;
