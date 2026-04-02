import { FadeIn } from "@/components/ui/fade-in";
import { TrustPill, ScopeNotice } from "@/components/ui/shared";
import { Heart, ShieldCheck, CheckSquare, HandHeart } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      {/* HERO */}
      <section className="bg-cream py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <span className="text-sage font-medium uppercase tracking-wide text-sm mb-4 block">About InKindRa</span>
            <h1 className="mb-6">Care navigation led by a Registered Nurse</h1>
            <p className="text-xl text-text-muted">
              Everyone deserves a knowledgeable advocate who can connect the dots and reduce the stress of fragmented care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT TEXT & IMAGE */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <FadeIn className="lg:col-span-5 relative">
              <div className="aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden bg-teal-pale relative z-10 border border-border/50">
                 <img 
                  src={`${import.meta.env.BASE_URL}images/kate-profile.png`} 
                  alt="Kate Phillips, Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-8 -right-8 md:-right-12 bg-white px-6 py-4 rounded-xl shadow-xl shadow-black/5 z-20 border border-border rotate-3">
                <span className="font-serif font-semibold text-teal-deep text-lg">Founded in Shropshire</span>
                <p className="text-text-muted text-sm">Est. 2025</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-7">
              <h2 className="mb-6">Why InKindRa exists</h2>
              <div className="prose prose-lg text-text-body max-w-none">
                <p>
                  InKindRa is a Registered Nurse-led, independent patient advocacy and connected care navigation service for adults, families and carers in Shropshire.
                </p>
                <p>
                  We exist to reduce the stress, confusion and isolation that can come with fragmented health, social care and community services – especially around hospital admission, discharge and complex care pathways.
                </p>
                <p>
                  Kate Phillips, our founder, is a Registered General Nurse (RAF-trained) with extensive experience across NHS and community settings, primary/secondary care, private health insurance, and clinical negligence.
                </p>
                <p>
                  Kate has seen first-hand how difficult it can be for individuals and families to hold everything together — appointments, information, decisions, caring responsibilities — while also coping with illness, change and uncertainty. InKindRa was created to offer something that is often missing: calm, informed, independent support that helps people join the dots between services.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-lg text-text-muted">The principles that guide how we work with you.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: Heart,
                title: "Kind and human",
                desc: "We recognise the emotional and practical load. We listen carefully, take time to understand what matters to you, and work at your pace."
              },
              {
                icon: ShieldCheck,
                title: "Independent and on your side",
                desc: "We are independent of hospitals, GP practices and social care. Our role is to support you, while working constructively with existing teams."
              },
              {
                icon: CheckSquare,
                title: "Practical and realistic",
                desc: "We focus on what will make the biggest difference right now — from preparing for key appointments to coordinating immediate tasks."
              },
              {
                icon: HandHeart,
                title: "Respectful of boundaries",
                desc: "We do not provide personal care or clinical treatment. We work alongside your existing teams, within clear ethical and safeguarding boundaries."
              }
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 md:p-10 rounded-2xl border border-border h-full hover:shadow-md transition-shadow">
                  <value.icon className="w-8 h-8 text-teal-mid mb-6" strokeWidth={1.5} />
                  <h3 className="text-2xl mb-4">{value.title}</h3>
                  <p className="text-text-muted leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT & STANDARDS */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <FadeIn>
              <div className="bg-teal-pale p-10 md:p-12 rounded-[24px] h-full border border-teal-light">
                <h3 className="text-3xl mb-8">Who we support</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-deep" />
                    </div>
                    <span className="text-lg text-text-body">Adults and families managing multiple conditions, services or appointments.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-deep" />
                    </div>
                    <span className="text-lg text-text-body">People preparing for, or recovering from, a hospital stay or complex discharge.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-deep" />
                    </div>
                    <span className="text-lg text-text-body">Family members who live at a distance but want to stay more closely involved.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-lavender" />
                    </div>
                    <span className="text-lg text-text-body">Referrers such as GPs, social prescribing teams, hospital discharge teams, and charities.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-col justify-center">
              <h3 className="text-3xl mb-8">Professional Standards</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                <TrustPill text="Registered Nurse-led service" />
                <TrustPill text="Enhanced DBS checked" />
                <TrustPill text="Fully insured" />
                <TrustPill text="ICO registered for data protection" />
              </div>
              <p className="text-lg text-text-muted leading-relaxed">
                We operate to strict professional nursing standards, even when delivering non-clinical support. For more detail on how we handle information, concerns and accessibility, please see our Privacy Notice and contact us for our Terms of Engagement.
              </p>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
