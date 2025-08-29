import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <header className="w-full">
        <section className="max-w-5xl mx-auto px-6 py-16 sm:py-24 text-center flex flex-col items-center">
          {/* Space for the logo */}
          <div className="h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] flex items-center justify-center">
            <Image
              className="max-h-full max-w-full"
              src="/logo_advisely.png"
              alt="Advisely logo"
              width={160}
              height={160}
              priority
            />
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">Advisely</h1>
        </section>
      </header>

      {/* LINKS SECTION */}
      <main className="w-full">
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://renaudmathieu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-black/10 dark:border-white/15 p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold">renaudmathieu.com</h2>
              <p className="text-sm opacity-80 mt-1">Visit renaudmathieu.com</p>
            </a>

            <a
              href="https://doppio-lab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-black/10 dark:border-white/15 p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold">doppio-lab.com</h2>
              <p className="text-sm opacity-80 mt-1">Visit doppio-lab.com</p>
            </a>

            <a
              href="https://locallegends.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-black/10 dark:border-white/15 p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold">locallegends</h2>
              <p className="text-sm opacity-80 mt-1">Visit locallegends</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
