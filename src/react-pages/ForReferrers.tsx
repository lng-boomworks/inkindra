import { FadeIn } from "@/components/ui/fade-in";
import { Button, ScopeNotice, CheckItem } from "@/components/ui/shared";
import { Users, FileText, Briefcase } from "lucide-react";

export default function ForReferrers() {
  return (
    <div className="flex flex-col bg-white">
      {/* HERO */}
      <section className="bg-lavender-light/40 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <span className="text-lavender font-medium uppercase tracking-wide text-sm mb-4 block">Information for Professionals</span>
            <h1 className="mb-6 text-balance">Registered Nurse-led navigation for complex pathways</h1>
            <p className="text-xl text-text-muted mb-10">
              We work alongside NHS, social care, VCSE and private providers in Shropshire to support patients and families who are struggling to navigate the system.
            </p>
            <div className="max-w-2xl mx-auto">
              <ScopeNotice title="Phase 1 Notice">
                At the time of launch, InKindRa is a small Phase 1 service. Capacity is limited and the scope of practice is deliberately focused. Early conversations are welcome to explore fit and feasibility.
              </ScopeNotice>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SUITABILITY & BENEFITS */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <FadeIn>
              <h2 className="mb-8">Who InKindRa may be suitable for</h2>
              <ul className="space-y-6">
                <CheckItem>Complex or changing health and care needs, with multiple teams involved</CheckItem>
                <CheckItem>Significant carer strain, especially where carers are juggling work, distance or other responsibilities</CheckItem>
                <CheckItem>Recurrent unplanned admissions or difficult discharges where coordination is challenging</CheckItem>
                <CheckItem>Communication difficulties between services and families, or where people struggle to make sense of information</CheckItem>
                <CheckItem>Limited local family support, or family members living at a distance</CheckItem>
              </ul>
              <div className="mt-8 p-6 bg-cream rounded-xl border border-border">
                <h4 className="font-semibold mb-2">Geographical Focus</h4>
                <p className="text-sm text-text-muted">
                  We serve Shropshire and the catchment areas for The Shrewsbury and Telford Hospital NHS Trust (SaTH), The Robert Jones and Agnes Hunt Orthopaedic Hospital (RJAH) and Whitchurch Community Hospital.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="mb-8">Potential benefits to your service</h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-2xl bg-ivory border border-border">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">1</div>
                  <p className="text-lg text-text-body mt-1">People may feel more informed, prepared and supported between contacts with your service.</p>
                </div>
                <div className="flex gap-4 p-6 rounded-2xl bg-ivory border border-border">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">2</div>
                  <p className="text-lg text-text-body mt-1">Appointments and meetings can be more focused, with clearer questions and follow-up.</p>
                </div>
                <div className="flex gap-4 p-6 rounded-2xl bg-ivory border border-border">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">3</div>
                  <p className="text-lg text-text-body mt-1">Non-clinical coordination tasks can be picked up by InKindRa, freeing clinical teams' time.</p>
                </div>
                <div className="flex gap-4 p-6 rounded-2xl bg-ivory border border-border">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">4</div>
                  <p className="text-lg text-text-body mt-1">Carers may feel better supported, aiding resilience and better decision-making.</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* HOW TO ENQUIRE */}
      <section className="py-20 bg-teal-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="mb-4">How to refer or enquire</h2>
            <p className="text-lg text-text-muted">We welcome enquiries from GP practices, PCNs, hospital teams, and charities.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl border border-border shadow-sm text-center">
              <Users className="w-10 h-10 text-teal-mid mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl mb-4">Direct self-referral</h3>
              <p className="text-text-muted">Adults, families and carers can contact InKindRa directly to explore support. You are welcome to simply signpost them to our website.</p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl border border-lavender/30 shadow-sm text-center">
              <FileText className="w-10 h-10 text-lavender mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl mb-4">Professional enquiry</h3>
              <p className="text-text-muted">You can discuss a situation with us in principle. Note: explicit consent from the patient/family is always required before we begin direct involvement.</p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white p-8 rounded-2xl border border-border shadow-sm text-center">
              <Briefcase className="w-10 h-10 text-teal-deep mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl mb-4">Commissioned work</h3>
              <p className="text-text-muted">We can explore time-limited, commissioned support for particular cohorts or situations on a case-by-case basis.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4 bg-charcoal text-white">
        <FadeIn>
          <h2 className="mb-6 text-white">Talk through a potential referral</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            If you're managing a complex case and think independent care navigation might help, let's schedule a brief professional conversation.
          </p>
          <Button variant="white" href="/contact">
            Contact us to arrange a call
          </Button>
        </FadeIn>
      </section>
    </div>
  );
}
