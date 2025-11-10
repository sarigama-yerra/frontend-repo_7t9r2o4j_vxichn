import { useState } from 'react'
import { 
  HardHat,
  ClipboardList,
  FileSpreadsheet,
  CalendarCheck,
  ShieldCheck,
  Layers,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center shadow-sm">
              <HardHat className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-gray-900">SubOffice</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Customers</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="text-sm font-medium text-gray-600 hover:text-gray-900">Log in</a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-indigo-700">
              Get a demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              <a href="#features" className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Features</a>
              <a href="#solutions" className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Solutions</a>
              <a href="#testimonials" className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Customers</a>
              <a href="#pricing" className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">Pricing</a>
              <a href="#demo" className="rounded-md px-3 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600">Get a demo</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
      <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
      {children}
    </span>
  )
}

const features = [
  {
    title: 'Bids & Preconstruction',
    desc: 'Standardize bid invites, scope sheets, and comparisons to award faster.',
    icon: Layers,
  },
  {
    title: 'RFIs & Submittals',
    desc: 'Keep reviews on track with workflows, reminders, and clean logs.',
    icon: ClipboardList,
  },
  {
    title: 'Change Orders',
    desc: 'Track CORs from request to approval with full cost visibility.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Scheduling',
    desc: 'Coordinate field crews and milestones with calendar views and alerts.',
    icon: CalendarCheck,
  },
  {
    title: 'Compliance',
    desc: 'Collect COIs, lien waivers, and safety docs automatically.',
    icon: ShieldCheck,
  },
  {
    title: 'Team & Vendors',
    desc: 'Invite subs and partners to a secure portal with role-based access.',
    icon: Users,
  },
]

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <Badge>Built for subcontractors</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
              Run subcontractor projects with clarity, speed, and control
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              SubOffice brings bids, RFIs, submittals, change orders, scheduling, and compliance into a single, easy-to-use workspace. Less chasing, more building.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-sm hover:from-blue-700 hover:to-indigo-700">
                Book a live demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-6 py-3 text-gray-800 font-semibold hover:bg-gray-50">
                Explore features
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { label: 'Faster approvals', value: '3x' },
                { label: 'Setup time', value: '< 1 day' },
                { label: 'Customer CSAT', value: '97%' },
              ].map((s) => (
                <div key={s.label} className="rounded-lg bg-white/80 ring-1 ring-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-tr from-blue-200 via-indigo-200 to-transparent blur-2xl opacity-70" />
            <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-4 flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <span className="font-medium">Project Dashboard</span>
              </div>
              <div className="p-6 grid sm:grid-cols-2 gap-4">
                {features.slice(0,4).map((f) => (
                  <div key={f.title} className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-md bg-blue-50 text-blue-600 grid place-items-center">
                        <f.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{f.title}</p>
                        <p className="text-xs text-gray-500">Quick glance metrics</p>
                      </div>
                    </div>
                    <div className="mt-4 h-24 w-full rounded-md bg-gray-50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <p className="text-center text-sm font-medium text-gray-500">Trusted by modern subcontractors</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-8 opacity-70">
            {['Summit Electrical','BlueRock HVAC','Northline Concrete','Apex Interiors','Granite Steel'].map((n) => (
              <span key={n} className="text-sm text-gray-500">{n}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything you need to run the job</h2>
          <p className="mt-4 text-gray-600">Purpose-built workflows for the way subcontractors actually work — from bid to closeout.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-blue-50 text-blue-600 grid place-items-center group-hover:scale-105 transition-transform">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" /> Easy onboarding</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" /> Role-based permissions</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" /> Clean exports and logs</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionStrip() {
  return (
    <section id="solutions" className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge>Field-ready</Badge>
            <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Built for the office and the field</h3>
            <p className="mt-4 text-gray-600">Mobile-friendly views, offline capture, and shareable links keep PMs, supers, and foremen in sync — without dozens of phone calls.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { icon: CalendarCheck, title: 'Daily reports', blurb: 'Notes, photos, and manpower in minutes.' },
                { icon: ShieldCheck, title: 'Safety first', blurb: 'Toolbox talks and incident tracking.' },
                { icon: ClipboardList, title: 'Closeout', blurb: 'Punch list to final docs in one place.' },
                { icon: Users, title: 'Collaboration', blurb: 'Vendors work from a simple portal.' },
              ].map((i) => (
                <div key={i.title} className="rounded-xl border border-gray-200 p-4 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-indigo-50 text-indigo-600 grid place-items-center">
                      <i.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{i.title}</p>
                      <p className="text-sm text-gray-600">{i.blurb}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-200 via-blue-200 to-transparent blur-2xl opacity-70" />
              <div className="aspect-[16/10] w-full rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
                <div className="h-10 w-full bg-gray-100 border-b border-gray-200 flex items-center gap-2 px-3">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="grid md:grid-cols-3 gap-4 p-6">
                  {['Schedule','RFIs','Submittals','CORs','Docs','Compliance'].map((t) => (
                    <div key={t} className="rounded-lg border border-gray-200 p-4">
                      <p className="text-sm font-medium text-gray-900">{t}</p>
                      <div className="mt-3 h-20 rounded-md bg-gray-50" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    {
      quote: 'Approvals that took weeks now happen in days. Our PMs finally have one clean source of truth.',
      name: 'Operations Director',
      company: 'Summit Electrical',
    },
    {
      quote: 'Vendors actually like using it. The portal cut our email volume by half in the first month.',
      name: 'Project Executive',
      company: 'Apex Interiors',
    },
    {
      quote: 'Onboarding was painless. We were live on a new job the same day.',
      name: 'Project Manager',
      company: 'BlueRock HVAC',
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Teams move faster with SubOffice</h2>
          <p className="mt-4 text-gray-600">Real stories from contractors who replaced spreadsheets and email chains.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-800">“{q.quote}”</p>
              <figcaption className="mt-4 text-sm text-gray-500">{q.name} • {q.company}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 text-white">
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-20 bg-[radial-gradient(40rem_40rem_at_80%_50%,white,transparent)]" />
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">See SubOffice in action</h3>
            <p className="mt-3 text-white/90">Start with a guided demo tailored to your workflow. No heavy lift. No long contracts.</p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-blue-700 font-semibold shadow-sm hover:bg-blue-50">
              Book a demo <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/60 px-6 py-3 text-white font-semibold hover:bg-white/10">
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center">
              <HardHat className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold text-gray-900">SubOffice</span>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} SubOffice. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <main>
        <Hero />
        <Features />
        <SolutionStrip />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
