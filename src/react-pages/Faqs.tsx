import { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/shared";
import { ChevronDown } from "lucide-react";

export default function Faqs() {
  const faqs = [
    {
      category: "About InKindRa",
      items: [
        { q: "What is InKindRa?", a: "InKindRa is an independent patient advocacy and care navigation service led by a Registered Nurse. We help adults, families and carers in Shropshire make sense of complex health and care systems, prepare for appointments, and coordinate non-clinical tasks." },
        { q: "Are you part of the NHS or social services?", a: "No. InKindRa is entirely independent. We work alongside NHS, social care, voluntary organisations and private providers, but we do not replace their roles or responsibilities. Our independence means we work solely for you." },
        { q: "Who do you work with?", a: "We work directly with adults managing multiple conditions, families preparing for a hospital discharge, relatives living at a distance who need local eyes and ears, and unpaid carers needing support. We also take referrals from professionals." }
      ]
    },
    {
      category: "How it works",
      items: [
        { q: "What happens first?", a: "It starts with a free, no-obligation phone call. We'll listen to your situation and tell you honestly if we think we can help. If we can't, we will try to point you toward someone who can." },
        { q: "What does ongoing support look like?", a: "It depends entirely on what you need. It might be a one-off session to prepare for a major consultant appointment, or a 4-week package to coordinate a complex hospital discharge and check in on home arrangements." },
        { q: "Do you visit people at home or in hospital?", a: "Yes, where appropriate and agreed, we can visit clients at home or attend hospital appointments with them within our core Shropshire catchment area." }
      ]
    },
    {
      category: "Scope and boundaries",
      items: [
        { q: "Do you provide personal care or hands-on nursing?", a: "No. We provide advocacy, navigation and non-clinical support only. We do not provide washing, dressing, or clinical treatments like wound care. Where these are required, we coordinate with your NHS/private clinicians and CQC-registered providers." },
        { q: "Are you an emergency or crisis service?", a: "No. We operate during standard business hours. In a medical or mental health emergency, you must always call 999 or 111." },
        { q: "Do you make clinical decisions or change treatment plans?", a: "Never. We help you understand the options your doctors have given you, and help you ask the right questions, but we respect the clinical expertise of your treatment teams and do not offer alternative medical advice." }
      ]
    },
    {
      category: "Working with family, carers and professionals",
      items: [
        { q: "Can you involve my family or carer?", a: "Absolutely. With your explicit consent, we often act as the central point of communication, keeping spread-out family members updated so you don't have to repeat yourself." },
        { q: "Do you speak to my GP or hospital team?", a: "Yes, with your permission, we can liaise with medical teams, social workers and care agencies to chase up referrals, clarify plans, and ensure everyone is on the same page." },
        { q: "Can professionals refer to you?", a: "Yes. GPs, discharge teams, and social prescribers can refer patients to us for non-clinical coordination, appointment accompaniment, and carer support. Consent is always sought before involvement." }
      ]
    },
    {
      category: "Area coverage & Fees",
      items: [
        { q: "Do you cover my area?", a: "Our core physical area is Shropshire, specifically the catchment areas for SaTH, RJAH and Whitchurch Community Hospital. However, we can support relatives who live elsewhere (e.g. via Zoom/phone) who are trying to manage care for someone in Shropshire." },
        { q: "How much does it cost?", a: "We offer clear, flexible pricing with session-based and package options. Please see our Packages page for indicative rates. We will always provide a clear quote before beginning work." },
        { q: "Do you offer free or reduced-cost support?", a: "As a new, unfunded service, our capacity for subsidised work is very limited. However, our initial consultation is always free, and we will signpost you to free charity/statutory services if they fit your needs better." }
      ]
    },
    {
      category: "Governance, privacy and safety",
      items: [
        { q: "How do you keep my information safe?", a: "We take confidentiality very seriously. We are registered with the Information Commissioner's Office (ICO) and comply with UK GDPR. Please see our Privacy Notice for details." },
        { q: "Will you share information about me without my consent?", a: "Generally, no. The only exception is if we have a legal duty to share information, for example, if there is an immediate risk of serious harm or a safeguarding concern." }
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <section className="bg-cream py-20 md:py-32 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="mb-6">Frequently asked questions</h1>
            <p className="text-xl text-text-muted">
              If your question isn't covered here, you're very welcome to get in touch.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {faqs.map((category, catIdx) => (
              <FadeIn key={catIdx} delay={0.1}>
                <h3 className="text-2xl text-teal-deep border-b-2 border-teal-light pb-4 mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((faq, i) => (
                    <AccordionItem key={i} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-24 p-8 md:p-10 bg-teal-pale rounded-2xl text-center border border-border">
            <h3 className="text-2xl mb-4">Still have questions?</h3>
            <p className="text-lg text-text-muted mb-8">
              A short conversation can help us both decide whether we are a good fit.
            </p>
            <Button href="/contact">Get in touch</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border border-border rounded-xl bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-cream/50 transition-colors focus-visible:outline-none focus-visible:bg-cream/50"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-text-body pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-teal-mid transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        style={{ height, overflow: "hidden", transition: "height 0.3s ease" }}
      >
        <div ref={contentRef} className="px-6 pb-6 pt-2 text-text-muted leading-relaxed border-t border-border/50">
          {answer}
        </div>
      </div>
    </div>
  );
}
