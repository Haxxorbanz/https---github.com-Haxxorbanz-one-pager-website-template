import React, { useMemo, useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

// Smooth scroll helper
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Tiny UI atoms with theme support
const NavLink = ({ to, children, onClick }) => (
  <button
    onClick={() => {
      scrollToId(to);
      if (onClick) onClick();
    }}
    className="text-sm md:text-base px-3 py-2 rounded-xl hover:bg-green-100 dark:hover:bg-green-500/10 transition text-black dark:text-green-400 w-full md:w-auto text-left md:text-center"
  >
    {children}
  </button>
);

const Section = ({ id, className = '', children }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>
    {children}
  </section>
);

const Stat = ({ label, value }) => (
  <div className="flex flex-col items-start p-4 rounded-2xl bg-white dark:bg-black/70 backdrop-blur shadow-sm dark:shadow-[0_0_15px_#22c55e] border border-green-400/70">
    <div className="text-3xl font-semibold tracking-tight text-black dark:text-green-400">
      {value}
    </div>
    <div className="text-sm text-neutral-700 dark:text-gray-400 mt-1">
      {label}
    </div>
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1 rounded-full bg-white dark:bg-black border border-green-400/70 text-black dark:text-green-400 shadow-sm dark:shadow-[0_0_10px_#22c55e]">
    {children}
  </span>
);

const Card = ({ title, desc, cta, onClick }) => (
  <div className="group relative p-6 rounded-2xl bg-white dark:bg-black/70 border border-purple-400/70 shadow-sm dark:shadow-[0_0_20px_#a855f7] hover:shadow-md dark:hover:shadow-[0_0_30px_#a855f7] transition-all hover:-translate-y-1">
    <h3 className="text-lg font-semibold mb-2 text-black dark:text-green-400">
      {title}
    </h3>
    <p className="text-neutral-700 dark:text-gray-300 leading-relaxed mb-4">
      {desc}
    </p>
    {cta && (
      <button
        onClick={onClick}
        className="text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 font-medium inline-flex items-center"
      >
        {cta} <span className="ml-2">→</span>
      </button>
    )}
  </div>
);

const TimelineItem = ({ year, title, text }) => (
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-3 md:col-span-2">
      <div className="sticky top-24">
        <div className="text-xl md:text-2xl font-semibold text-black dark:text-green-400">
          {year}
        </div>
      </div>
    </div>
    <div className="col-span-9 md:col-span-10">
      <div className="p-5 rounded-2xl bg-white dark:bg-black/70 border border-green-400/70 shadow-sm dark:shadow-[0_0_15px_#22c55e]">
        <div className="font-semibold mb-1 text-purple-600 dark:text-purple-400">
          {title}
        </div>
        <p className="text-neutral-700 dark:text-gray-300 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  </div>
);

const FAQ = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-green-400/70 dark:border-green-600 rounded-2xl overflow-hidden shadow-sm dark:shadow-[0_0_10px_#22c55e]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-4 bg-white dark:bg-black hover:bg-green-50 dark:hover:bg-green-900/20 flex items-center justify-between transition-colors"
      >
        <span className="font-medium pr-4 text-black dark:text-green-400">
          {q}
        </span>
        <span className="text-purple-600 dark:text-purple-400">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-white dark:bg-black/80 text-neutral-700 dark:text-gray-300 leading-relaxed border-t border-green-400/70 dark:border-green-600">
          {a}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // default light
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const divisions = useMemo(
    () => [
      {
        id: 'code',
        title: 'Code Labs',
        desc: 'Experimental dev space for hacks, scripts, exploits, and open-source magic.',
      },
      {
        id: 'infra',
        title: 'Infra',
        desc: 'Servers, meshes, and stealth pipelines engineered for uptime and speed.',
      },
      {
        id: 'tribe',
        title: 'Digital Tribe',
        desc: 'Makers + breakers pushing limits together—shipping fast, fixing faster.',
      },
      {
        id: 'intel',
        title: 'Signal & Intel',
        desc: 'Research, audits, pattern-spotting. Know more, move earlier.',
      },
      {
        id: 'future',
        title: 'Future Hacks',
        desc: 'Emerging plays in AI, XR, and next-gen cyberspace aligned with our manifesto.',
      },
    ],
    []
  );

  const jobs = [
    { role: 'Full-Stack Engineer (React/Node)', loc: 'Remote / Anywhere' },
    { role: 'Infra SRE — Edge & Mesh', loc: 'Hybrid / APAC' },
    { role: 'Community Ops — Digital Tribe', loc: 'Remote' },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black text-black dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/90 dark:bg-black/70 border-b border-green-400/40 shadow-sm dark:shadow-[0_0_10px_#22c55e]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 animate-pulse">
                HAXXY
              </span>
              <span className="ml-2 text-black dark:text-gray-400">Verse</span>
            </div>
            <Pill>Hack the System · Build the Future</Pill>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="home">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="roots">Lore</NavLink>
              <NavLink to="divisions">Modules</NavLink>
              <NavLink to="news">Logs</NavLink>
              <NavLink to="careers">Join</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </nav>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-black" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="md:hidden p-2 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-black dark:text-green-400" />
              ) : (
                <Menu className="w-6 h-6 text-black dark:text-green-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile slide-in menu */}
        <div
          className={`md:hidden fixed inset-y-0 right-0 w-3/4 bg-white dark:bg-black/80 shadow-xl transform transition-transform duration-300 z-50 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                HAXXY Verse
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-md hover:bg-green-100 dark:hover:bg-green-900/30"
              >
                <X className="w-5 h-5 text-black dark:text-green-400" />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              <NavLink to="home" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="roots" onClick={() => setMenuOpen(false)}>
                Lore
              </NavLink>
              <NavLink to="divisions" onClick={() => setMenuOpen(false)}>
                Modules
              </NavLink>
              <NavLink to="news" onClick={() => setMenuOpen(false)}>
                Logs
              </NavLink>
              <NavLink to="careers" onClick={() => setMenuOpen(false)}>
                Join
              </NavLink>
              <NavLink to="contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </nav>
            <div className="pt-4 border-t border-green-200 dark:border-green-800">
              <button
                onClick={() => {
                  setDarkMode((d) => !d);
                  setMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/20 transition"
              >
                {darkMode ? 'Switch to light' : 'Switch to dark'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero / Home */}
      <Section
        id="home"
        className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-20"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-green-600 dark:text-green-400">
              Hack Reality. Build Your Own Universe.
            </h1>
            <p className="mt-5 text-lg text-neutral-800 dark:text-gray-300 leading-relaxed">
              Haxxyverse is not a company—it's a movement. We code culture, bend
              rules, and carve borderless playgrounds for hackers, builders, and
              dreamers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToId('divisions')}
                className="px-5 py-3 rounded-2xl bg-green-500 text-black hover:bg-green-400 shadow-sm dark:shadow-[0_0_10px_#22c55e] transition"
              >
                Enter the Grid
              </button>
              <button
                onClick={() => scrollToId('roots')}
                className="px-5 py-3 rounded-2xl bg-white border border-green-500 text-green-600 hover:bg-green-50 transition dark:bg-black dark:text-green-400 dark:hover:bg-green-900/40"
              >
                Read the Manifesto
              </button>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              <Stat label="Hackers in Tribe" value="1337+" />
              <Stat label="Modules" value="5" />
              <Stat label="Years in Flux" value="∞" />
              <Stat label="Commits" value="10K+" />
            </div>
          </div>
          <div className="md:pl-8">
            <div className="relative rounded-3xl overflow-hidden border border-green-500 shadow-sm dark:shadow-[0_0_20px_#22c55e]">
              <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 via-transparent to-purple-500/20" />
            </div>
            <p className="text-sm text-neutral-600 dark:text-gray-500 mt-3">
              Symbolic visual: glitch, growth, and the code-driven ecosystem.
            </p>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">
              About Haxxyverse
            </h2>
            <p className="text-neutral-800 dark:text-gray-300 leading-relaxed">
              We build resilient, high-trust systems with a hacker heart. Our
              operating model blends disciplined engineering with play‑to‑win
              curiosity. Shared capabilities— infra, security, community, and
              go‑to‑market—power every module we launch.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Integrity by Design</Pill>
              <Pill>Move Fast, Fix Faster</Pill>
              <Pill>Impact Optics</Pill>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-black/70 border border-green-600 shadow-sm dark:shadow-[0_0_15px_#22c55e]">
              <div className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
                Leadership
              </div>
              <ul className="space-y-2 text-neutral-800 dark:text-gray-300">
                <li>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    hax
                  </span>{' '}
                  — Founder / Chief Hacker
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    core devs
                  </span>{' '}
                  — Code Labs & Infra
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    council
                  </span>{' '}
                  — Strategy & Community
                </li>
              </ul>
              <div className="mt-4 text-sm text-neutral-600 dark:text-gray-500">
                Titles evolve. The mission stays non‑negotiable.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Lore / Roots */}
      <Section
        id="roots"
        className="bg-white dark:bg-black/60 border-y border-green-200 dark:border-green-800"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-cyan-600 dark:text-cyan-400">
              Haxxy Lore
            </h2>
            <p className="text-neutral-800 dark:text-gray-300 leading-relaxed">
              Built on curiosity, discipline, and radical collaboration. We
              ship, we share, we protect the commons—and we leave systems better
              than we found them.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card
              title="The Manifesto"
              desc="29 rules? We boiled ours to 9: own your craft, ship small, share early, secure by default, respect time, measure truth, teach what you learn, stay kind, stay weird."
              cta="Read more"
              onClick={() => scrollToId('roots-timeline')}
            />
            <Card
              title="Origin Protocol"
              desc="From late‑night prototypes to community‑run modules. No VC script—just sweat, commits, and compound learning."
              cta="View timeline"
              onClick={() => scrollToId('roots-timeline')}
            />
            <Card
              title="Legacy in Action"
              desc="We carry these values into code labs, infra, and community—growth that respects people and the network."
              cta="See modules"
              onClick={() => scrollToId('divisions')}
            />
          </div>

          <div id="roots-timeline" className="mt-14 space-y-10">
            <TimelineItem
              year="2018–2020"
              title="Boot Sequence"
              text="Side‑project energy becomes a rhythm: nightly builds, weekend releases, early adopters who never left."
            />
            <TimelineItem
              year="2021–2023"
              title="Tribe Online"
              text="Community tools, micro‑grants, and contributor pathways turn users into co‑builders."
            />
            <TimelineItem
              year="Now"
              title="Open Galaxy"
              text="Inter‑module APIs, public roadmaps, and a bias for interoperability—because the future is multiplayer."
            />
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <FAQ
              q="What is Haxxyverse?"
              a={
                'A builder collective. A platform for experiments. A set of values that reward curiosity and care.'
              }
            />
            <FAQ
              q="How can I contribute?"
              a={
                'Join the community, pick an issue, ship a PR. Or propose a new module—if it helps the tribe, we back it.'
              }
            />
            <FAQ
              q="What do you stand for?"
              a={
                'Craft, honesty, velocity, and kindness. We believe the best tech cultures are generous and relentless.'
              }
            />
            <FAQ
              q="Do you partner with teams/brands?"
              a={'Yes. If incentives align and users win. Ping us via Contact.'}
            />
          </div>
        </div>
      </Section>

      {/* Modules (Divisions) */}
      <Section id="divisions" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-600 dark:text-cyan-400">
          Core Modules of the Haxxyverse
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((d) => (
            <div
              key={d.id}
              className="p-6 rounded-2xl bg-white dark:bg-black/70 border border-green-500 shadow-sm dark:shadow-[0_0_20px_#22c55e] hover:shadow-md dark:hover:shadow-[0_0_30px_#22c55e] transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">
                {d.title}
              </h3>
              <p className="text-neutral-800 dark:text-gray-300 leading-relaxed mb-4">
                {d.desc}
              </p>
              <div className="flex items-center gap-2">
                <Pill>⚡ Fast</Pill>
                <Pill>🕶 Secure</Pill>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Logs & Media */}
      <Section
        id="news"
        className="bg-white dark:bg-black/60 border-y border-green-200 dark:border-green-800"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">
              Logs & Media
            </h2>
            <button
              onClick={() => scrollToId('contact')}
              className="px-4 py-2 rounded-xl bg-purple-500 text-black hover:bg-purple-400 transition-colors shadow-sm dark:shadow-[0_0_10px_#a855f7]"
            >
              Submit Press Ping
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-black/70 border border-green-700 shadow-sm dark:shadow-[0_0_12px_#22c55e]"
              >
                <div className="text-sm text-neutral-500">Log • {year}</div>
                <div className="font-semibold mt-2 text-green-600 dark:text-green-400">
                  Release v{i}.x — New module unlocked
                </div>
                <p className="text-neutral-700 dark:text-gray-300 mt-2">
                  Patch notes, performance boosts, and quality‑of‑life upgrades
                  across the stack.
                </p>
                <button className="mt-3 text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                  Read more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Join / Careers */}
      <Section id="careers" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">
              Join the Crew
            </h2>
            <p className="text-neutral-800 mt-3">
              Work with builders who care. We invest in people, process, and
              purpose— so you can do the best work of your life.
            </p>
            <div className="mt-6 space-y-4">
              {jobs.map((j, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-black/70 border border-green-700 shadow-sm dark:shadow-[0_0_12px_#22c55e]"
                >
                  <div className="font-semibold text-green-600 dark:text-green-400">
                    {j.role}
                  </div>
                  <div className="text-sm text-neutral-700 dark:text-gray-400">
                    {j.loc}
                  </div>
                  <button className="mt-2 text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-black/70 border border-purple-600 shadow-sm dark:shadow-[0_0_12px_#a855f7]">
              <div className="font-semibold text-purple-600 dark:text-purple-400">
                Why Haxxyverse?
              </div>
              <ul className="list-disc list-inside text-neutral-800 dark:text-gray-300 mt-2 space-y-1">
                <li>Mission‑first, ego‑last</li>
                <li>Cross‑module mobility</li>
                <li>Learning loops & mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        className="bg-white dark:bg-black/60 border-y border-green-200 dark:border-green-800"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">
            Ping Us
          </h2>
          <div className="grid md:grid-cols-12 gap-8 mt-6">
            <div className="md:col-span-7">
              <div className="p-6 rounded-2xl bg-white dark:bg-black/70 border border-green-700 shadow-sm dark:shadow-[0_0_12px_#22c55e] space-y-4">
                <div>
                  <label className="block text-sm mb-1 text-neutral-700 dark:text-gray-300">
                    Handle
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-xl border border-green-700 bg-white dark:bg-black text-black dark:text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="your‑alias"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1 text-neutral-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 rounded-xl border border-green-700 bg-white dark:bg-black text-black dark:text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="you@haxxyverse.net"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-neutral-700 dark:text-gray-300">
                      Channel
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl border border-green-700 bg-white dark:bg-black text-black dark:text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Matrix / Telegram / X"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1 text-neutral-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-green-700 bg-white dark:bg-black text-black dark:text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us what you’re building or what you need"
                  />
                </div>
                <button className="px-5 py-3 rounded-2xl bg-green-500 text-black hover:bg-green-400 transition-colors shadow-sm dark:shadow-[0_0_10px_#22c55e]">
                  Send Ping
                </button>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="p-6 rounded-2xl bg-white dark:bg-black/70 border border-green-700 shadow-sm dark:shadow-[0_0_12px_#22c55e]">
                <div className="font-semibold mb-3 text-purple-600 dark:text-purple-400">
                  Nodes
                </div>
                <ul className="text-neutral-800 dark:text-gray-300 space-y-2">
                  <li>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      APAC
                    </span>{' '}
                    — Metro Manila
                  </li>
                  <li>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      IND
                    </span>{' '}
                    — Ahmedabad
                  </li>
                  <li>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      Caribbean
                    </span>{' '}
                    — Nevis
                  </li>
                </ul>
                <div className="mt-4 text-sm text-neutral-600 dark:text-gray-500">
                  For partnerships & media: press@haxxyverse.net
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 bg-white dark:bg-black border-t border-green-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                HAXXY
                <span className="text-black dark:text-gray-400">Verse</span>
              </div>
              <p className="text-neutral-700 dark:text-gray-500 mt-2">
                Not a brand. Not a corp. A movement. Code. Break. Rebuild.
              </p>
            </div>
            <div>
              <div className="font-semibold mb-2 text-green-600 dark:text-green-400">
                Explore
              </div>
              <ul className="space-y-2 text-black dark:text-gray-300">
                <li>
                  <button
                    onClick={() => scrollToId('about')}
                    className="hover:text-green-600 dark:hover:text-green-400"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId('roots')}
                    className="hover:text-green-600 dark:hover:text-green-400"
                  >
                    Lore
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId('divisions')}
                    className="hover:text-green-600 dark:hover:text-green-400"
                  >
                    Modules
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId('careers')}
                    className="hover:text-green-600 dark:hover:text-green-400"
                  >
                    Join
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2 text-green-600 dark:text-green-400">
                Legal
              </div>
              <ul className="space-y-2 text-black dark:text-gray-300">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2 text-green-600 dark:text-green-400">
                Contact
              </div>
              <ul className="space-y-2 text-black dark:text-gray-300">
                <li>admin@haxxyverse.net</li>
                <li>root@haxxyverse.net</li>
                <li>press@haxxyverse.net</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-green-200 dark:border-green-800 text-sm text-neutral-700 dark:text-gray-500 flex flex-wrap items-center justify-between gap-3">
            <div>© {year} Haxxyverse. All rights reserved.</div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-green-500 inline-block" />
              <span className="w-4 h-4 rounded-full bg-purple-500 inline-block" />
              <span className="w-4 h-4 rounded-full bg-cyan-500 inline-block" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
