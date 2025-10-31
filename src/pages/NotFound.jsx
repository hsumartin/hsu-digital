export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy-900 text-neutral-50 text-center px-8">
      <h1 className="text-5xl font-semibold text-gold-500 mb-4">404</h1>
      <p className="text-neutral-200 mb-8">
        Diese Seite existiert nicht oder wurde verschoben.
      </p>
      <a
        href="/"
        className="border border-gold-500 text-neutral-50 px-6 py-3 rounded-md transition-all duration-300 hover:bg-gold-500 hover:text-navy-900"
      >
        Zur Startseite
      </a>
    </div>
  );
}
