"use client";

const WHATSAPP_NUMBER = "918318950758";

const WHATSAPP_MESSAGE =
  "Hello Finora Labs, I am interested in your financial products. Please share more information.";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Finora Labs on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.22)] transition-all duration-200 hover:scale-110 hover:shadow-[0_12px_35px_rgba(0,0,0,0.28)] focus:outline-none focus:ring-4 focus:ring-green-200 sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.04 3C8.84 3 3 8.76 3 15.87c0 2.27.6 4.49 1.74 6.43L3 29l6.86-1.79a13.1 13.1 0 0 0 6.18 1.55h.01C23.2 28.76 29 23 29 15.87 29 8.76 23.2 3 16.04 3Zm0 23.57c-1.93 0-3.82-.52-5.47-1.51l-.39-.23-4.07 1.06 1.09-3.94-.25-.41a10.65 10.65 0 0 1-1.63-5.67c0-5.88 4.83-10.66 10.77-10.66 2.88 0 5.58 1.11 7.62 3.12a10.55 10.55 0 0 1 3.16 7.54c0 5.88-4.83 10.7-10.83 10.7Zm5.91-8.02c-.32-.16-1.91-.94-2.2-1.05-.29-.11-.51-.16-.73.16-.22.32-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.61-.96-.86-1.61-1.91-1.8-2.23-.19-.32-.02-.49.14-.65.14-.14.32-.38.49-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.75-1-2.4-.27-.64-.54-.55-.73-.55h-.62c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.55 1.86.71.78.25 1.49.21 2.05.13.63-.09 1.91-.78 2.18-1.54.27-.76.27-1.41.19-1.54-.08-.13-.3-.21-.62-.38Z" />
      </svg>

      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white shadow-lg sm:block">
        Chat with us
      </span>
    </a>
  );
}
