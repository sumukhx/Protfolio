import React from 'react';
import { capabilities } from '../data/portfolio';
import { Cpu, Shield, Code } from 'lucide-react';

const categoryIcons = {
  'AI/ML Development': Cpu,
  'Defense Systems': Shield,
  'Development Stack': Code
};

export const Capabilities = ({ isConsoleMode }) => {
  return (
    <section id="capabilities" className="relative py-20 lg:py-32 bg-muted/20">
      {isConsoleMode && (
        <div className="absolute inset-0 tactical-grid opacity-10" />
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Cpu className="w-3 h-3 text-primary" />
            <span className="text-xs mono text-primary font-medium">TECHNICAL_CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mission-critical technologies and frameworks for defense AI systems
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = categoryIcons[capability.category] || Cpu;
            
            return (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all glow-tactical group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm mono text-foreground font-semibold">
                    {capability.category.toUpperCase()}
                  </h3>
                </div>

                {/* Skills list */}
                <ul className="space-y-3">
                  {capability.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-start gap-2 text-sm text-foreground/80 group/item"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary mt-2 group-hover/item:w-2 group-hover/item:h-2 transition-all" />
                      <span className="group-hover/item:text-foreground transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-xs mono text-muted-foreground">
            All systems tested for field reliability and operational constraints
          </p>
        </div>
      </div>
    </section>
  );
};
