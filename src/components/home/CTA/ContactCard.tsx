import ContactForm from "./ContactForm";

export default function ContactCard() {
  return (
    <div className="max-w-2xl mx-auto rounded-3xl bg-card border border-border p-8 text-center space-y-6 shadow-sm">
      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Let’s Connect 👋
      </h3>

      <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
        Whether you have an idea, an opportunity, or just want to network and chat — drop your email and let’s connect.
      </p>

      <ContactForm />
    </div>
  );
}