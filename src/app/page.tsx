export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Full Regression
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Comprehensive regression testing platform for modern software teams.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <a
            href="#cta"
            className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 transition"
          >
            Get started
          </a>
          <a href="#learn-more" className="text-sm font-semibold text-slate-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
