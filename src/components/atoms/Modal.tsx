"use client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: "sm" | "lg";
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  variant = "lg",
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full border border-gray-200 bg-white shadow-xl overflow-hidden ${
          variant === "sm" ? "max-w-md" : "max-w-full"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
