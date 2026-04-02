
import { TrustPill } from "../ui/shared";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6">
              <img
                src={`${import.meta.env.BASE_URL}images/logo-mark.png`}
                alt="InKindRa"
                className="w-9 h-9 object-contain brightness-150"
              />
              <span className="font-serif text-[26px] font-medium text-white tracking-tight">
                InKindRa
              </span>
            </a>
            <p className="text-[15px] leading-relaxed mb-6 max-w-sm">
              Independent, Registered Nurse-led care navigation and patient advocacy for Shropshire.
            </p>
            <div className="flex flex-col gap-2 text-[14px]">
              <a href="tel:01743630199" className="hover:text-white transition-colors">01743 630199</a>
              <a href="mailto:info@inkindra.com" className="hover:text-white transition-colors">info@inkindra.com</a>
              <span>Myddle, Shropshire, SY4 3AU</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li><a href="/services" className="hover:text-white transition-colors">Care Navigation</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Appointment Support</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Discharge Coordination</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Carer Coaching</a></li>
              <li className="pt-2"><a href="/services" className="text-sage hover:text-white transition-colors">View All Services →</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-medium mb-6">Information</h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li><a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About InKindRa</a></li>
              <li><a href="/for-referrers" className="hover:text-white transition-colors">For Referrers</a></li>
              <li><a href="/packages" className="hover:text-white transition-colors">Packages & Pricing</a></li>
              <li><a href="/faqs" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-6">Legal & Contact</h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Notice</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li className="pt-2">
                <a 
                  href="https://calendly.com/kate-phillips-inkindra/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-white/20 rounded hover:bg-white/10 hover:text-white transition-colors text-sm font-medium"
                >
                  Book a Free Call
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            © {new Date().getFullYear()} InKindRa. All rights reserved. Registered in England.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {/* Using a darker text for contrast on dark bg for pills here, or slightly styled for dark mode */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80">
               NMC Registered
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80">
               DBS Checked
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80">
               ICO Registered
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80">
               Fully Insured
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
