import SectionShell from '@/components/site/SectionShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { contactDetails } from '@/content/contact';
import { useInViewReveal } from '@/hooks/useInViewReveal';

export default function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useInViewReveal();
  const { ref: contentRef, isVisible: contentVisible } = useInViewReveal({ delay: 200 });

  return (
    <SectionShell id="contact" className="bg-white">
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Get in Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to transform your digital presence? Let's start the conversation.
        </p>
      </div>

      <div
        ref={contentRef}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Card className="overflow-hidden bg-white border-border shadow-sm">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>

                <a
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm">{contactDetails.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${contactDetails.phone}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-foreground">Phone</p>
                    <p className="text-muted-foreground text-sm">{contactDetails.phone}</p>
                  </div>
                </a>

                <a
                  href={contactDetails.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <SiInstagram className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-foreground">Instagram</p>
                    <p className="text-muted-foreground text-sm">@one.dotdigital</p>
                  </div>
                </a>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col justify-center space-y-6 bg-gradient-to-br from-primary/5 to-secondary p-8 rounded-lg border border-primary/20">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Ready to Grow?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how we can help transform your business into a digital
                    powerhouse. Reach out today and let's get started.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full"
                  >
                    <a href={`mailto:${contactDetails.email}`}>Send us an Email</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    <a href={`tel:${contactDetails.phone}`}>Call us Now</a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
