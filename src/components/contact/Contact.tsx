import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

/**
 * Contact Component
 * 
 * Main contact page wrapper that:
 * - Combines ContactForm and ContactInfo components
 * - Manages layout and spacing
 * - Provides consistent background and padding
 * - Responsive flex layout (stacks on mobile, side-by-side on tablet+)
 * 
 * This is the entry point for the /contact route
 */

export default function Contact() {
  return (
    <div className="bg-[#f3f3f3] px-6 md:px-12 lg:px-16 pt-21 md:pt-25 pb-10 md:pb-15 flex justify-center">
      <div className="w-full max-w-6xl flex items-start justify-center relative gap-4">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
