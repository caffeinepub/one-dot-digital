import {
  FileText,
  Globe,
  Megaphone,
  Palette,
  Search,
  Share2,
  TrendingUp,
} from "lucide-react";

interface ServiceIconProps {
  serviceId: string;
}

export default function ServiceIcon({ serviceId }: ServiceIconProps) {
  const iconMap: Record<string, React.ElementType> = {
    "performance-marketing": TrendingUp,
    "seo-services": Search,
    "social-media-marketing": Share2,
    "website-development": Globe,
    "graphic-designing": Palette,
    "branding-awareness": Megaphone,
    "content-writing": FileText,
  };

  const Icon = iconMap[serviceId] || Globe;

  return (
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
      <Icon size={32} />
    </div>
  );
}
