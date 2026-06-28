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
    /**
     * Determines the max height of the accordion body
     */
    const handleResize = () => {
      const height = panelRef.current?.scrollHeight;
      height && setPanelHeight(height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-items-stretch text-ocean-dark">
      {/* Panel toggle */}
      <button
        onClick={() => handleToggle(id)}
        className="group p-4 flex gap-4 items-center cursor-pointer"
      >
        <div
          className={`size-10 shrink-0 grid transition duration-1000 ease-in-out
            ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <img className="place-self-center" src={shipWheel} />
        </div>
        <span className="text-left">{title}</span>
      </button>

      {/* Panel content */}
      <div
        ref={panelRef}
        style={panelRef.current ? panelMaxHeight : {}}
        // `ml-18` is the combined width of `p-4` of the `button`, `size-10` of
        // the ship wheel, and `gap-4` of the gutter between the ship wheel and
        // the accordion label
        className={`ml-18 -mt-4 mb-4 bg-white overflow-hidden 
          transition-all ease-in-out 
          ${isOpen ? "duration-500" : "duration-300"}`}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
}
