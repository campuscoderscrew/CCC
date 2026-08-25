import { useState, type ReactNode } from "react";
import AccordionItem from "./AccordionItem";

type Props = {
  className?: string;
  labels: string[];
  content: ReactNode[];

  /**
   * Tightens the card padding and toggle rows. Intended for a single-item
   * accordion used as a compact disclosure box.
   */
  compact?: boolean;
};

/**
 * Creates an accordion with opening animations for eacher header
 * @param props An object containign the labels and content for each header. The
 * labels and content are expected to have the same length.
 * @returns An accordion with `labels` as headers and their corresponding
 * `content` as their body
 */
export default function Accordion(props: Props) {
  const { labels, content, compact = false } = props;

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

  const cardPadding = compact
    ? "px-4 md:px-6 py-3"
    : "px-4 md:px-8 lg:px-16 py-8";

  return (
    <div
      className={`min-w-full flex flex-col bg-white
      rounded-xl shadow-lg divide-y *:border-black/20 ${cardPadding}`}
    >
      {labels.map((title: string, i: number) => (
        <AccordionItem
          key={`accordion-${i}-${title}`}
          id={i}
          title={title}
          children={content[i]}
          isOpen={openId === i}
          handleToggle={handleToggle}
          compact={compact}
        />
      ))}
    </div>
  );
}
