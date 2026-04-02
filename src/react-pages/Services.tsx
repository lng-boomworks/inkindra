import { FadeIn } from "@/components/ui/fade-in";
import { Button, ScopeNotice, CheckItem } from "@/components/ui/shared";
import { Navigation, ClipboardList, Home, HeartHandshake } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "navigation",
      icon: Navigation,
      title: "Advocacy & Care Navigation",
      desc: "When multiple teams are involved, it's easy to lose track of who is responsible for what. We act as your central point of contact to make sense of the system.",
      bullets: [
        "Clarifying who is involved in your care and what they are responsible for",
        "Helping you prepare questions, notes and key information for appointments",
        "Supporting you to understand information, options and next steps",
        "Liaising with teams (with your consent) to clarify plans and follow-up"
      ]
    },
    {
      id: "appointments",
      icon: ClipboardList,
      title: "Appointment Preparation & Accompaniment",
      desc: "Important appointments can be overwhelming. We ensure you go in prepared and leave with a clear understanding of what was said.",
      bullets: [
        "Organising diaries and appointment schedules",
        "Preparing paperwork, letters, summaries and medication information",
        "Agreeing what you want to ask, say or check in each appointment",
        "Attending key appointments with you as an advocate, where appropriate and agreed"
      ]
    },
    {
      id: "discharge",
      icon: Home,
      title: "Discharge Coordination & Home Set-Up",
      desc: "The transition from hospital to home is often chaotic. We manage the non-clinical logistics to ensure a safer, smoother return.",
      bullets: [
        "Liaising with teams about discharge plans, dates and conditions for going home",
        "Checking practical arrangements at home (equipment, deliveries, support)",
        "Helping families stay informed and aligned about what is happening",
        "Identifying and flagging potential gaps to the appropriate teams"
      ]
    },
    {
      id: "carers",
      icon: HeartHandshake,
      title: "Carer Coaching & Practical Support",
      desc: "Caring for a loved one is exhausting. We provide space, guidance, and administrative help so you can focus on being family.",
      bullets: [
        "Coaching sessions to help you feel clearer and more confident in your caring role",
        "Help with forms, admin, signposting and follow-up tasks",
        "Connecting you with local community and voluntary sector support",
        "Helping you plan ahead for key points in the care journey"
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* HERO */}
      <section className="bg-cream py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="mb-6">Practical, non-clinical support that joins the dots</h1>
            <p className="text-xl text-text-muted">
              InKindRa provides Registered Nurse-led, independent patient advocacy and connected care navigation for adults, families and carers in Shropshire.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={0.1} className="scroll-mt-32" id={service.id}>
              <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                <div className="md:w-1/3 shrink-0">
                  <div className="w-16 h-16 bg-teal-pale rounded-2xl flex items-center justify-center mb-6 border border-teal-light">
                    <service.icon className="w-8 h-8 text-teal-deep" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl mb-4">{service.title}</h2>
                  <p className="text-text-muted text-lg">{service.desc}</p>
                </div>
                <div className="md:w-2/3 bg-ivory rounded-2xl p-8 md:p-10 border border-border/50">
                  <ul className="space-y-5">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-sage" />
                        </div>
                        <span className="text-lg text-text-body">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* BOUNDARIES & SCOPE */}
      <section className="py-20 bg-teal-pale">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-center mb-12">Clarity on boundaries</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="text-xl text-teal-deep mb-6 pb-4 border-b border-border">What we do</h3>
                <ul className="space-y-4">
                  <CheckItem>Offer calm, informed advocacy and navigation support</CheckItem>
                  <CheckItem>Help you prepare for and follow up from appointments</CheckItem>
                  <CheckItem>Coordinate agreed tasks and communication</CheckItem>
                  <CheckItem>Support carers emotionally and practically within our scope</CheckItem>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="text-xl text-charcoal mb-6 pb-4 border-b border-border">What we don't do</h3>
                <ul className="space-y-4 text-text-muted">
                  <li className="flex gap-3">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">×</span>
                    <span>Provide personal care or hands-on nursing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">×</span>
                    <span>Replace NHS, social care or emergency services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">×</span>
                    <span>Make clinical decisions or alter prescribed treatment plans</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">×</span>
                    <span>Act outside safeguarding, confidentiality or legal requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ScopeNotice>
              At the time of launch, InKindRa is a small Phase 1 service. Capacity is limited and the scope of practice is deliberately focused to ensure safe, high-quality delivery. Early conversations are welcome to explore fit.
            </ScopeNotice>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <FadeIn>
          <h2 className="mb-6">Not sure which service you need?</h2>
          <p className="text-lg text-text-muted mb-8">Let's discuss your situation and see how we can build a package that helps.</p>
          <Button href="https://calendly.com/kate-phillips-inkindra/30min" external>
            Request a free call
          </Button>
        </FadeIn>
      </section>
    </div>
  );
}
