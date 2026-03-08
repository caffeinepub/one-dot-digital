import WavyBackground from "@/components/site/WavyBackground";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
import { scrollToSection } from "@/lib/scrollToSection";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const parallaxOffset = useParallax(0.3);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.95 0.025 228) 0%, oklch(0.97 0.015 235) 40%, oklch(0.93 0.03 220) 100%)",
      }}
    >
      {/* Animated Wavy Background */}
      <WavyBackground />

      {/* Background with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.96_0.02_228)] via-[oklch(0.97_0.012_235)] to-[oklch(0.92_0.035_220)]" />
      </div>

      {/* CSS-only floating blob shapes — scattered across hero */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Top-left large blurred blob */}
        <div
          className="absolute -top-20 -left-20 w-80 h-60 rounded-[80px] opacity-[0.08] rotate-[-20deg]"
          style={{ background: "oklch(var(--primary))", filter: "blur(50px)" }}
        />
        {/* Top-right medium blob */}
        <div
          className="absolute top-10 -right-16 w-64 h-48 rounded-[60px] opacity-[0.07] rotate-[15deg]"
          style={{ background: "oklch(var(--primary))", filter: "blur(40px)" }}
        />
        {/* Bottom-left pill */}
        <div
          className="absolute bottom-20 -left-10 w-56 h-24 rounded-full opacity-[0.06] rotate-[25deg]"
          style={{ background: "oklch(var(--primary))", filter: "blur(30px)" }}
        />
        {/* Center-right floating accent */}
        <div
          className="absolute top-1/2 right-10 w-32 h-32 rounded-full opacity-[0.05]"
          style={{ background: "oklch(var(--primary))", filter: "blur(20px)" }}
        />
        {/* Bottom-center small accent */}
        <div
          className="absolute bottom-10 left-1/3 w-24 h-16 rounded-[40px] opacity-[0.07] rotate-[-10deg]"
          style={{ background: "oklch(var(--primary))" }}
        />
      </div>

      {/* Decorative blob image — top-left, desktop only */}
      <div
        className="hidden md:block absolute top-0 -left-20 w-[500px] h-[500px] pointer-events-none select-none z-[1]"
        aria-hidden="true"
      >
        <img
          src="/assets/generated/hero-blob-shapes-transparent.dim_700x700.png"
          alt=""
          className="w-full h-full object-contain opacity-[0.12]"
          loading="eager"
        />
      </div>

      {/* Decorative 3D shapes — bottom-right, desktop only */}
      <div
        className="hidden md:block absolute bottom-0 right-0 w-[480px] h-[320px] pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <img
          src="/assets/generated/floating-3d-shapes-transparent.dim_800x600.png"
          alt=""
          className="w-full h-full object-contain opacity-[0.20]"
          loading="eager"
        />
      </div>

      {/* Floating portrait card — bottom-right, desktop only */}
      <div
        className="hidden md:block absolute bottom-20 right-8 z-20 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500"
        aria-hidden="true"
      >
        <div className="relative">
          {/* Blue decorative rounded rectangle behind portrait */}
          <div
            className="absolute -bottom-3 -right-3 w-36 h-44 rounded-2xl opacity-30"
            style={{ background: "oklch(var(--primary))" }}
          />
          <img
            src="/assets/generated/team-professional.dim_500x600.jpg"
            alt="Digital marketing professional"
            className="relative w-32 h-40 rounded-2xl object-cover shadow-xl border-2 border-white"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <img
              src="/assets/generated/onedot-digital-logo.dim_400x200.png"
              alt="ONEDOT DIGITAL"
              className="h-24 md:h-32 w-auto mx-auto mb-8 object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Build. Scale.{" "}
            <span className="text-primary">Dominate the Digital Space.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            We don't just put you online — we position your brand to grow,
            scale, and stand out. From strategy to execution, we accelerate your
            digital journey with clarity, creativity, and impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg group"
              data-ocid="hero.primary_button"
            >
              Get in Touch
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="text-lg"
              data-ocid="hero.secondary_button"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}
