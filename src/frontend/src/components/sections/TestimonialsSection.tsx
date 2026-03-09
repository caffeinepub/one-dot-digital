import SectionShell from "@/components/site/SectionShell";
import { testimonials } from "@/content/testimonials";
import { useInViewReveal } from "@/hooks/useInViewReveal";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useInViewReveal();

  return (
    <SectionShell id="testimonials" className="bg-secondary/40">
      {/* Subtle decorative 3D accent shapes in background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Top-left large blob */}
        <div
          className="absolute -top-16 -left-24 w-80 h-56 rounded-[80px] opacity-[0.08] rotate-12"
          style={{ background: "oklch(var(--primary))", filter: "blur(40px)" }}
        />
        {/* Bottom-right blob */}
        <div
          className="absolute -bottom-20 -right-24 w-96 h-64 rounded-[60px] opacity-[0.08] -rotate-[15deg]"
          style={{ background: "oklch(var(--primary))", filter: "blur(40px)" }}
        />
        {/* Center-top pill */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-16 rounded-full opacity-[0.05] rotate-[25deg]"
          style={{ background: "oklch(var(--primary))" }}
        />
        {/* Mid-left accent */}
        <div
          className="absolute top-1/2 -left-12 w-40 h-40 rounded-full opacity-[0.06]"
          style={{ background: "oklch(var(--primary))", filter: "blur(30px)" }}
        />
        {/* Mid-right accent */}
        <div
          className="absolute bottom-1/3 -right-10 w-52 h-32 rounded-[60px] opacity-[0.06] rotate-[-20deg]"
          style={{ background: "oklch(var(--primary))" }}
        />
      </div>

      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 relative z-10 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
          What Our Clients Say
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real results, real relationships, real growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </SectionShell>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const { ref, isVisible } = useInViewReveal({ delay: index * 120 });

  return (
    <div
      ref={ref}
      data-ocid={`testimonials.item.${index + 1}`}
      className={`group bg-card rounded-2xl border border-border shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col p-6 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: isVisible ? "0ms" : `${index * 120}ms`,
        transitionDuration: "700ms",
      }}
    >
      {/* Star rating */}
      <div className="flex gap-1 mb-4">
        {(["s1", "s2", "s3", "s4", "s5"] as const).map((starKey) => (
          <Star
            key={starKey}
            size={16}
            className="text-yellow-400 fill-yellow-400"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote icon */}
      <Quote
        className="text-primary/40 mb-3 shrink-0"
        size={32}
        aria-hidden="true"
      />

      {/* Quote text */}
      <p className="text-muted-foreground italic leading-relaxed text-sm flex-1 mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author info */}
      <div className="border-t border-border pt-4 mt-auto flex items-center gap-3">
        {/* Avatar circle with initials */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm"
          style={{ background: "oklch(var(--primary))" }}
          aria-hidden="true"
        >
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-foreground leading-tight">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.business}
          </p>
        </div>
      </div>
    </div>
  );
}
