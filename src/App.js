import React, { useMemo, useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

// =============================
// Bishnoi Omniverse – Dark/Light Mode Version
// - Added dark mode toggle functionality
// - Dark mode classes applied throughout
// - Smooth transitions between modes
// =============================

// Small helper for smooth scroll
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const NavLink = ({ to, children }) => (
  <button
    onClick={() => scrollToId(to)}
    className="text-sm md:text-base px-3 py-2 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/50 transition"
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
  <div className="flex flex-col items-start p-4 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur shadow-sm border border-gray-100 dark:border-gray-700">
    <div className="text-3xl font-semibold tracking-tight dark:text-white">
      {value}
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{label}</div>
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
    {children}
  </span>
);

const Card = ({ title, desc, cta, onClick }) => (
  <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1">
    <h3 className="text-lg font-semibold mb-2 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
      {desc}
    </p>
    <button
      onClick={onClick}
      className="text-indigo-700 dark:text-indigo-400 group-hover:text-indigo-900 dark:group-hover:text-indigo-300 font-medium inline-flex items-center"
    >
      {cta} <span className="ml-2">→</span>
    </button>
  </div>
);

const TimelineItem = ({ year, title, text }) => (
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-3 md:col-span-2">
      <div className="sticky top-24">
        <div className="text-xl md:text-2xl font-semibold text-amber-700 dark:text-amber-400">
          {year}
        </div>
      </div>
    </div>
    <div className="col-span-9 md:col-span-10">
      <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
        <div className="font-semibold mb-1 dark:text-white">{title}</div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  </div>
);

const FAQ = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between transition-colors"
      >
        <span className="font-medium pr-4 dark:text-white">{q}</span>
        <span className="text-gray-500 dark:text-gray-400">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-gray-700">
          {a}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
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
        id: 'pharma',
        title: 'Bishnoi Pharmaceuticals',
        desc: 'Global B2B partner for specialty and life‑saving medicines. Focus on oncology, biologics, critical care, and tender supplies—backed by robust sourcing, quality, and compliance.',
      },
      {
        id: 'hydroponics',
        title: 'Bishnoi Hydroponics',
        desc: 'Sustainable, soil‑less cultivation for premium export produce. Training programs for farmers, climate‑smart practices, and controlled‑environment farming.',
      },
      {
        id: 'dairy',
        title: 'Bishnoi Dairy',
        desc: 'Ethical, animal‑first dairy built on Bishnoi values. Clean nutrition, quality‑assured processing, and community livelihoods.',
      },
      {
        id: 'trust',
        title: 'Naresh Bishnoi Trust',
        desc: 'Social impact arm—education, farmer empowerment, rural healthcare support, and environmental stewardship.',
      },
      {
        id: 'future',
        title: 'Future Ventures',
        desc: 'Emerging plays in exports, agri‑tech and green initiatives—aligned with the Omniverse vision.',
      },
    ],
    []
  );

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-b from-amber-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-100 dark:border-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Simple wordmark using tricolor accent underline */}
            <div className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-green-600">
                BISHNOI
              </span>
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                Omniverse
              </span>
            </div>
            <Pill>Global Vision · Indian Values</Pill>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="home">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="roots">Our Roots</NavLink>
              <NavLink to="divisions">Divisions</NavLink>
              <NavLink to="news">News</NavLink>
              <NavLink to="careers">Careers</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </nav>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
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
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Transforming Sectors. Empowering Communities. Building a
              Borderless Future.
            </h1>
            <p className="mt-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Bishnoi Omniverse is a diversified group rooted in a 500‑year
              legacy of conservation and compassion. We combine global scale
              with Indian values to build enduring businesses across
              Pharmaceuticals, Hydroponics, Dairy and Social Impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToId('divisions')}
                className="px-5 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Explore Divisions
              </button>
              <button
                onClick={() => scrollToId('roots')}
                className="px-5 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Discover Our Roots
              </button>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              <Stat label="Countries Served" value="30+" />
              <Stat label="Divisions" value="4+" />
              <Stat label="Years of Legacy" value=">500" />
              <Stat label="Lives Touched" value="1M+" />
            </div>
          </div>
          <div className="md:pl-8">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 via-transparent to-orange-500/20" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Symbolic visual: growth, connection and a future‑ready ecosystem.
            </p>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We are builders of resilient, high‑trust businesses. Our operating
              model blends disciplined execution with long‑term, values‑driven
              leadership. The Omniverse approach enables shared
              capabilities—quality, compliance, supply chains and community
              partnerships—across multiple sectors and geographies.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Integrity</Pill>
              <Pill>Innovation</Pill>
              <Pill>Impact</Pill>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="font-semibold mb-2 dark:text-white">
                Leadership
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-medium">Naresh Bishnoi</span> — Group
                  Founder & Chair
                </li>
                <li>
                  <span className="font-medium">[Your Son's Name]</span> — CEO,
                  Life Sciences & Agri
                </li>
                <li>
                  <span className="font-medium">Advisory Board</span> — Industry
                  & community leaders
                </li>
              </ul>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                *Update these roles/titles anytime; the layout adapts to content
                length.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Roots – standalone section */}
      <Section
        id="roots"
        className="bg-white/60 dark:bg-gray-800/60 border-y border-gray-100 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Roots: The Bishnoi Legacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Bishnoi community, founded in the 15th century by Guru
              Jambheshwar Ji Maharaj, has lived a 29‑principle code centred on
              conservation, compassion and disciplined living. This ethos
              inspires our work across the Omniverse today.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card
              title="29 Principles"
              desc="From protecting trees and wildlife to water stewardship and simple living—timeless guidance that aligns with modern sustainability."
              cta="Read more"
              onClick={() => scrollToId('roots-timeline')}
            />
            <Card
              title="Khejarli Courage"
              desc="In 1730, Amrita Devi and 360+ Bishnois sacrificed their lives to save sacred Khejri trees—an early environmental movement."
              cta="View timeline"
              onClick={() => scrollToId('roots-timeline')}
            />
            <Card
              title="Legacy in Action"
              desc="We carry these values into pharma, agri and social initiatives—building growth that respects nature and people."
              cta="See how"
              onClick={() => scrollToId('divisions')}
            />
          </div>

          <div id="roots-timeline" className="mt-14 space-y-10">
            <TimelineItem
              year="1485–1536"
              title="Origin of a Movement"
              text="Guru Jambheshwar Ji articulates 29 principles in the Thar desert after a devastating drought, guiding a community toward ecological balance and compassion."
            />
            <TimelineItem
              year="1730"
              title="Khejarli Massacre"
              text="Amrita Devi Bishnoi and hundreds of Bishnois embrace Khejri trees to stop felling; their martyrdom becomes a global symbol of environmental stewardship."
            />
            <TimelineItem
              year="Present"
              title="Guardians of Wildlife"
              text="Bishnoi villages proactively protect blackbucks, chinkaras and peacocks—raising orphaned fawns, preserving trees and water, and resisting poaching."
            />
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <FAQ
              q="Who are the Bishnois?"
              a={
                'A community from Rajasthan, India, founded by Guru Jambheshwar Ji Maharaj. They follow 29 principles that promote sustainability, compassion and disciplined living.'
              }
            />
            <FAQ
              q="What is the Khejarli story?"
              a={
                'In 1730, to prevent the cutting of sacred Khejri trees, Amrita Devi and 360+ Bishnois sacrificed their lives—an early environmental movement that continues to inspire the world.'
              }
            />
            <FAQ
              q="How does this legacy shape Bishnoi Omniverse?"
              a={
                'Our operating ethos—Integrity, Innovation, Impact—translates the Bishnoi values into modern enterprises across pharma, hydroponics, dairy and social development.'
              }
            />
            <FAQ
              q="Can I partner with your Trust or projects?"
              a={
                'Yes. We collaborate with NGOs, hospitals, universities and impact investors. Reach us via the Contact section for partnerships.'
              }
            />
          </div>
        </div>
      </Section>

      {/* Divisions */}
      <Section id="divisions" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Divisions of Bishnoi Omniverse
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((d) => (
            <div
              key={d.id}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all dark:hover:shadow-gray-900/50 hover:shadow-gray-300/70"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {d.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {d.desc}
              </p>
              <div className="flex items-center gap-2">
                <Pill>Quality First</Pill>
                <Pill>Sustainability</Pill>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* News & Media */}
      <Section
        id="news"
        className="bg-white/60 dark:bg-gray-800/60 border-y border-gray-100 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">News & Media</h2>
            <button
              onClick={() => scrollToId('contact')}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Submit Press Query
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Press Note • {year}
                </div>
                <div className="font-semibold mt-2 dark:text-white">
                  Sample headline for a group announcement
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Short summary of a milestone—partnerships, certifications, CSR
                  campaigns or market entries.
                </p>
                <button className="mt-3 text-indigo-700 dark:text-indigo-400 font-medium hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors">
                  Read more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Careers */}
      <Section id="careers" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold">Careers</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Join a values‑driven, growth‑oriented team. We invest in people,
              processes and purpose—so you can do the best work of your career.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  role: 'Regulatory Affairs Manager – Pharmaceuticals',
                  loc: 'Ahmedabad / Hybrid',
                },
                {
                  role: 'Hydroponics Operations Lead',
                  loc: 'Rajasthan / On‑site',
                },
                {
                  role: 'Dairy Supply Chain Executive',
                  loc: 'Jodhpur / On‑site',
                },
              ].map((j, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  <div className="font-semibold dark:text-white">{j.role}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {j.loc}
                  </div>
                  <button className="mt-2 text-indigo-700 dark:text-indigo-400 font-medium hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors">
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <div className="font-semibold dark:text-white">
                Why Bishnoi Omniverse?
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                <li>Mission‑aligned, ethical growth</li>
                <li>Cross‑division opportunities</li>
                <li>Learning & leadership pathways</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        className="bg-white/60 dark:bg-gray-800/60 border-y border-gray-100 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <div className="grid md:grid-cols-12 gap-8 mt-6">
            <div className="md:col-span-7">
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
                <div>
                  <label className="block text-sm mb-1 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 dark:text-gray-300">
                      Phone
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="+91‑"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="How can we help?"
                  />
                </div>
                <button className="px-5 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                  Send Inquiry
                </button>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="font-semibold mb-3 dark:text-white">
                  Offices
                </div>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <span className="font-medium">India (HO)</span> — Ahmedabad,
                    Gujarat
                  </li>
                  <li>
                    <span className="font-medium">Philippines</span> — Metro
                    Manila
                  </li>
                  <li>
                    <span className="font-medium">Caribbean</span> — Nevis
                  </li>
                </ul>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  For media & partnerships: partnerships@bishnoiomniverse.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold">
                BISHNOI{' '}
                <span className="text-gray-700 dark:text-gray-300">
                  Omniverse
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Global ecosystem of values‑driven businesses—built on a 500‑year
                legacy of stewardship and service.
              </p>
            </div>
            <div>
              <div className="font-semibold mb-2 dark:text-white">Explore</div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <button
                    onClick={() => scrollToId('about')}
                    className="hover:underline"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId('roots')}
                    className="hover:underline"
                  >
                    Our Roots
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId('divisions')}
                    className="hover:underline"
                  >
                    Divisions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId('careers')}
                    className="hover:underline"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2 dark:text-white">Legal</div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2 dark:text-white">Contact</div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>ceo@bishnoiomniverse.com</li>
                <li>sales@bishnoipharmaceuticals.com</li>
                <li>csr@nareshbishnoitrust.org</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 flex flex-wrap items-center justify-between gap-3">
            <div>© {year} Bishnoi Omniverse. All rights reserved.</div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-orange-500 inline-block" />
              <span className="w-4 h-4 rounded-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 inline-block" />
              <span className="w-4 h-4 rounded-full bg-green-600 inline-block" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
