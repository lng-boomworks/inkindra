import { FadeIn } from "@/components/ui/fade-in";
import { Button, ScopeNotice, CheckItem } from "@/components/ui/shared";

export default function HowItWorks() {
  const steps = [
    {
      title: "Free initial phone conversation",
      desc: "We listen to what is happening, where you are based and what you are trying to sort out. We will explain what InKindRa can and cannot do. If we are not the right fit, we will try to signpost you to other services."
    },
    {
      title: "Assessment and agreement",
      desc: "If InKindRa may be able to help, we agree the focus of support, what you would like us to help with, any boundaries, and how we will communicate with you and (with your consent) your family or key contacts."
    },
    {
      title: "Support plan and coordination",
      desc: "We set out the agreed tasks – for example, preparing for key appointments, liaising with teams to clarify plans, supporting admission and discharge coordination, or coaching. We agree how often we will be in touch."
    },
    {
      title: "Joined-up support in practice",
      desc: "We carry out the agreed work, keeping you informed and checking in as things develop. With your consent, we may also share agreed updates with family members and/or referrers."
    },
    {
      title: "Review and next steps",
      desc: "We review what has changed, what has been helpful, and what is still needed. Together we decide whether further support from InKindRa is appropriate, or whether a different type of service would now be suitable."
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* HERO */}
      <section className="bg-cream py-20 md:py-32 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="mb-6">A clear, stepped process — so you always know what's happening</h1>
            <p className="text-xl text-text-muted">
              We keep things transparent, from the first free call to our regular check-ins.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* STEPPER */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative border-l-2 border-teal-light pl-8 md:pl-12 ml-4 md:ml-6 space-y-16">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative">
                <div className="absolute -left-[49px] md:-left-[65px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-deep text-white flex items-center justify-center font-serif text-xl font-bold shadow-md shadow-teal-deep/20 ring-8 ring-white">
                  {i + 1}
                </div>
                <h3 className="text-2xl mb-4 pt-1">{step.title}</h3>
                <p className="text-lg text-text-muted leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING WITH NHS / SCOPE */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16 max-w-3xl">
            <h2 className="mb-6">Working alongside existing services</h2>
            <p className="text-lg text-text-body mb-8">
              InKindRa does not replace NHS, social care or emergency services. We aim to make it easier for you to use them effectively.
            </p>
            <ul className="space-y-4">
              <CheckItem>We maintain our independence to advocate solely for your best interests.</CheckItem>
              <CheckItem>We only liaise with professionals with your explicit, informed consent.</CheckItem>
              <CheckItem>We respect the clinical expertise of your treatment teams.</CheckItem>
              <CheckItem>We help translate medical jargon into plain English so you can make informed choices.</CheckItem>
            </ul>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn delay={0.2} className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm">
              <h3 className="text-2xl text-teal-deep mb-6 pb-4 border-b border-border">Within our scope</h3>
              <ul className="space-y-4">
                <CheckItem>Advocacy and care navigation</CheckItem>
                <CheckItem>Appointment preparation and follow-up</CheckItem>
                <CheckItem>Non-clinical carer support and coaching</CheckItem>
                <CheckItem>Practical coordination tasks (e.g. chasing referrals, checking home readiness)</CheckItem>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.3} className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm">
              <h3 className="text-2xl text-charcoal mb-6 pb-4 border-b border-border">Outside our scope</h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-red-300 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <span>Personal care or domiciliary care (e.g. washing, dressing)</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-red-300 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <span>Hands-on nursing or clinical procedures (e.g. wound care, medication administration)</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-red-300 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <span>Emergency or crisis response (please use 999 or 111)</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-red-300 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <span>Altering prescribed treatment plans or making clinical decisions</span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PRACTICALITIES CTA */}
      <section className="py-24 bg-teal-deep text-center px-4">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="text-white mb-6">Ready to talk, or just want to explore?</h2>
          <p className="text-teal-light text-lg mb-10">
            A free 30-minute conversation is the best way to find out if we can help with your specific situation. No pressure, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="white" href="https://calendly.com/kate-phillips-inkindra/30min" external>
              Book a free call
            </Button>
            <Button variant="outline-white" href="/contact">
              Send an enquiry
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
