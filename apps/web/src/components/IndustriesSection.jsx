
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Globe,
  Gamepad2,
  Landmark,
  UtensilsCrossed,
  Cpu
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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

const industries = [
  {
    title: 'Global Shared Services',
    companies: ['Geely Europe Innovation and Collaboration', 'Wells Fargo'],
    description: 'Supporting global companies with structured shared services—standardising processes, governance, and operational support across HR, IT, Finance, and management systems (QMS/EMS/ISMS) to ensure consistent service delivery and measurable performance.',
    icon: Globe,
    gradient: 'from-blue-600 to-blue-900',
    colSpan: 'lg:col-span-3'
  },
  {
    title: 'Financial Services',
    companies: ['Wells Fargo'],
    description: 'Applying process engineering, change request governance, and stakeholder collaboration across international financial operations, business units, and onshore and offshore teams.',
    icon: Landmark,
    gradient: 'from-green-600 to-green-900',
    colSpan: 'lg:col-span-3'
  },
  {
    title: 'Gaming Software',
    companies: ['Swooc Games'],
    description: 'Improving business process documentation and organization through Asana, Slab, SOPs, and LucidChart in a global remote setup.',
    icon: Gamepad2,
    gradient: 'from-purple-600 to-purple-900',
    colSpan: 'lg:col-span-2'
  },
  {
    title: 'Food & Beverage',
    companies: ['Jollibee Foods'],
    description: 'Leading restaurant systems initiatives, electronic shift management improvements, and nationwide operational guideline rollouts.',
    icon: UtensilsCrossed,
    gradient: 'from-amber-600 to-amber-900',
    colSpan: 'lg:col-span-2'
  },
  {
    title: 'Electronics Manufacturing',
    companies: ['Toshiba'],
    description: 'Managing product qualifications, process quality checks, 8D analysis, and ISO-aligned manufacturing quality assurance.',
    icon: Cpu,
    gradient: 'from-slate-600 to-slate-900',
    colSpan: 'lg:col-span-2'
  }
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="industries" className="py-20">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-balance">Industries & Sectors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cross-industry expertise applying universal quality principles to diverse operational challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className={`group ${industry.colSpan}`}
              >
                <Card className="h-full overflow-hidden border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 flex flex-col">
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${industry.gradient} flex items-center justify-center group`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <industry.icon className="relative h-24 w-24 text-white/90 group-hover:text-white group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">
                      {industry.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {industry.companies.map((company, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
