import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Stethoscope,
  Baby,
  ShieldCheck,
  Cpu,
  Network,
  Microscope,
  BookOpen,
  GraduationCap,
  Briefcase,
  Mail,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  Code2,
  FlaskConical,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

const RESEARCH = [
  {
    title:
      "Active vs. Passive Social Media Use and its Impact on Teen Emotional Well-being: A Cross-sectional Empirical Investigation with Mediation Analysis",
    venue: "SSRN • Independent Research",
    date: "April 2026",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6526140",
    tag: "Health Psychology",
  },
  {
    title:
      "IP Tracers in Python: A Comprehensive Academic Analysis of Technical Implementation, Security Threats, and Evidence-Based Protective Strategies",
    venue: "SSRN • Independent Research",
    date: "February 2026",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6209678",
    tag: "Cybersecurity",
  },
  {
    title:
      "Cybersecurity in Government Systems: Integrating Primary Analysis of Challenges and Strategic Solutions",
    venue: "Academia.edu • Independent Research",
    date: "2026",
    url: "https://www.academia.edu/166238161/Cybersecurity_in_Government_Systems_Integrating_Primary_Analysis_of_Challenges_and_Strategic_Solutions?source=swp_share",
    tag: "Cybersecurity",
  },
];

const SKILL_GROUPS = [
  {
    title: "Medicine & Healthcare",
    icon: Stethoscope,
    items: ["Pediatrics", "Healthcare Innovation", "Medical Research", "Healthcare Technology"],
  },
  {
    title: "Technology",
    icon: Cpu,
    items: [
      "Cybersecurity",
      "Information & Communication Technology",
      "Computer Networking",
      "System Troubleshooting",
      "Programming Fundamentals",
      "Artificial Intelligence Research",
    ],
  },
  {
    title: "Research",
    icon: Microscope,
    items: ["Independent Researcher", "Academic Writing", "Technology & Healthcare Research"],
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground pulse-ring">
            <Activity className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Khert L. Garde</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-3 text-sm border-b border-border last:border-0">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-medical opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-10 items-center relative">
        <div className="md:col-span-3 fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Aspiring Medical Doctor · Future Pediatrician
          </div>
          <h1 className="mt-5 text-5xl md:text-7xl font-semibold leading-[1.02]">
            Khert Laguna <span className="italic text-primary">Garde</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            A technology-driven aspiring physician passionate about integrating healthcare,
            medical innovation, cybersecurity, and information technology to improve future
            healthcare systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-lg shadow-primary/20">
              View Research <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-primary/40 hover:text-primary transition">
              Contact <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "3", v: "Publications" },
              { k: "5+", v: "Disciplines" },
              { k: "2007", v: "Est." },
            ].map((s) => (
              <div key={s.v} className="card-clinical px-4 py-3">
                <div className="font-display text-2xl text-primary">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 fade-up">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/40 to-mint/30 blur-2xl" />
            <div className="relative card-clinical p-6">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-border bg-secondary/60">
                <img
                  src="/images/profile.png"
                  alt="Khert Laguna Garde"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <div>
                  <div className="font-medium">Khert L. Garde</div>
                  <div className="text-xs text-muted-foreground">MD Aspirant · Pediatrics</div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-mint/20 px-2.5 py-1 text-xs text-mint-foreground">
                  <Sparkles className="h-3 w-3" /> Est. 2007
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl mb-12">
      <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">{eyebrow}</div>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}

function About() {
  const pillars = [
    { icon: Baby, title: "Pediatric Care", body: "Committed to a future in pediatrics — advocating for compassionate, evidence-based care for children." },
    { icon: ShieldCheck, title: "Cybersecurity", body: "Studying the intersection of digital safety and clinical systems that patients depend on." },
    { icon: FlaskConical, title: "Research Mindset", body: "An independent researcher exploring healthcare, technology, and human behavior." },
    { icon: Code2, title: "Technology", body: "Grounded in ICT and Computer Science — using code and networks to strengthen healthcare." },
  ];
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Medicine at the intersection of technology and research."
          description="I am an aspiring medical doctor with a long-term goal of specializing in Pediatrics. My path bridges clinical aspirations with a background in Information and Communication Technology, Computer Science, and independent research — with a focus on how emerging technologies and cybersecurity can shape safer, smarter healthcare."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="card-clinical p-6 hover:-translate-y-1 transition-transform">
              <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const items = [
    {
      school: "Cotabato Foundation College of Science and Technology",
      program: "Bachelor of Science in Computer Science",
      status: "Undergraduate",
      body: "Studying programming, computer science fundamentals, software development, and information technology concepts.",
      icon: GraduationCap,
    },
    {
      school: "President Roxas National High School",
      program: "Information and Communication Technology (ICT) — Computer System Servicing (CSS)",
      status: "Completed",
      body: "Foundational training in computer hardware, software troubleshooting, networking, system maintenance, and technical support.",
      icon: BookOpen,
    },
  ];
  return (
    <section id="education" className="py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title="Academic timeline" />
        <ol className="relative border-l border-border ml-3 space-y-8">
          {items.map((it) => (
            <li key={it.school} className="pl-8 relative">
              <span className="absolute -left-[13px] top-1 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center ring-4 ring-background">
                <it.icon className="h-3 w-3" />
              </span>
              <div className="card-clinical p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl">{it.school}</h3>
                  <span className="text-xs rounded-full bg-mint/20 text-mint-foreground px-2.5 py-1">{it.status}</span>
                </div>
                <p className="mt-1 text-sm text-primary font-medium">{it.program}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Experience" title="Professional experience" />
        <div className="card-clinical p-8 md:p-10 max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl">Customer Service Representative</h3>
                <span className="text-xs rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">3 Months</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Assisted customers, handled inquiries, and resolved concerns while providing
                accurate information. Documented interactions, maintained customer satisfaction,
                and developed professional communication and problem-solving skills.
              </p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  "Customer communication",
                  "Problem solving",
                  "Accurate documentation",
                  "Professionalism under pressure",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A cross-disciplinary toolkit"
          description="Skills and interests spanning medicine, technology, and research — the three currents that shape my work."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="card-clinical p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="text-xs rounded-full border border-border bg-background/70 px-3 py-1.5 text-foreground/80 hover:border-primary/40 hover:text-primary transition">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Research & Publications"
          title="Independent research"
          description="Peer-hosted and open academic writing on healthcare, cybersecurity, and technology."
        />
        <div className="space-y-4">
          {RESEARCH.map((r, i) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block card-clinical p-6 md:p-7 hover:border-primary/50 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="flex items-center gap-3 md:w-40 shrink-0">
                  <span className="font-display text-3xl text-primary/80">0{i + 1}</span>
                  <span className="text-xs rounded-full bg-accent/60 px-2.5 py-1 text-accent-foreground">{r.tag}</span>
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                  <h3 className="font-display text-lg md:text-xl leading-snug group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>{r.venue}</span>
                    <span>·</span>
                    <span>{r.date}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-1 shrink-0 inline-flex items-center gap-1.5 text-sm text-primary">
                  Read paper <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const email = "dr.khert.pediatrics.work@gmail.com";
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const from = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${from ? ` <${from}>` : ""}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus("ready");
    formRef.current?.reset();
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about medicine, tech, and research."
            description="Open to research collaboration, mentorship, and thoughtful conversations about the future of healthcare."
          />
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 card-clinical px-5 py-4 hover:border-primary/40 transition"
          >
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-medium">{email}</div>
            </div>
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Social profiles will be added here in the future.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="card-clinical p-6 md:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Name</span>
              <input required name="name" type="text" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Email</span>
              <input required name="email" type="email" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">Message</span>
            <textarea required name="message" rows={5} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          </label>
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-lg shadow-primary/20">
            Send message <ArrowRight className="h-4 w-4" />
          </button>
          {status === "ready" && (
            <p className="text-xs text-mint-foreground">Opening your email client…</p>
          )}
          <p className="text-[11px] text-muted-foreground">
            Submitting opens your default email client with the message pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Network className="h-4 w-4 text-primary" />
          <span>© {new Date().getFullYear()} Khert Laguna Garde. All rights reserved.</span>
        </div>
        <div>Medicine · Pediatrics · Technology · Research</div>
      </div>
    </footer>
  );
}
