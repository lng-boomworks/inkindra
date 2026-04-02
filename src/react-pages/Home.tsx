import { FadeIn } from "@/components/ui/fade-in";
import { Button, TrustPill, ScopeNotice, CheckItem } from "@/components/ui/shared";

import { HeartHandshake, CalendarClock, Home as HomeIcon, Users, Navigation, ClipboardList, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="bg-cream pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <FadeIn>
              <div className="max-w-xl">
                <span className="inline-block text-sage font-semibold uppercase tracking-wider text-sm mb-6">
                  Registered Nurse-led · Shropshire & surrounds
                </span>
                <h1 className="mb-6 text-balance">
                  Registered nurse-led care navigation — so your family isn't doing it alone.
                </h1>
                <p className="text-xl text-text-muted mb-8 text-balance">
                  We coordinate appointments, communication and next steps across NHS, private and community services — so nothing gets lost between teams.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Button href="https://calendly.com/kate-phillips-inkindra/30min" external>
                    Talk to a Care Navigator
                  </Button>
                  <Button variant="ghost" href="/services">
                    See how we help
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <TrustPill text="Registered Nurse-led" />
                  <TrustPill text="DBS checked" />
                  <TrustPill text="Insured" />
                  <TrustPill text="ICO-registered" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="relative">
                {/* Decorative Card */}
                <div className="bg-white rounded-2xl shadow-xl shadow-teal-deep/5 overflow-hidden border border-border">
                  <div className="h-2 w-full bg-gradient-to-r from-teal-mid via-sage to-lavender"></div>
                  <div className="p-8 md:p-10">
                    <div className="grid grid-cols-2 gap-8 mb-10">
                      <div>
                        <div className="text-4xl font-serif text-teal-deep font-semibold mb-2">90,500</div>
                        <div className="text-sm font-medium text-text-muted leading-tight">Delayed bed days per week nationally</div>
                      </div>
                      <div>
                        <div className="text-4xl font-serif text-teal-deep font-semibold mb-2">1</div>
                        <div className="text-sm font-medium text-text-muted leading-tight">Conversation that starts complete care co-ordination</div>
                      </div>
                    </div>

                    <div className="bg-lavender-light/50 p-6 rounded-xl border-l-4 border-lavender text-text-body relative">
                      <p className="italic font-medium text-lg leading-relaxed mb-4">
                        "In 2024, I navigated complex care journeys for my late father and youngest daughter. That experience reinforced why every family deserves an advocate."
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-pale flex items-center justify-center text-teal-deep font-serif font-bold text-xl">K</div>
                        <div>
                          <div className="font-semibold text-teal-deep text-sm">Kate Phillips</div>
                          <div className="text-xs text-text-muted">Founder, Registered Nurse</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-4 md:-right-8 bg-teal-deep text-white px-6 py-4 rounded-xl shadow-lg font-medium text-sm border-2 border-white transform rotate-2">
                  Initial call — Always free
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-mid font-medium uppercase tracking-wide text-sm mb-4 block">What we do</span>
            <h2 className="mb-6">Practical support, every step of the way</h2>
            <p className="text-lg text-text-muted">
              We are not here to replace your NHS team or social care. We are here to help you use them more effectively — and to make sure your voice is heard.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Navigation,
                title: "Care Navigation",
                desc: "Coordination across NHS, private & community services. Managing letters, forms and clear hand-offs.",
                link: "/services"
              },
              {
                icon: ClipboardList,
                title: "Appointment Prep & Accompaniment",
                desc: "Preparing questions, attending key appointments, taking notes and agreeing next steps.",
                link: "/services"
              },
              {
                icon: HomeIcon,
                title: "Admission & Discharge Coordination",
                desc: "Home-readiness checklists, non-clinical set-up, and signposting to registered care providers.",
                featured: true,
                link: "/services"
              },
              {
                icon: HeartHandshake,
                title: "Carer Coaching & Practical Support",
                desc: "Weekly check-ins, briefings, admin support, and signposting for benefits/allowances.",
                link: "/services"
              },
              {
                icon: CalendarClock,
                title: "Ongoing Navigation Support",
                desc: "Long-term retained support for managing complex, multi-layered chronic conditions.",
                link: "/services"
              },
              {
                icon: Users,
                title: "Support for Referrers",
                desc: "Complementing GPs, discharge teams, and social prescribers with non-clinical coordination.",
                accent: "lavender",
                link: "/for-referrers"
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <a href={service.link} className="block h-full group">
                  <div className={`h-full p-8 rounded-2xl border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${
                    service.featured 
                      ? "bg-teal-deep border-teal-deep text-white shadow-md" 
                      : service.accent === "lavender"
                      ? "bg-lavender-light/30 border-lavender/20 hover:border-lavender"
                      : "bg-white border-border hover:border-teal-mid"
                  }`}>
                    <service.icon className={`w-8 h-8 mb-6 ${service.featured ? "text-teal-light" : service.accent === "lavender" ? "text-lavender" : "text-teal-deep"}`} strokeWidth={1.5} />
                    <h3 className={`text-xl mb-3 ${service.featured ? "text-white" : ""}`}>{service.title}</h3>
                    <p className={`mb-6 leading-relaxed ${service.featured ? "text-teal-light" : "text-text-muted"}`}>
                      {service.desc}
                    </p>
                    <span className={`inline-flex items-center text-sm font-medium group-hover:underline underline-offset-4 ${
                      service.featured ? "text-white" : "text-teal-mid"
                    }`}>
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <ScopeNotice>
              We provide independent advocacy, navigation and non-clinical support. <strong>We do not deliver personal care or clinical treatment.</strong> Where these are required, we coordinate with your NHS/private clinicians and CQC-registered providers.
            </ScopeNotice>
          </FadeIn>
        </div>
      </section>

      {/* HOW IT WORKS (Summary) */}
      <section className="py-24 bg-cream border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-teal-mid font-medium uppercase tracking-wide text-sm mb-4 block">The process</span>
            <h2 className="mb-16">A clear path forward, always</h2>
          </FadeIn>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 relative mb-16">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-border z-0"></div>
            
            {[
              "Free initial phone conversation",
              "Assessment & plan",
              "Joined-up support",
              "Delivery & check-ins",
              "Review & next steps"
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative z-10 w-full md:w-1/5 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-cream shadow-sm flex items-center justify-center text-xl font-serif font-bold text-teal-deep mb-4">
                  {i + 1}
                </div>
                <h4 className="font-medium text-text-body px-2">{step}</h4>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <Button variant="ghost" href="/how-it-works">See the full process →</Button>
          </FadeIn>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-24 bg-teal-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white p-10 rounded-2xl border border-border h-full shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6 text-teal-deep" />
                </div>
                <h3 className="text-2xl mb-6">Individuals & Families</h3>
                <ul className="space-y-4 mb-8">
                  <CheckItem>Approaching or recovering from hospital admission</CheckItem>
                  <CheckItem>Managing multiple conditions and appointments</CheckItem>
                  <CheckItem>Living at a distance from relatives needing support</CheckItem>
                  <CheckItem>Feeling overwhelmed by "who does what"</CheckItem>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-2xl border border-border h-full shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-lavender" />
                </div>
                <h3 className="text-2xl mb-6">Referrers & Professionals</h3>
                <ul className="space-y-4 mb-8">
                  <CheckItem>GP practices & PCN social prescribing teams</CheckItem>
                  <CheckItem>Hospital discharge and flow teams</CheckItem>
                  <CheckItem>Community pharmacies & voluntary sector</CheckItem>
                  <CheckItem>Private hospitals needing joined-up community support</CheckItem>
                </ul>
                <a href="/for-referrers" className="text-teal-mid font-medium hover:underline mt-4 inline-block">
                  Learn more in For Referrers →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT KATE TEASER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <FadeIn className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-teal-pale relative z-10">
                <img 
                  src={`${import.meta.env.BASE_URL}images/kate-profile.png`} 
                  alt="Kate Phillips, Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cream rounded-full z-0"></div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-7">
              <h2 className="mb-6 text-balance">Registered Nurse-led, independent and local to Shropshire</h2>
              <p className="text-lg text-text-muted mb-8">
                With extensive experience across the NHS, community settings, and private health insurance, I've seen firsthand how difficult it can be to hold everything together while coping with illness.
              </p>
              
              <blockquote className="border-l-4 border-teal-mid pl-6 py-2 mb-8 bg-ivory/50 rounded-r-lg">
                <p className="text-xl font-serif italic text-teal-deep">
                  "Our mission is to ensure every patient and family has the same level of knowledgeable, calm advocacy."
                </p>
              </blockquote>

              <div className="flex flex-wrap gap-2 mb-10">
                <TrustPill text="Registered Nurse (NMC)" />
                <TrustPill text="RAF-trained" />
                <TrustPill text="Complex care pathways" />
              </div>

              <Button variant="ghost" href="/about">Learn more about Kate →</Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PRICING & REFERRER SPLIT */}
      <section className="grid md:grid-cols-2">
        <div className="bg-ivory py-20 px-8 md:px-16 lg:px-24">
          <FadeIn>
            <h3 className="text-3xl mb-6">Clear, flexible pricing</h3>
            <p className="text-text-muted mb-8 text-lg">
              Straightforward pricing with one-off sessions or short packages, depending on your needs. Travel within our core Shropshire area is included.
            </p>
            <ul className="space-y-4 mb-10">
              <CheckItem>Initial conversation – always free</CheckItem>
              <CheckItem>Session-based and package options</CheckItem>
              <CheckItem>No long-term contracts or tie-ins</CheckItem>
            </ul>
            <Button variant="outline-white" className="!border-teal-deep !text-teal-deep hover:!bg-teal-deep/5" href="/packages">
              View pricing & packages →
            </Button>
          </FadeIn>
        </div>
        
        <div className="bg-teal-pale py-20 px-8 md:px-16 lg:px-24">
          <FadeIn delay={0.2}>
            <h3 className="text-3xl mb-6">Support for referrers</h3>
            <p className="text-text-muted mb-8 text-lg">
              We complement existing practice teams by taking on the non-clinical coordination and communication that often falls between the cracks.
            </p>
            <ul className="space-y-4 mb-10">
              <CheckItem>Independent, Registered Nurse-led support</CheckItem>
              <CheckItem>Clear communication & agreed boundaries</CheckItem>
              <CheckItem>Local to SaTH, RJAH & Whitchurch catchment</CheckItem>
            </ul>
            <Button variant="ghost" href="/for-referrers">
              More information for referrers →
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-teal-deep text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-white mb-6">Feeling stuck or overwhelmed by care coordination?</h2>
            <p className="text-teal-light text-lg mb-10 max-w-2xl mx-auto">
              If you're in Shropshire and trying to juggle hospital, GP, community and caring responsibilities, you don't have to do it alone. A short conversation can clarify whether InKindRa is the right fit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="white" href="https://calendly.com/kate-phillips-inkindra/30min" external>
                Request a free call
              </Button>
              <Button variant="outline-white" href="/contact">
                Send us a message
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
