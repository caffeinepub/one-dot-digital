import SectionShell from '@/components/site/SectionShell';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/content/testimonials';
import { useInViewReveal } from '@/hooks/useInViewReveal';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useInViewReveal();

  return (
    <SectionShell id="testimonials" className="bg-muted/30">
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
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

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardContent className="pt-6">
          <Quote className="text-brand-blue mb-4" size={32} />
          <p className="text-muted-foreground mb-6 italic leading-relaxed">
            "{testimonial.quote}"
          </p>
          <div className="border-t border-border pt-4">
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.business}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
