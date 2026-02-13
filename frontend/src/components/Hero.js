import React from 'react';
import { personalInfo } from '../data/portfolio';
import { MapPin, Crosshair, Activity } from 'lucide-react';

export const Hero = ({ isConsoleMode }) => {
  return (
    <section className={`
      relative min-h-screen flex items-center justify-center overflow-hidden
      ${isConsoleMode ? 'tactical-grid' : ''}
    `}>
      {/* Animated background */}
      {isConsoleMode && (
        <>
          <div className="absolute inset-0 radar-sweep opacity-30" />
          <div className="absolute inset-0 scan-line opacity-20" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with tactical frame */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              {/* Tactical frame container */}
              <div className="tactical-frame w-80 h-80 sm:w-96 sm:h-96 rounded-lg overflow-hidden">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Corner brackets */}
              <div className="corner-brackets absolute inset-0" />
              
              {/* Status indicator */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-background border border-primary rounded-full">
                <Activity className="w-3 h-3 text-primary animate-pulse-tactical" />
                <span className="text-xs mono text-primary font-medium">ACTIVE</span>
              </div>
              
              {/* Coordinates */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-background border border-border rounded-full">
                <MapPin className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs mono text-muted-foreground">28.6127° N, 77.2330° E</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Classification label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
              <Crosshair className="w-3 h-3 text-primary" />
              <span className="text-xs mono text-primary font-medium">AI_SOLUTIONS_ENGINEER</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              {personalInfo.name}
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl text-gradient-tactical font-semibold">
              {personalInfo.title}
            </p>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all glow-tactical">
                <div className="text-2xl font-bold text-primary mono">04</div>
                <div className="text-xs text-muted-foreground mt-1">Internships</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all glow-tactical">
                <div className="text-2xl font-bold text-primary mono">09</div>
                <div className="text-xs text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all glow-tactical">
                <div className="text-2xl font-bold text-primary mono">24+</div>
                <div className="text-xs text-muted-foreground mt-1">Months Experience</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#experience"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all glow-tactical font-medium"
              >
                View Work Experience
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-card border-2 border-primary text-foreground rounded-lg hover:bg-primary/10 transition-all font-medium"
              >
                Initiate Contact
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-card border-2 border-primary text-foreground rounded-lg hover:bg-primary/10 transition-all font-medium"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs mono text-muted-foreground">SCROLL</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
