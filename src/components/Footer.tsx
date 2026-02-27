import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Twitter, Heart } from 'lucide-react';

const FiverrIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.999 5.043h-5.226a4.457 4.457 0 0 0-4.455 4.456v.503H9.772V5.043H4.548v.503c0 2.46-2 4.455-4.456 4.455H0v4.959h2.546v4.997h5.226V14.96h4.546v4.997h5.226V14.96h4.455V9.999h-4.455v-.503a.45.45 0 0 1 .455-.453h4V5.043Z" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/mohummad.mahir', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/Mdiscretivelabs', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mahir-daiyan-siyam13', label: 'LinkedIn' },
  { icon: FiverrIcon, href: 'https://www.fiverr.com/mahir_daiyan_13', label: 'Fiverr' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#hero" className="text-xl font-heading font-bold text-gradient">
              MDIS Creative Labs
            </a>
            <p className="mt-2 text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              © {currentYear} Mahir Daiyan Siyam. Made with
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
