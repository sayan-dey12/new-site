import ContactCard from "@/components/home/CTA/ContactCard";

export const metadata = {
  title: "Connect with Me | Sayan Builds",
  description:
    "Get in touch with Sayan Dey for collaborations, projects, or networking opportunities.",
};

export default function ConnectPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-5 py-16">
      
      <div className="max-w-3xl w-full text-center space-y-10">

        {/* 🔥 Heading */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Stay in Touch
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Drop your email and I’ll get back to yo          </p>
        </div>

        {/* 💬 Contact Card */}
        <ContactCard />

        {/* 🔒 Trust Line */}
        <p className="text-sm text-muted-foreground">
          No spam. Just meaningful conversations.
        </p>

      </div>

    </section>
  );
}