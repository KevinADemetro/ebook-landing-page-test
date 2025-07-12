import Image from "next/image";
import form from "@/public/form.webp";
import NewsletterForm from "./NewsletterForm";

function NewsletterSection() {
  return (
    <section className="relative min-h-[100vh] z-10 text-center">
      <Image src={form} alt="background" fill className="object-cover" />
      <div className="absolute inset-0 bg-white/40 z-1" />

      <div className="relative flex flex-col items-center p-20 z-30">
        <div className="mb-25">
          <h2 className="text-7xl font-bold font-[family-name:var(--font-playfair-display)] mb-20 leading-[1.3]">
            Sign up for our <br />
            newsletter to get <br />
            access
          </h2>
          <p className="w-150 text-2xl">
            Tell people more about what you do. Use this space to describe your
            products or services. Highlight their benefits so they feel
            compelled to click.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}

export default NewsletterSection;
