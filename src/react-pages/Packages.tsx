import { FadeIn } from "@/components/ui/fade-in";
import { Button, CheckItem } from "@/components/ui/shared";
import { Info } from "lucide-react";

export default function Packages() {
  return (
    <div className="flex flex-col bg-white">
      {/* HERO */}
      <section className="bg-cream py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="mb-6">Clear, flexible pricing</h1>
            <p className="text-xl text-text-muted mb-8">
              We offer straightforward, transparent pricing with no long-term contracts. All work includes necessary preparation and reasonable liaison time.
            </p>
            <div className="inline-flex items-start gap-3 bg-amber-50 text-amber-900 border border-amber-200 p-4 rounded-lg text-left max-w-2xl text-sm">
              <Info className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
              <p>
                <strong>Pilot Notice:</strong> The pricing below is indicative for our initial launch phase and may be adjusted. We will always confirm current rates in writing before any commitment.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Package 1 */}
            <FadeIn>
              <div className="bg-ivory rounded-2xl p-8 md:p-10 border border-border h-full flex flex-col">
                <h3 className="text-2xl mb-2">Starter Navigation Package</h3>
                <div className="text-teal-deep font-medium mb-6 pb-6 border-b border-border/50">Price TBC at launch</div>
                
                <div className="mb-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-text-muted">Best for:</span>
                  <p className="mt-2 text-text-body">People who feel stuck or overwhelmed and want to make sense of what is happening and what to do next.</p>
                </div>
                
                <div className="flex-1">
                  <span className="text-sm font-bold uppercase tracking-wider text-text-muted">Includes:</span>
                  <ul className="mt-4 space-y-3">
                    <CheckItem>Initial assessment and planning session</CheckItem>
                    <CheckItem>Follow-up sessions (phone/online)</CheckItem>
                    <CheckItem>Summary of key points and next steps</CheckItem>
                    <CheckItem>Short liaison with relevant teams (with consent)</CheckItem>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Package 2 */}
            <FadeIn delay={0.1}>
              <div className="bg-teal-deep rounded-2xl p-8 md:p-10 shadow-xl h-full flex flex-col text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <h3 className="text-2xl mb-2 text-white">Intensive Coordination</h3>
                <div className="text-teal-light font-medium mb-6 pb-6 border-b border-white/20">Price TBC at launch</div>
                
                <div className="mb-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-teal-light/70">Best for:</span>
                  <p className="mt-2 text-white/90">People approaching or recovering from a hospital stay, or managing a complex change in care.</p>
                </div>
                
                <div className="flex-1">
                  <span className="text-sm font-bold uppercase tracking-wider text-teal-light/70">Includes:</span>
                  <ul className="mt-4 space-y-3">
                    <li className="flex gap-3"><span className="text-sage mt-1">✓</span><span>Assessment and shared plan focused on admission/discharge/transition</span></li>
                    <li className="flex gap-3"><span className="text-sage mt-1">✓</span><span>Regular support calls during agreed period</span></li>
                    <li className="flex gap-3"><span className="text-sage mt-1">✓</span><span>More extensive liaison with clinical/care teams</span></li>
                    <li className="flex gap-3"><span className="text-sage mt-1">✓</span><span>Post-transition review session</span></li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Package 3 */}
            <FadeIn delay={0.2}>
              <div className="bg-lavender-light/30 rounded-2xl p-8 md:p-10 border border-lavender/20 h-full flex flex-col">
                <h3 className="text-2xl mb-2">Carer Coaching Block</h3>
                <div className="text-lavender font-medium mb-6 pb-6 border-b border-border/50">Price TBC at launch</div>
                
                <div className="mb-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-text-muted">Best for:</span>
                  <p className="mt-2 text-text-body">Family members and unpaid carers who want space, guidance and practical help managing the load.</p>
                </div>
                
                <div className="flex-1">
                  <span className="text-sm font-bold uppercase tracking-wider text-text-muted">Includes:</span>
                  <ul className="mt-4 space-y-3">
                    <CheckItem>Block of dedicated coaching/support sessions</CheckItem>
                    <CheckItem>Help with planning and accessing statutory support</CheckItem>
                    <CheckItem>Tools for better communication with professionals</CheckItem>
                    <CheckItem>Optional check-in after the block concludes</CheckItem>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Package 4 */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-border h-full flex flex-col">
                <h3 className="text-2xl mb-2">Bespoke Support</h3>
                <div className="text-teal-deep font-medium mb-6 pb-6 border-b border-border/50">Agreed individually</div>
                
                <div className="mb-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-text-muted">Best for:</span>
                  <p className="mt-2 text-text-body">Situations that don't fit neatly into a package, or where organisations are commissioning support.</p>
                </div>
                
                <div className="flex-1">
                  <span className="text-sm font-bold uppercase tracking-wider text-text-muted">Includes:</span>
                  <ul className="mt-4 space-y-3">
                    <CheckItem>Flexible support tailored to specific timeline</CheckItem>
                    <CheckItem>Mix of navigation, coordination and carer support</CheckItem>
                    <CheckItem>Agreed scope, pricing and reporting before work begins</CheckItem>
                  </ul>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* RATES TABLE */}
      <section className="py-20 bg-teal-pale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-10 text-center">Indicative Rate Guide</h2>
            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-teal-deep text-white">
                    <th className="py-4 px-6 font-medium">Service Type</th>
                    <th className="py-4 px-6 font-medium">Indicative Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr>
                    <td className="py-4 px-6 text-text-body">Foundations Assessment (2–3h + written plan)</td>
                    <td className="py-4 px-6 font-medium text-teal-deep">£195 – £295</td>
                  </tr>
                  <tr className="bg-cream/50">
                    <td className="py-4 px-6 text-text-body">Navigator Retainer (2–4h/month + 1 accompanied appt)</td>
                    <td className="py-4 px-6 font-medium text-teal-deep">£199 – £349 / month</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-text-body">Ad-hoc Registered Nurse advocacy</td>
                    <td className="py-4 px-6 font-medium text-teal-deep">£60 – £90 / hour</td>
                  </tr>
                  <tr className="bg-cream/50">
                    <td className="py-4 px-6 text-text-body">Non-clinical administrative support</td>
                    <td className="py-4 px-6 font-medium text-teal-deep">£20 – £30 / hour</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-text-body">Mileage (outside central Shrewsbury)</td>
                    <td className="py-4 px-6 font-medium text-teal-deep">Standard HMRC rate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-text-muted mt-6 text-center italic">
              Guideline prices for pilot phase. We will always tailor quotes based on the complexity of your case.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeIn>
            <h3 className="text-2xl mb-4">What is included</h3>
            <ul className="list-disc pl-5 space-y-2 text-text-body">
              <li>Preparation time for meetings and appointments.</li>
              <li>Reasonable telephone and email liaison with professionals (as agreed in scope).</li>
              <li>Travel within 10 miles of Shrewsbury town centre (further travel charged at HMRC rates).</li>
              <li>Written summaries of key meetings/appointments.</li>
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h3 className="text-2xl mb-4">Concessions and funding</h3>
            <p className="text-text-body leading-relaxed">
              As a new, independent service, we are currently entirely self-funded and unable to offer extensive free or subsidised support. However, we will always try to direct you to free local statutory or charity services (like local Carers Trusts or PALS) during our initial free call if they are more appropriate for your needs.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="text-2xl mb-4">Payment and cancellation</h3>
            <p className="text-text-body leading-relaxed mb-8">
              Invoices are issued securely online. For packages, a deposit may be required before work commences. Appointments cancelled with less than 24 hours notice may incur a charge. Full details are provided in our Terms of Engagement.
            </p>
            
            <div className="p-8 bg-ivory rounded-xl border border-border text-center mt-12">
              <h3 className="text-xl mb-4">Not sure which package fits, or what you can afford?</h3>
              <p className="text-text-muted mb-6">Let's have a quick chat to figure it out.</p>
              <Button href="https://calendly.com/kate-phillips-inkindra/30min" external>
                Book a free initial call
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
