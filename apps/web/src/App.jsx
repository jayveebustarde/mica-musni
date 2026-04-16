
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView } from 'framer-motion';
import { 
  Award, Briefcase, Code, Database, FileText, GraduationCap, 
  Mail, MapPin, Phone, ChevronRight, ExternalLink, 
  CheckCircle2, TrendingUp, Target, BarChart3, Settings,
  Shield, Zap, ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Animation variants for scroll-triggered effects
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animated section wrapper
function AnimatedSection({ children, id, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Navigation Header Component
function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'profile', 'experience', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-wide py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#hero" 
            className="text-xl font-bold tracking-tight hover:text-accent transition-colors duration-200"
          >
            KMM
          </a>
          
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-accent bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact">
            <Button size="sm" className="transition-all duration-200 hover:scale-105 active:scale-[0.98]">
              Get in Touch
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center gradient-overlay pt-20">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1659353219716-699803846194"
                alt="Professional portrait of Krezia Mica Musni, Process and Quality Engineer"
                loading="lazy"
                className="relative rounded-2xl shadow-2xl w-full h-auto aspect-[3/4] object-cover"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="space-y-4">
              <Badge variant="outline" className="text-accent border-accent">
                Available for Consulting
              </Badge>
              
              <h1 className="kinetic-text text-balance">
                Krezia Mica Musni
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent text-balance">
                Process & Quality Engineer
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                11+ Years of International Excellence in Industrial Systems & Quality Management
              </p>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-wrap gap-4">
              <a href="#experience">
                <Button 
                  size="lg" 
                  className="group transition-all duration-200 hover:scale-105 active:scale-[0.98]"
                >
                  View Project Impact
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </a>
              
              <a href="#contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="transition-all duration-200 hover:scale-105 active:scale-[0.98]"
                >
                  Contact Me
                </Button>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Göteborg, Sweden</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-accent" />
                <span>Geely Europe Innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Professional Profile Section
function ProfileSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <AnimatedSection id="profile" className="py-20 bg-muted/30">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-balance">Professional Profile</h2>
            <div className="flex justify-center">
              <Badge className="bg-[hsl(var(--gold))] text-background text-base px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                Certified Lean Six Sigma Green Belt
              </Badge>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                  A results-driven Process & Quality Engineer with over 11 years of international 
                  experience in industrial systems, quality management, and operational excellence. 
                  Specializing in Lean Six Sigma methodologies, ISO standards implementation, and 
                  cross-functional team leadership across manufacturing and service industries. 
                  Proven track record in driving process optimization, reducing defects, and 
                  implementing sustainable quality improvements in diverse cultural environments.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
          >
            {[
              { icon: TrendingUp, label: 'Process Optimization', value: '11+ Years' },
              { icon: Target, label: 'Quality Systems', value: 'ISO 9001/14001' },
              { icon: BarChart3, label: 'Continuous Improvement', value: 'Lean Six Sigma' }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:bg-muted/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6 space-y-3">
                    <stat.icon className="h-8 w-8 mx-auto text-accent" />
                    <p className="font-semibold text-lg">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Experience Timeline Component
function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      role: 'Process & Quality Consultant',
      company: 'Geely Europe Innovation',
      location: 'Göteborg, Sweden',
      period: 'Current',
      description: 'Leading quality assurance initiatives and process improvement projects for European automotive innovation center. Implementing Lean Six Sigma methodologies and ISO compliance frameworks.',
      current: true
    },
    {
      role: 'Quality Systems Engineer',
      company: 'Swooc Games',
      location: 'USA (Remote)',
      period: '2021-2023',
      description: 'Established quality assurance protocols and process documentation for gaming software development. Implemented FMEA and 8D problem-solving methodologies.',
      current: false
    },
    {
      role: 'Senior Process Analyst',
      company: 'Wells Fargo',
      location: 'Philippines',
      period: '2017-2021',
      description: 'Managed process optimization projects in financial services operations. Led cross-functional teams in implementing Six Sigma DMAIC projects achieving 23% efficiency improvement.',
      current: false
    },
    {
      role: 'Quality Assurance Specialist',
      company: 'Jollibee Foods Corporation',
      location: 'Philippines',
      period: '2014-2017',
      description: 'Implemented ISO 9001:2015 and HACCP quality management systems. Conducted internal audits and supplier quality assessments across food manufacturing facilities.',
      current: false
    },
    {
      role: 'Industrial Engineer',
      company: 'Toshiba',
      location: 'Philippines',
      period: '2012-2014',
      description: 'Participated in manufacturing process design and optimization. Applied Lean manufacturing principles to reduce waste and improve production efficiency.',
      current: false
    }
  ];

  return (
    <AnimatedSection id="experience" className="py-20">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-balance">Career Progression</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through international industrial excellence and quality leadership
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Timeline node */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:-translate-x-1/2 flex items-center justify-center">
                      {exp.current && (
                        <div className="absolute w-8 h-8 rounded-full bg-accent/20 animate-ping"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 pl-20 md:pl-0">
                      <Card className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                        exp.current ? 'border-accent' : ''
                      }`}>
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-2">
                              <CardTitle className="text-xl">{exp.role}</CardTitle>
                              <CardDescription className="text-base">
                                {exp.company} • {exp.location}
                              </CardDescription>
                            </div>
                            {exp.current && (
                              <Badge className="bg-accent text-accent-foreground">Current</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Skills Grid Component
function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const methodsSkills = [
    { name: 'Lean Six Sigma DMAIC', icon: TrendingUp },
    { name: 'ISO 9001:2015', icon: Shield },
    { name: 'ISO 14001:2015', icon: CheckCircle2 },
    { name: 'FMEA Analysis', icon: Target },
    { name: '8D Problem Solving', icon: Zap },
    { name: 'Root Cause Analysis', icon: BarChart3 }
  ];

  const softwareSkills = [
    { name: 'Jira', icon: Settings },
    { name: 'iGrafx Process', icon: Code },
    { name: 'SAP S/4HANA', icon: Database },
    { name: 'Spotfire DXP', icon: BarChart3 },
    { name: 'Minitab', icon: TrendingUp },
    { name: 'MS Project', icon: FileText }
  ];

  return (
    <AnimatedSection id="skills" className="py-20 bg-muted/30">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-balance">Skills & Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical expertise across methodologies and enterprise systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Methods Section */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-accent" />
                    Methodologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {methodsSkills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        <skill.icon className="h-3 w-3 mr-2" aria-hidden="true" />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Software Section */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-accent" />
                    Software & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {softwareSkills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        <skill.icon className="h-3 w-3 mr-2" aria-hidden="true" />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Education & Certifications Section
function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Bachelor of Science in Industrial Engineering',
      institution: 'Polytechnic University of the Philippines',
      location: 'Manila, Philippines',
      year: '2008-2012',
      icon: GraduationCap
    },
    {
      degree: 'Lean Six Sigma Green Belt Certification',
      institution: 'International Association for Six Sigma Certification',
      location: 'International',
      year: '2018',
      icon: Award
    },
    {
      degree: 'ISO 9001:2015 Internal Auditor Training',
      institution: 'TÜV SÜD Academy',
      location: 'Europe',
      year: '2020',
      icon: Shield
    }
  ];

  return (
    <AnimatedSection id="education" className="py-20">
      <div className="container-narrow">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-balance">Education & Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and professional credentials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <item.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <CardTitle className="text-lg leading-tight">
                          {item.degree}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm font-medium">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                    <p className="text-sm text-muted-foreground">{item.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Contact Footer Component
function ContactFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 bg-muted/30 border-t border-border">
      <div className="container-narrow">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-balance">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open to consulting opportunities and quality engineering collaborations
            </p>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <a
                    href="mailto:kreziamica.musni@gmail.com"
                    className="block text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    kreziamica.musni@gmail.com
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    <span className="font-semibold">Phone</span>
                  </div>
                  <a
                    href="tel:+46701493241"
                    className="block text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    070-149 32 41
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                    <span className="font-semibold">Location</span>
                  </div>
                  <p className="text-muted-foreground">
                    Göteborg, Sweden
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 Krezia Mica Musni. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <>
      <Helmet>
        <title>Krezia Mica Musni | Process & Quality Engineer | 11+ Years Experience</title>
        <meta 
          name="description" 
          content="Professional portfolio of Krezia Mica Musni - Certified Lean Six Sigma Green Belt with 11+ years of international experience in process optimization, quality management, and industrial engineering across Europe and Asia."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <ProfileSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactFooter />
        </main>
      </div>
    </>
  );
}

export default App;
