import { useEffect } from "react";

interface CvViewerProps {
  src: string;
  fileName: string;
  onClose: () => void;
}

export function CvViewer({ src, fileName, onClose }: CvViewerProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="cv-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="CV preview"
      onClick={onClose}
    >
      <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
        <header className="cv-modal-bar">
          <span className="cv-modal-title">{fileName}</span>
          <div className="cv-modal-actions">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="btn cv-btn"
              data-cursor="hover"
            >
              Open in new tab
            </a>
            <a
              href={src}
              download={fileName}
              className="btn btn-primary cv-btn"
              data-cursor="hover"
            >
              Download
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <button
              type="button"
              className="cv-close"
              onClick={onClose}
              aria-label="Close CV preview"
              data-cursor="hover"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </header>
        <iframe className="cv-frame" src={src} title={fileName} />
      </div>
    </div>
  );
}
