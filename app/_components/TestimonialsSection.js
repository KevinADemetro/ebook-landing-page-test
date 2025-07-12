import TestimonialCard from "./TestimonialCard";

const testimonals = [
  {
    comment:
      "Add testimonial quotes from actual people who use your products. Their feedback can build trust and help your visitors make up their mind.",
    author: "Mike Smith",
    enterprise: "companyname.com",
  },
  {
    comment:
      "Add testimonial quotes from actual people who use your products. Their feedback can build trust and help your visitors make up their mind.",
    author: "Mike Smith",
    enterprise: "companyname.com",
  },
  {
    comment:
      "Add testimonial quotes from actual people who use your products. Their feedback can build trust and help your visitors make up their mind.",
    author: "Mike Smith",
    enterprise: "companyname.com",
  },
  {
    comment:
      "Add testimonial quotes from actual people who use your products. Their feedback can build trust and help your visitors make up their mind.",
    author: "Mike Smith",
    enterprise: "companyname.com",
  },
  {
    comment:
      "Add testimonial quotes from actual people who use your products. Their feedback can build trust and help your visitors make up their mind.",
    author: "Mike Smith",
    enterprise: "companyname.com",
  },
];

function TestimonialsSection() {
  return (
    <section className="flex flex-col items-center p-20">
      <h2 className="text-7xl font-bold font-[family-name:var(--font-playfair-display)] mb-20">
        What others say
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-50">
        {testimonals.map((testimonial, key) => (
          <TestimonialCard
            comment={testimonial.comment}
            author={testimonial.author}
            enterprise={testimonial.enterprise}
            key={key}
          />
        ))}
      </ul>
    </section>
  );
}

export default TestimonialsSection;
