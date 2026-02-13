import React from 'react';
import { leadership } from '../data/portfolio';
import { Award, Users, ChevronRight } from 'lucide-react';

export const Leadership = ({ isConsoleMode }) => {
  return (
    <section id="leadership" className="relative py-20 lg:py-32 bg-muted/20">
      {isConsoleMode && (
        <div className="absolute inset-0 tactical-grid opacity-10" />
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Award className="w-3 h-3 text-primary" />
            <span className="text-xs mono text-primary font-medium">LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Positions of Responsibility
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leading initiatives and driving impact across the university
          </p>
        </div>

        {/* Leadership cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {leadership.map((position, index) => (
            <div
              key={position.id}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all glow-tactical"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {position.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {position.organization}
                  </p>
                  <span className="text-xs mono text-primary">
                    {position.dates}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3">
                {position.responsibilities.map((resp, respIndex) => (
                  <li
                    key={respIndex}
                    className="flex items-start gap-2 text-sm text-foreground/80 group/item"
                  >
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                    <span className="group-hover/item:text-foreground transition-colors">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
