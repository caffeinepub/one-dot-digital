import SectionShell from "@/components/site/SectionShell";
import { useInViewReveal } from "@/hooks/useInViewReveal";
import { Target, TrendingUp, Zap } from "lucide-react";

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useInViewReveal();
  const { ref: contentRef, isVisible: contentVisible } = useInViewReveal({
    delay: 200,
  });
  const { ref: imageRef, isVisible: imageVisible } = useInViewReveal({
    delay: 300,
  });
  const { ref: valuesRef, isVisible: valuesVisible } = useInViewReveal({
    delay: 400,
  });

  const values = [
    {
      icon: Target,
      title: "Strategic",
      description: "Data-driven strategies that deliver measurable results",
    },
    {
      icon: Zap,
      title: "Creative",
      description: "Innovative solutions that make your brand stand out",
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused",
      description: "Scalable approaches designed for long-term success",
    },
  ];

  return (
    <SectionShell id="about" className="bg-secondary/70">
      {/* CSS floating blob shapes */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-12 -left-16 w-72 h-48 rounded-[80px] opacity-[0.07] rotate-[-12deg]"
          style={{ background: "oklch(var(--primary))", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-0 -right-20 w-80 h-56 rounded-[60px] opacity-[0.07] rotate-[18deg]"
          style={{ background: "oklch(var(--primary))", filter: "blur(50px)" }}
        />
        <div
          className="absolute top-1/3 -right-10 w-40 h-28 rounded-full opacity-[0.05] rotate-[-8deg]"
          style={{ background: "oklch(var(--primary))" }}
        />
      </div>

      {/* Flowing lines accent at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/assets/generated/flowing-lines-accent-transparent.dim_1200x400.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
          loading="lazy"
        />
      </div>

      {/* Decorative 3D accent shape — right side, desktop only */}
      <div
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/assets/generated/about-3d-accent.dim_600x600.png"
          alt=""
          className="w-full h-full object-contain opacity-20"
          loading="lazy"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
            Who Are We?
          </h2>
        </div>

        {/* Intro paragraph */}
        <div
          ref={contentRef}
          className={`prose prose-lg max-w-none mb-10 transition-all duration-700 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            We're the team that transforms your business into a powerful digital
            identity. At One Dot Digital, we don't just put you online — we
            position your brand to grow, scale, and stand out. From strategy to
            execution, we help businesses accelerate their digital journey with
            clarity, creativity, and impact.
          </p>
        </div>

        {/* Team image */}
        <div
          ref={imageRef}
          className={`mb-16 transition-all duration-700 ${
            imageVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="/assets/generated/workspace-flatlay.dim_800x500.jpg"
            alt="One Dot Digital workspace"
            className="w-full rounded-2xl shadow-lg object-cover max-h-72 md:max-h-96"
            loading="lazy"
          />
        </div>

        {/* Values grid */}
        <div
          ref={valuesRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            valuesVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
