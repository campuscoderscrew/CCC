import type { ReactNode } from "react";
import { useState, useRef, useEffect } from "react";

import shipWheel from "@assets/ship-wheel.png";

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
    height && setPanelHeight(height + 5); // Arbituary margin of error
  }, []);

  return (
    <div className="flex flex-col justify-items-stretch text-ocean-dark">
      {/* Panel toggle */}
      <button
        onClick={() => handleToggle(id)}
        className="group p-4 flex gap-4 items-center cursor-pointer"
      >
        <div
          className={`grid size-10 transition duration-1000 ease-in-out
            ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <img className="place-self-center" src={shipWheel} />
        </div>
        <span>{title}</span>
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
