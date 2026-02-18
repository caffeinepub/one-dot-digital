import SectionShell from '@/components/site/SectionShell';
import { useInViewReveal } from '@/hooks/useInViewReveal';
import { Target, Zap, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useInViewReveal();
  const { ref: contentRef, isVisible: contentVisible } = useInViewReveal({ delay: 200 });
  const { ref: valuesRef, isVisible: valuesVisible } = useInViewReveal({ delay: 400 });

  const values = [
    {
      icon: Target,
      title: 'Strategic',
      description: 'Data-driven strategies that deliver measurable results',
    },
    {
      icon: Zap,
      title: 'Creative',
      description: 'Innovative solutions that make your brand stand out',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Focused',
      description: 'Scalable approaches designed for long-term success',
    },
  ];

  return (
    <SectionShell id="about" className="bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who Are We?</h2>
        </div>

        <div
          ref={contentRef}
          className={`prose prose-lg max-w-none mb-16 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We're the team that transforms your business into a powerful digital identity. At One
            Dot Digital, we don't just put you online — we position your brand to grow, scale, and
            stand out. From strategy to execution, we help businesses accelerate their digital
            journey with clarity, creativity, and impact.
          </p>
        </div>

        <div
          ref={valuesRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
