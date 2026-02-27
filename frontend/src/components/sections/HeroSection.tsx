import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scrollToSection';
import { useParallax } from '@/hooks/useParallax';
import { ArrowRight } from 'lucide-react';
import WavyBackground from '@/components/site/WavyBackground';

export default function HeroSection() {
  const parallaxOffset = useParallax(0.3);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Wavy Background */}
      <WavyBackground />

      {/* Background with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary to-primary/5" />
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
            Transform Your Business Into a{' '}
            <span className="text-primary">Digital Powerhouse</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            We don't just put you online — we position your brand to grow, scale, and stand out.
            From strategy to execution, we accelerate your digital journey with clarity, creativity,
            and impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg group">
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="text-lg"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}
