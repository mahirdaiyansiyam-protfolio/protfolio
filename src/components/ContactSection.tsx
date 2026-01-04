import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle, Send, User, AtSign, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:mdmahirdaiyan69@gmail.com?subject=${subject}&body=${body}`;
    toast.success('Opening your email client...');
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Get in Touch
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Let's Create
              <br />
              <span className="text-gradient">Something Amazing</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ready to bring your vision to life? I'd love to hear about your project. 
              Drop me a message or reach out directly through email or WhatsApp.
            </p>

            {/* Contact buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:mdmahirdaiyan69@gmail.com"
                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all card-3d"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-sm">mdmahirdaiyan69@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/8801790330221"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all card-3d"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="font-medium">+880 1790330221</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-xl font-heading font-semibold mb-6">
                Send a Message
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
