import React, { useState, type ReactNode } from "react";
import AccordionItem from "./AccordionItem";

type Props = {
  className?: string;
  labels: string[];
  content: ReactNode[];
};

export default function Accordion(props: Props) {
  const { labels, content } = props;

  // Stores the ID of the open item. If -1, all are closed.
  const [openId, setOpenId] = useState<number>(-1);

  /**
   * Opens an accordion panel for the corresponding `id`. If the panel is
   * already open, close it.
   * @param id The id corresponding to the panel that should be opened
   */
  const handleToggle = (id: number) => {
    setOpenId(openId === id ? -1 : id);
  };

  return (
    <div className="min-w-full flex flex-col bg-sand-light rounded-xl shadow-md">
      {labels.map((title: string, i: number) => (
        <AccordionItem
          key={`accordion-${i}-${title}`}
          id={i}
          title={title}
          children={content[i]}
          isOpen={openId === i}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}
