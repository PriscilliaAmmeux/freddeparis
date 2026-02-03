export default function ButtonContactMe() {
  return (
    <a
      href="mailto:fredericdeparis61@gmail.com"
      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a314e] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out hover:from-blue-700 hover:to-blue-800"
      aria-label="Cliquez pour envoyer un email">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      Me contacter
    </a>
  );
}
