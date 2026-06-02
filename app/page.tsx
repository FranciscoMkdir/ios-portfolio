import CraftSection from "@/components/CraftSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#161616] text-white">
      <section className="px-16 pt-24 pb-16">
        <div className="flex justify-between items-start">
          {/* LEFT */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight font-sans">
              Francisco Garcia
            </h1>
            <p className="mt-1 text-lg text-zinc-400">iOS Engineer</p>
          </div>

          {/* RIGHT ICONS (ONLY THIS SECTION) */}
          <div className="flex gap-3 text-zinc-400">
            {/* EMAIL */}
            <a
              href="mailto:franciscojdelgadog@gmail.com"
              className="p-2 rounded-md hover:bg-white/5 transition group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 opacity-70 group-hover:opacity-100 transition"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/francisco-jdgarcia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-white/5 transition group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 opacity-70 group-hover:opacity-100 transition"
              >
                <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.603 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a1.981 1.981 0 1 1 0-3.962 1.981 1.981 0 0 1 0 3.962zM6.814 20.452H3.861V9h2.953v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CraftSection />
    </main>
  );
}
