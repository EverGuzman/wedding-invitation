import { useEffect, RefObject } from "react";

const useIntersectionObserver = (
  elementRefs: RefObject<HTMLElement>[],
  thresholds: number[],
  setVisible: (index: number, visible: boolean) => void
) => {
  useEffect(() => {
    const observers: IntersectionObserver[] = elementRefs.map((_, index) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const idx = elementRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            if (idx !== -1) {
              setVisible(idx, entry.isIntersecting);
            }
          });
        },
        {
          threshold: thresholds[index], // Use specific threshold for each element
        }
      );
    });

    elementRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      elementRefs.forEach((ref, index) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, [elementRefs, thresholds, setVisible]);
};

export default useIntersectionObserver;
