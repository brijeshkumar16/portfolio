import { useState, useLayoutEffect } from 'react';

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) => value >= floor && value <= ceil;

const useScroll = <T extends string>(ids: T[], offset: number = 0) => {
  const [activeId, setActiveId] = useState<T>(ids[0]);

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || ids[0]);
    };

    listener();

    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
    };
  }, [ids, offset]);

  return activeId;
};

export default useScroll;
