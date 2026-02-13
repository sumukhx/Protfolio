import React, { useState } from 'react';
import { experiences } from '../data/portfolio';
import { Briefcase, MapPin, Calendar, ChevronRight, X, AlertCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';

export const Experience = ({ isConsoleMode }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section id="experience" className="relative py-20 lg:py-32 overflow-hidden">
      {isConsoleMode && (
        <>
          <div className="absolute inset-0 tactical-grid opacity-20" />
          <div className="absolute inset-0 data-stream opacity-30" />
        </>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Briefcase className="w-3 h-3 text-primary" />
            <span className="text-xs mono text-primary font-medium">WORK_EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Internships and projects across AI development and implementation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline rail */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline marker */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_rgba(6,182,212,0.5)]" />

                {/* Card */}
                <div className={`w-full lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div
                    onClick={() => setSelectedExperience(exp)}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all glow-tactical cursor-pointer group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-0.5 text-xs mono rounded ${
                            exp.status === 'active' 
                              ? 'bg-primary/20 text-primary border border-primary/30' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {exp.status.toUpperCase()}
                          </span>
                          <span className="text-xs mono text-muted-foreground">{exp.ministry}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.organization}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exp.role}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-3 mb-4 text-xs">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span className="mono">{exp.dates}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Context preview */}
                    <p className="text-sm text-foreground/80 line-clamp-2">
                      {exp.context}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs mono bg-primary/10 text-primary rounded border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs mono text-muted-foreground">
                          +{exp.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission log drawer */}
      <Sheet open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto bg-background border-l border-primary/30">
          {selectedExperience && (
            <>
              <SheetHeader className="border-b border-border/50 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 text-xs mono rounded ${
                        selectedExperience.status === 'active' 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {selectedExperience.status.toUpperCase()}
                      </span>
                      <span className="text-xs mono text-muted-foreground">
                        {selectedExperience.ministry}
                      </span>
                    </div>
                    <SheetTitle className="text-2xl text-foreground">
                      {selectedExperience.organization}
                    </SheetTitle>
                    {selectedExperience.fullName && (
                      <p className="text-xs text-muted-foreground mt-1 italic">
                        {selectedExperience.fullName}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedExperience.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span className="mono">{selectedExperience.dates}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{selectedExperience.location}</span>
                  </div>
                </div>
              </SheetHeader>

              <div className="py-6 space-y-6">
                {/* Context */}
                <div>
                  <h4 className="text-sm mono text-primary font-semibold mb-2 uppercase">Context</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {selectedExperience.context}
                  </p>
                </div>

                {/* What I built */}
                <div>
                  <h4 className="text-sm mono text-primary font-semibold mb-3 uppercase">What I Built</h4>
                  <ul className="space-y-2">
                    {selectedExperience.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm mono text-primary font-semibold mb-3 uppercase">Tools & Models</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-xs mono bg-card border border-border/50 text-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Constraints */}
                <div>
                  <h4 className="text-sm mono text-primary font-semibold mb-3 uppercase flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Operational Constraints
                  </h4>
                  <ul className="space-y-2">
                    {selectedExperience.constraints.map((constraint, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{constraint}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="text-sm mono text-primary font-semibold mb-2 uppercase">Output / Impact</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {selectedExperience.impact}
                  </p>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
};
