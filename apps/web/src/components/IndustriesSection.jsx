
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    title: 'Automotive',
    companies: ['Geely Europe Innovation', 'Toshiba'],
    description: 'Driving quality assurance and process optimization in European automotive innovation centers.',
    image: 'https://images.unsplash.com/photo-1694716061062-be39f971dac5',
    alt: 'Modern automotive design and engineering concept with sleek vehicle lines',
    colSpan: 'lg:col-span-3'
  },
  {
    title: 'Gaming Software',
    companies: ['Swooc Games'],
    description: 'Establishing robust QA protocols and process documentation for digital entertainment.',
    image: 'https://images.unsplash.com/photo-1683029096295-7680306aa37d',
    alt: 'High-performance gaming setup with illuminated peripherals',
    colSpan: 'lg:col-span-3'
  },
  {
    title: 'Financial Services',
    companies: ['Wells Fargo'],
    description: 'Leading cross-functional Six Sigma DMAIC projects to improve operational efficiency.',
    image: 'https://images.unsplash.com/photo-1649734929640-d0c0f79da545',
    alt: 'Abstract financial data visualization and market analysis charts',
    colSpan: 'lg:col-span-2'
  },
  {
    title: 'Food & Beverage',
    companies: ['Jollibee Foods'],
    description: 'Implementing ISO 9001:2015 and HACCP systems across manufacturing facilities.',
    image: 'https://images.unsplash.com/photo-1666564383040-4aacdd1b7ce9',
    alt: 'Professional food production and quality control environment',
    colSpan: 'lg:col-span-2'
  },
  {
    title: 'Electronics Manufacturing',
    companies: ['Toshiba'],
    description: 'Applying Lean manufacturing principles to reduce waste and optimize production lines.',
    image: 'https://images.unsplash.com/photo-1677442135131-4d7c123aef1c',
    alt: 'Precision electronic components and circuit board manufacturing',
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
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <img 
                      src={industry.image} 
                      alt={industry.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
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
