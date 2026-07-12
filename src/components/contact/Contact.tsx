import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

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
