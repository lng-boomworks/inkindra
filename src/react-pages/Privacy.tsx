import { FadeIn } from "@/components/ui/fade-in";

export default function Privacy() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <section className="bg-cream py-16 md:py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="mb-4">Privacy Notice</h1>
            <p className="text-text-muted">Last updated: January 2025</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn className="prose prose-lg prose-headings:text-teal-deep prose-headings:font-serif prose-headings:font-medium prose-a:text-teal-mid prose-a:no-underline hover:prose-a:underline text-text-body max-w-none">
            
            <h3>Who we are</h3>
            <p>
              InKindRa ("we", "our", "us") is an independent patient advocacy and care navigation service based in Shropshire. 
              Our website address is: <strong>https://inkindra.com</strong>.
            </p>

            <h3>What personal data we collect and why we collect it</h3>
            <h4>Enquiry Forms</h4>
            <p>
              When you contact us via our website form, we collect the data you provide (such as your name, email address, phone number, and brief details of your situation). We use this information solely to respond to your enquiry and assess whether we can assist you.
            </p>

            <h4>Cookies</h4>
            <p>
              Our website uses basic cookies to function correctly. If we implement a login system or comment functionality in the future, relevant cookies will be saved to maintain your session or save your details for convenience. These cookies typically last for one year.
            </p>

            <h3>Embedded content from other websites</h3>
            <p>
              Articles or pages on this site may include embedded content (e.g. Calendly booking widgets, videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
            </p>
            <p>
              These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
            </p>

            <h3>Who we share your data with</h3>
            <p>
              We do not sell, rent, or trade your personal data. We only share your data with third parties (such as medical professionals or social care teams) when you have given us <strong>explicit, informed consent</strong> to do so as part of our agreed advocacy work, or if we are legally required to do so (for example, in the event of an urgent safeguarding concern).
            </p>

            <h3>How long we retain your data</h3>
            <p>
              If you submit an enquiry, the form data is retained securely for as long as necessary to process your request. If you become a client, your data is held securely in line with NMC (Nursing and Midwifery Council) professional guidelines and UK GDPR requirements regarding health and social care records.
            </p>

            <h3>What rights you have over your data</h3>
            <p>
              You can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>

            <h3>Where we send your data</h3>
            <p>
              Visitor enquiries may be checked through an automated spam detection service. All client data is stored securely within the UK/EEA in compliance with UK GDPR.
            </p>

            <h3>Regulatory Registration</h3>
            <p>
              InKindRa is registered with the Information Commissioner's Office (ICO) for data protection purposes. 
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions regarding this Privacy Notice or how we handle your data, please email us at <a href="mailto:info@inkindra.com">info@inkindra.com</a> with "Privacy" in the subject line.
            </p>

          </FadeIn>
        </div>
      </section>
    </div>
  );
}
