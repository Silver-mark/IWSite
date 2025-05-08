import { Helmet } from "react-helmet";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Get PC Build Advice - PC Builder Guide</title>
        <meta name="description" content="Have questions about your PC build? Get personalized advice and component recommendations from our experts." />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-dark mb-4">Get Build Advice</h2>
              <p className="text-lg text-neutral-dark/80">
                Have questions about your build or need a review of your component selections? Reach out and I'll be happy to help!
              </p>
            </div>
            
            <div className="bg-neutral-light rounded-xl p-8 shadow-lg">
              <ContactForm />
            </div>

            <div className="mt-12 bg-primary/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">How I Can Help</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-primary mb-2">Component Selection</h4>
                  <p className="text-sm">Get advice on choosing the right parts for your specific needs and budget.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-primary mb-2">Compatibility Check</h4>
                  <p className="text-sm">Ensure all your selected components will work together without issues.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-primary mb-2">Build Review</h4>
                  <p className="text-sm">Get feedback on your planned build to identify potential improvements or issues.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-primary mb-2">Troubleshooting</h4>
                  <p className="text-sm">Get help diagnosing and solving problems with an existing build.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-neutral-dark/70 text-sm">
              <p>I typically respond to inquiries within 24-48 hours. For urgent matters, please indicate this in your message.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
