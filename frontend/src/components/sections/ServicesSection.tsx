import SectionShell from '@/components/site/SectionShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/content/services';
import { useInViewReveal } from '@/hooks/useInViewReveal';
import ServiceIcon from '@/components/site/ServiceIcon';
import FlipCard from '@/components/site/FlipCard';

export default function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useInViewReveal();

  return (
    <SectionShell id="services" className="bg-white">
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Our Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to accelerate your growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, isVisible } = useInViewReveal({ delay: index * 100 });

  const frontContent = (
    <Card className="h-full bg-white border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="text-center h-full flex flex-col items-center justify-center p-8">
        <div className="mb-6">
          <ServiceIcon serviceId={service.id} />
        </div>
        <CardTitle className="text-2xl text-primary">
          {service.title}
        </CardTitle>
        <CardDescription className="text-base mt-4 text-muted-foreground">{service.tagline}</CardDescription>
      </CardHeader>
    </Card>
  );

  const backContent = (
    <Card className="h-full bg-secondary border-primary/30">
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
          <p className="text-muted-foreground text-sm">{service.description}</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold text-sm mb-2 text-foreground">Includes:</p>
          <div className="flex flex-wrap gap-2">
            {service.includes.slice(0, 4).map((item) => (
              <Badge key={item} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
            {service.includes.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{service.includes.length - 4} more
              </Badge>
            )}
          </div>
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
      style={{ minHeight: '320px' }}
    >
      <FlipCard front={frontContent} back={backContent} />
    </div>
  );
}
