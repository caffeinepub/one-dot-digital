import SectionShell from '@/components/site/SectionShell';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/content/testimonials';
import { useInViewReveal } from '@/hooks/useInViewReveal';
import { Quote } from 'lucide-react';
import FlipCard from '@/components/site/FlipCard';

export default function TestimonialsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useInViewReveal();

  return (
    <SectionShell id="testimonials" className="bg-secondary/40">
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">What Our Clients Say</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real results, real relationships, real growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
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
  const { ref, isVisible } = useInViewReveal({ delay: index * 100 });

  const frontContent = (
    <Card className="h-full bg-white border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <CardContent className="pt-8 pb-8 h-full flex flex-col items-center justify-center text-center">
        <Quote className="text-primary mb-4" size={48} />
        <p className="font-semibold text-xl text-foreground mb-2">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.business}</p>
      </CardContent>
    </Card>
  );

  const backContent = (
    <Card className="h-full bg-secondary border-primary/30">
      <CardContent className="pt-6 pb-6 h-full flex flex-col justify-between">
        <div>
          <Quote className="text-primary mb-4" size={32} />
          <p className="text-muted-foreground italic leading-relaxed text-sm">
            "{testimonial.quote}"
          </p>
        </div>
        <div className="border-t border-border pt-4 mt-4">
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.business}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ minHeight: '280px' }}
    >
      <FlipCard front={frontContent} back={backContent} />
    </div>
  );
}
