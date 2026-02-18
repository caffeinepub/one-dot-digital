import SectionShell from '@/components/site/SectionShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/content/services';
import { useInViewReveal } from '@/hooks/useInViewReveal';
import ServiceIcon from '@/components/site/ServiceIcon';

export default function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useInViewReveal();

  return (
    <SectionShell id="services">
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
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

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <CardHeader>
          <div className="mb-4">
            <ServiceIcon serviceId={service.id} />
          </div>
          <CardTitle className="text-2xl group-hover:text-brand-blue transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="text-base mt-2">{service.tagline}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{service.description}</p>
          <div>
            <p className="font-semibold text-sm mb-2">Includes:</p>
            <div className="flex flex-wrap gap-2">
              {service.includes.map((item) => (
                <Badge key={item} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
