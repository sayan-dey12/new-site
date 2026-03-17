import ContactCard from "@/components/home/CTA/ContactCard";

export default function ConnectPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-5 py-16">
      
      <div className="max-w-3xl w-full text-center space-y-10">

        {/* 🔥 Heading */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let’s Connect 🚀
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Whether you have a project idea, collaboration opportunity, or just want to say hi — I’d love to hear from you.
          </p>
        </div>

        {/* 💬 Contact Card */}
        <ContactCard />

        {/* 🔒 Trust Line */}
        <p className="text-xs text-muted-foreground">
          No spam. Just meaningful conversations.
        </p>

      </div>

    </section>
  );
}