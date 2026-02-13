import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded border-2 border-primary bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg mono">SC</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{personalInfo.name}</div>
                <div className="text-xs text-muted-foreground mono">AI_SOLUTIONS</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building intelligent AI systems for real-world applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm mono text-primary font-semibold mb-4 uppercase">Navigation</h4>
            <nav className="space-y-2">
              <a href="#origin" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Overview
              </a>
              <a href="#capabilities" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Capabilities
              </a>
              <a href="#experience" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#leadership" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Leadership
              </a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm mono text-primary font-semibold mb-4 uppercase">Connect</h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all glow-tactical"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all glow-tactical"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all glow-tactical"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="mono">
              © {currentYear} {personalInfo.name}. All systems operational.
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-tactical" />
              <span className="mono">STATUS: ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
