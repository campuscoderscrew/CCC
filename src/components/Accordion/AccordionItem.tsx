import type { ReactNode } from "react";
import { useState, useRef, useEffect } from "react";

type Props = {
  title: string;
  children: ReactNode;

  id: number;
  isOpen: boolean;
  handleToggle: (id: number) => void;
};

export default function AccordionItem(props: Props) {
  const { title, children, id, isOpen, handleToggle } = props;

  // For precise accordion opening
  const [panelHeight, setPanelHeight] = useState<number>(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelMaxHeight = { maxHeight: isOpen ? panelHeight : 0 };

  useEffect(() => {
    const height = panelRef.current?.offsetHeight;
    height && setPanelHeight(height);
  }, []);

  return (
    <div
      className="flex flex-col justify-items-stretch text-ocean-dark 
        first:[&>button]:rounded-t-xl 
        last:[&>button]:rounded-b-xl last:[&>div]:rounded-b-xl"
    >
      {/* Panel toggle */}
      <button
        onClick={() => handleToggle(id)}
        className="group p-4 flex items-center font-bold cursor-pointer
          transition duration-300 hover:bg-ocean-light"
      >
        <div
          className={`mr-1 size-6 transition duration-1000 ease-in-out
            ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <ShipWheel className="fill-ocean-dark group-hover:fill-sky-light" />
        </div>
        <span className="group-hover:text-sky-light">{title}</span>
      </button>

      {/* Panel content */}
      <div
        ref={panelRef}
        style={panelRef.current ? panelMaxHeight : {}}
        className={`bg-white overflow-hidden 
          transition-all ease-in-out
          ${isOpen ? "duration-500" : "duration-300"}`}
      >
        <div className="m-4">{children}</div>
      </div>
    </div>
  );
}

const ShipWheel = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://w3.org" viewBox="0 0 24 24">
    <path
      d="m2 11l2.05.1a7.96 7.96 0 0 1 3.2-5.54L6.13 3.84c-.27-.48-.13-1.09
        .37-1.37c.5-.27 1.09-.11 1.37.37l.93 1.82a8.1 8.1 0 0 1 6.4 0l.93-1.82
        c.28-.48.87-.64 1.37-.37c.5.28.64.89.37 1.37l-1.12 1.72a7.96 7.96 0 0
        1 3.2 5.54L22 11a1 1 0 0 1 1 1a1 1 0 0 1-1 1l-2.05-.1a7.96 7.96 0 0 1
        -3.2 5.54l1.12 1.72c.27.48.13 1.09-.37 1.37c-.5.27-1.09.11-1.37-.37l
        -.93-1.82a8.1 8.1 0 0 1-6.4 0l-.93 1.82c-.28.48-.87.64-1.37.37c-.5
        -.28-.64-.89-.37-1.37l1.12-1.72a7.96 7.96 0 0 1-3.2-5.54L2 13a1 1 0 0
        1-1-1a1 1 0 0 1 1-1m7.07.35c.13-.61.46-1.15.93-1.56L8.34 7.25a6 6 0 0
        0-2.29 3.95zM12 9c.32 0 .62.05.9.14l1.38-2.69C13.58 6.16 12.81 6 12 6
        s-1.58.16-2.28.45l1.38 2.69c.28-.09.58-.14.9-.14m2.93 2.35l3.02-.15a6
        6 0 0 0-2.29-3.95L14 9.79c.47.41.8.95.93 1.56m0 1.3c-.13.61-.46 1.15
        -.93 1.56l1.66 2.54a6 6 0 0 0 2.29-3.95zM12 15c-.32 0-.62-.05-.91-.14
        l-1.37 2.69c.7.29 1.47.45 2.28.45s1.58-.16 2.28-.45l-1.37-2.69c-.29
        .09-.59.14-.91.14m-2.93-2.35l-3.02.15c.22 1.6 1.06 3.01 2.29 3.95L10
        14.21c-.47-.41-.8-.95-.93-1.56"
    />
  </svg>
);
