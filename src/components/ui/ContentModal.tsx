"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ContentModalProps = {
  title: string;
  labelledById: string;
  eyebrow?: ReactNode;
  onClose: () => void;
  children: ReactNode;
};

export default function ContentModal({
  title,
  labelledById,
  eyebrow,
  onClose,
  children,
}: ContentModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/55"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledById}
        className="bg-white w-full sm:max-w-3xl sm:rounded-2xl max-h-[92vh] overflow-hidden flex flex-col shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between gap-4">
          <div className="text-left min-w-0">
            {eyebrow}
            <h3
              id={labelledById}
              className="text-lg sm:text-xl font-extrabold text-slate-950 mt-1 leading-snug"
            >
              {title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="min-w-12 min-h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg shrink-0"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        <div className="p-5 sm:p-8 overflow-y-auto text-left flex-grow">
          {children}
        </div>

        <div className="p-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 min-h-12 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
